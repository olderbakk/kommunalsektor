import { defineField, defineType } from "sanity";
import { ssRichBlock } from "./ssRichBlock";

// Eitt av dei fire temaa i Handlingsrommet. Kvart tema har eit kort på
// framsida og ei eiga side under /tema/<slug>.
export default defineType({
  name: "ssTema",
  title: "Tema",
  type: "document",
  fields: [
    defineField({
      name: "tittel",
      title: "Tittel",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Adresse",
      type: "slug",
      options: { source: "tittel", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "rekkjefolgje",
      title: "Rekkjefølgje",
      type: "number",
      description: "Styrer kva rekkjefølgje korta står i på framsida",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "posisjon",
      title: "Plass i figuren",
      type: "string",
      description:
        "Kvar temaet ligg i Handlingsrommet-figuren. Styrer kva del av merket som er markert.",
      options: {
        list: [
          { title: "Topp", value: "topp" },
          { title: "Høgre", value: "hogre" },
          { title: "Botn", value: "botn" },
          { title: "Venstre", value: "venstre" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "kortTekst",
      title: "Korttekst",
      type: "text",
      rows: 3,
      description: "To setningar. Dette står på kortet på framsida.",
      validation: (r) => r.required().max(260),
    }),
    defineField({
      name: "ingress",
      title: "Ingress",
      type: "text",
      rows: 3,
      description: "Står øvst på temasida, under tittelen.",
    }),
    defineField({
      name: "body",
      title: "Brødtekst",
      type: "array",
      of: [ssRichBlock],
    }),
  ],
  orderings: [
    {
      title: "Rekkjefølgje",
      name: "rekkjefolgje",
      by: [{ field: "rekkjefolgje", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "tittel", subtitle: "kortTekst" },
  },
});
