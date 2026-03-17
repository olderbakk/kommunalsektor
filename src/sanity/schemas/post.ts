import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Artikkel",
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
      name: "summary",
      title: "Samandrag",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Innhald",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tags",
      title: "Emneord",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Publisert",
      type: "datetime",
    }),
    defineField({
      name: "image",
      title: "Bilete",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Publiseringsdato, nyaste fyrst",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      date: "publishedAt",
    },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString("nn-NO")
          : "Ikkje publisert",
      };
    },
  },
});
