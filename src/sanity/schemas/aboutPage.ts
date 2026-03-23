import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "Om oss",
  type: "document",
  groups: [
    { name: "intro", title: "Intro" },
    { name: "partnarar", title: "Partnarar" },
    { name: "offentlege", title: "Offentlege hjelparar" },
  ],
  fields: [
    // ── INTRO ──
    defineField({
      name: "heading",
      title: "Overskrift",
      type: "string",
      group: "intro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introLeft",
      title: "Venstre kolonne",
      type: "array",
      of: [{ type: "block" }],
      group: "intro",
    }),
    defineField({
      name: "introRight",
      title: "Høgre kolonne",
      type: "array",
      of: [{ type: "block" }],
      group: "intro",
    }),

    // ── PARTNARAR ──
    defineField({
      name: "partnararHeading",
      title: "Overskrift",
      type: "string",
      group: "partnarar",
    }),
    defineField({
      name: "partnarar",
      title: "Partnarar",
      type: "array",
      group: "partnarar",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Namn", type: "string" }),
            defineField({ name: "url", title: "Lenke", type: "url" }),
            defineField({ name: "text", title: "Beskriving", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),

    // ── OFFENTLEGE HJELPARAR ──
    defineField({
      name: "offentlegeHeading",
      title: "Overskrift",
      type: "string",
      group: "offentlege",
    }),
    defineField({
      name: "offentlegePartnarar",
      title: "Offentlege hjelparar",
      type: "array",
      group: "offentlege",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Namn", type: "string" }),
            defineField({ name: "text", title: "Beskriving", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Om oss" }),
  },
});
