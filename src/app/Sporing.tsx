'use client';

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

/**
 * Sporing for begge domena denne appen serverer.
 *
 * Innsikt-teljaren er hovudkjelda. Han sender vertsnamnet med, så
 * selsengsystaddal.no og kommunalsektor.no blir skilde utan triks, og tala
 * hamnar rett i vår eigen database.
 *
 * Vercel Web Analytics står igjen som eit ekstra syn i Vercel-dashbordet.
 * API-et deira gir ikkje ut tal på Hobby-planen, så det er berre til å kikke
 * på. Prefikset /ss og /ks er det som skil merkevarene der.
 */
export default function Sporing() {
  return (
    <>
      <Script
        src="https://innsikt.selsengsystaddal.no/teljar.js"
        data-til="https://innsikt.selsengsystaddal.no/api/spor"
        strategy="afterInteractive"
      />
      <Analytics
        beforeSend={(event) => {
          try {
            const u = new URL(event.url);
            const merke = u.hostname.includes("selsengsystaddal") ? "ss" : "ks";
            if (u.pathname === "/" + merke || u.pathname.startsWith("/" + merke + "/")) {
              return event;
            }
            u.pathname = "/" + merke + (u.pathname === "/" ? "" : u.pathname);
            return { ...event, url: u.toString() };
          } catch {
            return event;
          }
        }}
      />
    </>
  );
}
