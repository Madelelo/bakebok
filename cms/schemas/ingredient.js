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
  ],
  preview: {
    select: { title: "name" },
  },
};
