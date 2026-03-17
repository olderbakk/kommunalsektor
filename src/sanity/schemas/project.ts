import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Prosjekt",
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
      name: "municipality",
      title: "Kommune",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Kort beskrivelse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Innhold",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
