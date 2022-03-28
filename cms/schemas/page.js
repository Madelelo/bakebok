export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of page page",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      description: "Url slug",
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body",
      type: "text",
      row: 6,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Picture",
    },
  ],
  preview: {
    select: { title: "title" },
  },
};
