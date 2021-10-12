export default {
  name: "instruction",
  title: "Instruction",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Instruction",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
