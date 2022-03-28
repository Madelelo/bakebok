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
      type: "string",
      description: "Introduction",
    },
    {
      name: "body",
      title: "Body",
      type: "string",
      description: "Main body",
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
