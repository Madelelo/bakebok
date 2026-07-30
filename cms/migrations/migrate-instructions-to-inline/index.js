import { createClient } from "@sanity/client";
import { at, defineMigration, set } from "sanity/migrate";

export default defineMigration({
  title: "Migrate referenced instructions to inline recipe steps",
  documentTypes: ["recipe"],
  filter: "defined(instructions) && !defined(instructionsV2)",

  migrate: {
    async document(document, context) {
      const references = (document.instructions || []).filter(
        (instruction) => instruction?._ref,
      );

      if (references.length !== document.instructions.length) {
        throw new Error(
          `Recipe ${document._id} contains an invalid instruction reference`,
        );
      }

      // Sanity 3.99 returns unbound methods from the restricted migration client.
      // Recreate the client from its read-only config so reference lookups work.
      const client = createClient(context.client.config());
      const instructionDocuments = await client.getDocuments(
        references.map((reference) => reference._ref),
      );
      const instructionsById = new Map(
        instructionDocuments
          .filter(Boolean)
          .map((instruction) => [instruction._id, instruction]),
      );

      const steps = references.map((reference, index) => {
        const instruction = instructionsById.get(reference._ref);

        if (!instruction || typeof instruction.name !== "string") {
          throw new Error(
            `Could not migrate instruction ${reference._ref} in recipe ${document._id}`,
          );
        }

        return {
          _key: `step-${index}-${reference._ref.replace(/[^a-zA-Z0-9_-]/g, "-")}`,
          _type: "instructionStep",
          text: instruction.name,
        };
      });

      return at("instructionsV2", set(steps));
    },
  },
});
