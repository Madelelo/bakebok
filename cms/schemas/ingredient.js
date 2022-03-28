export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of ingredient",
    },
    {
      name: "cupconverter",
      title: "Cup converter",
      type: "number",
      description: "Hvor mange gram tilsvarer 1 cup",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
