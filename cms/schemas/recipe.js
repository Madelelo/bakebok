export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of recipe",
    },
    {
      name: "ingredients",
      title: "Ingridients",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
      description: "List of ingredients",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
