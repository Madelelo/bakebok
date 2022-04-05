import ingredient from "./ingredient";

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
              options: {
                list: [
                  { title: "ss", value: "ss" },
                  { title: "ts", value: "ts" },
                  { title: "cup", value: "cup" },
                  { title: "gram", value: "gram" },
                  { title: "stk", value: "stk" },
                  { title: "dæsj", value: "dæsj" },
                  { title: "dl", value: "dl " },
                  { title: "L", value: "L" },
                ],
              },
            },
            {
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
              description: "Ingredient",
            },
          ],
          description: "Ingredient for recipe",
          preview: {
            select: {
              ingredient: "ingredient.name",
              unit: "unit",
              amount: "amount",
            },

            prepare(selection) {
              const { ingredient, unit, amount } = selection;

              return {
                title: `${amount} ${unit} ${ingredient}`,
                media: "",
              };
            },
          },
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
      options: {
        list: [
          { title: "Varmluft", value: "Varmluft" },
          { title: "Over/under", value: "Over/under" },
          { title: "Kombo", value: "Kombo" },
        ],
      },
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
          options: {
            list: [
              { title: "C", value: "C" },
              { title: "F", value: "F" },
            ],
          },
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
          title: "Size value",
          type: "number",
          description: "Pan size value",
        },
        {
          name: "size_unit",
          title: "Size unit",
          type: "string",
          description: "Pan size unit (cm, in)",
          options: {
            list: [
              { title: "in", value: "in" },
              { title: "cm", value: "cm" },
            ],
          },
        },
      ],

      description: "Pan measuements",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Category",
      options: {
        list: [
          { title: "Kjeks og cookies", value: "Cookies" },
          { title: "Kaker og brownies", value: "Kaker" },
          { title: "Brød og gjærbakst", value: "Brød" },
          { title: "Desserter", value: "Desserter" },
          { title: "Frosting og tilbehør", value: "Frosting" },
        ],
      },
    },
  ],

  preview: {
    select: { title: "name" },
  },
};
