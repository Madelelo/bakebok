import { at, defineMigration, del, unset } from "sanity/migrate";

export default defineMigration({
  title: "Remove legacy instruction references and documents",
  documentTypes: ["recipe", "instruction"],
  filter: 'defined(instructions) || _type == "instruction"',

  migrate: {
    document(document) {
      if (document._type === "instruction") {
        return del(document._id);
      }

      return at("instructions", unset());
    },
  },
});
