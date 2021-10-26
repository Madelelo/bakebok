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
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of recipe",
    },

    {
      name: "ingredients",
      title: "Ingridients",
      type: "array",
      of: [
        {
          name: "ingredientForRecipe",
          title: "Ingredient",
          type: "object",
          fields: [
            {
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
              description: "Ingredient",
            },
            {
              name: "amount",
              title: "Amount",
              type: "number",
              description: "Amounf of ingredient",
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              description: "Unit ",
            },
          ],
          description: "Ingredient for recipe",
        },
      ],

      description: "List of ingredients",
    },
    {
      name: "cooktime",
      title: "Cooktime ",
      type: "string",
      description: "Cooking time in minutes",
    },
    {
      name: "oven",
      title: "Oven",
      type: "string",
      description: "Oven settings (varmluft, over/under etc.",
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "reference", to: [{ type: "instruction" }] }],
      description: "List of instructions",
    },
    {
      name: "temperature",
      title: "Temperature",
      type: "object",
      fields: [
        {
          name: "value",
          title: "Value",
          type: "number",
          description: "Temp value",
        },
        {
          name: "unit",
          title: "Unit",
          type: "string",
          description: "Temp unit",
        },
      ],
      description: "Cooking temp",
    },
    {
      name: "pan",
      title: "Pan",
      type: "object",
      fields: [
        {
          name: "shape",
          title: "Shape",
          type: "string",
          description: "Pan shape",
        },
        {
          name: "size_value",
          title: "Size_value",
          type: "number",
          description: "Pan size value",
        },
        {
          name: "size_unit",
          title: "Size unit",
          type: "string",
          description: "Pan size unit (cm, in)",
        },
      ],

      description: "Pan measuements",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
