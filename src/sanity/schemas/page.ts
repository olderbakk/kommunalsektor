import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Side",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Innhold",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
