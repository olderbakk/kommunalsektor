import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "frontpage",
  title: "Framside",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "kvifor", title: "Kvifor" },
    { name: "operativsystem", title: "Operativsystem" },
    { name: "framgangsmaate", title: "Framgangsmåte" },
    { name: "dome", title: "Døme" },
    { name: "kontakt", title: "Kontakt" },
  ],
  fields: [
    // ── HERO ──
    defineField({
      name: "heroHeading",
      title: "Overskrift",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Undertekst",
      type: "text",
      rows: 2,
      group: "hero",
    }),

    // ── KVIFOR ──
    defineField({
      name: "kviforHeading",
      title: "Overskrift",
      type: "string",
      group: "kvifor",
    }),
    defineField({
      name: "kviforLeftColumn",
      title: "Venstre kolonne",
      type: "array",
      of: [{ type: "block" }],
      group: "kvifor",
    }),
    defineField({
      name: "kviforRightColumn",
      title: "Høgre kolonne",
      type: "array",
      of: [{ type: "block" }],
      group: "kvifor",
    }),

    // ── OPERATIVSYSTEM ──
    defineField({
      name: "osHeading",
      title: "Overskrift",
      type: "string",
      group: "operativsystem",
    }),
    defineField({
      name: "osIntro",
      title: "Introduksjon",
      type: "text",
      rows: 4,
      group: "operativsystem",
    }),
    defineField({
      name: "osRows",
      title: "Gamle vs. nye system",
      type: "array",
      group: "operativsystem",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "oldTitle", title: "Gammalt system — tittel", type: "string" }),
            defineField({ name: "oldDesc", title: "Gammalt system — beskriving", type: "text", rows: 2 }),
            defineField({ name: "newTitle", title: "Nytt system — tittel", type: "string" }),
            defineField({ name: "newDesc", title: "Nytt system — beskriving", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "oldTitle", subtitle: "newTitle" },
            prepare: ({ title, subtitle }) => ({ title: `${title} → ${subtitle}` }),
          },
        }),
      ],
    }),
    defineField({
      name: "osSummary",
      title: "Oppsummeringslinje",
      type: "text",
      rows: 2,
      group: "operativsystem",
    }),
    defineField({
      name: "osOutcomes",
      title: "Resultat",
      type: "array",
      group: "operativsystem",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Tittel", type: "string" }),
            defineField({ name: "desc", title: "Beskriving", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    // ── FRAMGANGSMÅTE ──
    defineField({
      name: "fmHeading",
      title: "Overskrift",
      type: "string",
      group: "framgangsmaate",
    }),
    defineField({
      name: "fmSubtitle",
      title: "Undertekst",
      type: "text",
      rows: 2,
      group: "framgangsmaate",
    }),
    defineField({
      name: "fmSteps",
      title: "Steg",
      type: "array",
      group: "framgangsmaate",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "num", title: "Nummer", type: "string" }),
            defineField({ name: "label", title: "Etikett (tab)", type: "string" }),
            defineField({ name: "title", title: "Tittel", type: "string" }),
            defineField({
              name: "activities",
              title: "Aktivitetar",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "effects",
              title: "Effektar",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { num: "num", title: "title" },
            prepare: ({ num, title }) => ({ title: `${num}. ${title}` }),
          },
        }),
      ],
    }),
    defineField({
      name: "fmCalloutLeftTitle",
      title: "Venstre boks — tittel",
      type: "string",
      group: "framgangsmaate",
    }),
    defineField({
      name: "fmCalloutLeftItems",
      title: "Venstre boks — punkt",
      type: "array",
      of: [{ type: "string" }],
      group: "framgangsmaate",
    }),
    defineField({
      name: "fmCalloutRightTitle",
      title: "Høgre boks — tittel",
      type: "string",
      group: "framgangsmaate",
    }),
    defineField({
      name: "fmCalloutRightItems",
      title: "Høgre boks — punkt",
      type: "array",
      of: [{ type: "string" }],
      group: "framgangsmaate",
    }),

    // ── DØME ──
    defineField({
      name: "domeHeading",
      title: "Overskrift",
      type: "string",
      group: "dome",
    }),
    defineField({
      name: "domeSubtitle",
      title: "Undertekst",
      type: "text",
      rows: 2,
      group: "dome",
    }),

    // ── KONTAKT ──
    defineField({
      name: "kontaktHeading",
      title: "Overskrift",
      type: "string",
      group: "kontakt",
    }),
    defineField({
      name: "kontaktSubtitle",
      title: "Undertekst",
      type: "text",
      rows: 2,
      group: "kontakt",
    }),
    defineField({
      name: "kontaktEmail",
      title: "E-postadresse",
      type: "string",
      group: "kontakt",
    }),
    defineField({
      name: "kontaktCompany",
      title: "Selskapsnamn",
      type: "string",
      group: "kontakt",
    }),
    defineField({
      name: "kontaktPeople",
      title: "Personar",
      type: "string",
      group: "kontakt",
    }),
    defineField({
      name: "kontaktLocation",
      title: "Stad",
      type: "string",
      group: "kontakt",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Framside" }),
  },
});
