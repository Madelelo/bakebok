import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/schema";

export default defineConfig({
  name: "default",
  title: "Bakebok",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "33hgh7pg",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});