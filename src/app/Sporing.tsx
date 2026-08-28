'use client';

import { Analytics } from "@vercel/analytics/react";

/**
 * Éin Next.js-app serverer to domene. Vercel Web Analytics har ingen
 * hostname-dimensjon, så me set eit merkevareprefiks på stien i staden:
 * /ss = selsengsystaddal.no, /ks = kommunalsektor.no.
 * Innsikt-dashbordet summerer per prefiks.
 */
export default function Sporing() {
  return (
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
  );
}
