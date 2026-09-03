import { client } from "@/sanity/lib/client";
import SSAnimatedHeadline from "./SSAnimatedHeadline";
import SSHandlingsromMerke from "./SSHandlingsromMerke";
import SSLenke from "./SSLenke";
import SSSubstack from "./SSSubstack";

type Posisjon = "topp" | "hogre" | "botn" | "venstre";

type Tema = {
  _id: string;
  tittel: string;
  slug: { current: string };
  posisjon: Posisjon;
  kortTekst: string;
};

type Framside = {
  heroVenstre?: string;
  heroVerb?: string;
  heroHogre?: string;
  tagline?: string;
  bolk1Tittel?: string;
  bolk1Ingress?: string;
  temaTittel?: string;
  effektTittel?: string;
  effektar?: string[];
  ctaTekst?: string;
  substackTittel?: string;
  substackIngress?: string;
  substackUrl?: string;
  substackLenketekst?: string;
  substackTal?: number;
  folkaTittel?: string;
  folkaIngress?: string;
  folkaLenketekst?: string;
};

async function hentData(): Promise<{ side: Framside | null; tema: Tema[] }> {
  return client.fetch(
    `{
      "side": *[_type == "ssHomepage"][0],
      "tema": *[_type == "ssTema"] | order(rekkjefolgje asc) {
        _id, tittel, slug, posisjon, kortTekst
      }
    }`,
    {},
    { next: { revalidate: 60 } },
  );
}

const merkelapp =
  "text-[11px] uppercase tracking-[0.16em] font-medium text-[#A65F3D]";

export default async function SSHome() {
  const { side, tema } = await hentData();

  if (!side) {
    return (
      <div className="px-6 sm:px-10 py-20 text-center text-[#938C7F]">
        <p>
          Innhald ikkje funne. Legg til framsideinnhald i{" "}
          <a href="/studio" className="underline">
            studio
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ── Toppen ──────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <svg
              viewBox="0 0 48 34"
              fill="#314D3C"
              role="img"
              aria-label="Selseng & Systaddal"
              className="w-[96px] h-auto"
            >
              <rect x="0" y="24" width="22" height="9" rx="2.5" />
              <rect x="13" y="12.5" width="22" height="9" rx="2.5" />
              <rect x="26" y="1" width="22" height="9" rx="2.5" />
            </svg>
          </div>
          <div className="mb-4 sm:mb-5">
            <SSAnimatedHeadline
              venstre={side.heroVenstre}
              verb={side.heroVerb}
              hogre={side.heroHogre}
            />
          </div>
          {side.tagline && <p className="ss-subtitle">{side.tagline}</p>}
        </div>
      </section>

      {/* ── 1 · Utviklingskapasitet ─────────────────────────── */}
      <section className="px-6 sm:px-10 pb-20 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          {side.bolk1Tittel && (
            <h2 className="text-2xl sm:text-[2rem] font-medium text-[#2F2B26] tracking-tight leading-snug text-balance">
              {side.bolk1Tittel}
            </h2>
          )}
          {side.bolk1Ingress && (
            <p className="text-[#6B6860] leading-relaxed text-lg mt-4 max-w-xl">
              {side.bolk1Ingress}
            </p>
          )}

          {tema.length > 0 && (
            <>
              {side.temaTittel && (
                <p className={`${merkelapp} mt-14 mb-5`}>{side.temaTittel}</p>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                {tema.map((t) => (
                  <SSLenke
                    key={t._id}
                    href={`/ss/tema/${t.slug.current}`}
                    className="group flex flex-col rounded-2xl border border-[#E4DBCB] bg-[#FAF8F3] p-6 hover:border-[#CFC5B2] hover:shadow-sm transition-all"
                  >
                    <SSHandlingsromMerke posisjon={t.posisjon} />
                    <h3 className="text-[#2F2B26] font-medium text-lg tracking-tight mt-5">
                      {t.tittel}
                    </h3>
                    <p className="text-[#6B6860] text-sm leading-relaxed mt-2">
                      {t.kortTekst}
                    </p>
                    <span className="text-[#A65F3D] text-sm font-medium mt-5">
                      Les meir{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </span>
                  </SSLenke>
                ))}
              </div>
            </>
          )}

          {side.effektar && side.effektar.length > 0 && (
            <>
              {side.effektTittel && (
                <p className={`${merkelapp} mt-16 mb-5`}>{side.effektTittel}</p>
              )}
              <ul className="grid gap-x-6 gap-y-5 grid-cols-2 sm:grid-cols-3">
                {side.effektar.map((e) => (
                  <li
                    key={e}
                    className="border-t-2 border-[#A65F3D] pt-3 text-[#2F2B26] font-medium leading-snug tracking-tight"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </>
          )}

          <SSLenke
            href="/ss/kontakt"
            className="inline-flex items-center gap-2 mt-14 text-[#F6F1E8] bg-[#A65F3D] rounded-full px-7 py-3 font-medium hover:bg-[#8C4E32] transition-colors"
          >
            {side.ctaTekst ?? "Kontakt oss"} <span aria-hidden>&rarr;</span>
          </SSLenke>
        </div>
      </section>

      {/* ── 2 · Substack ────────────────────────────────────── */}
      <SSSubstack
        tittel={side.substackTittel}
        ingress={side.substackIngress}
        url={side.substackUrl}
        lenketekst={side.substackLenketekst}
        tal={side.substackTal}
      />

      {/* ── 3 · Folka ───────────────────────────────────────── */}
      <section className="px-6 sm:px-10 pb-20 sm:pb-24">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#E4DBCB] bg-[#FAF8F3] p-8 sm:p-10">
          {side.folkaTittel && (
            <h2 className="text-2xl sm:text-3xl font-medium text-[#2F2B26] tracking-tight leading-snug">
              {side.folkaTittel}
            </h2>
          )}
          {side.folkaIngress && (
            <p className="text-[#6B6860] leading-relaxed mt-4 max-w-xl">
              {side.folkaIngress}
            </p>
          )}

          <SSLenke
            href="/ss/folk"
            className="inline-block mt-8 text-[#A65F3D] font-medium hover:text-[#8C4E32] transition-colors"
          >
            {side.folkaLenketekst ?? "Meir om folka"}{" "}
            <span aria-hidden>&rarr;</span>
          </SSLenke>
        </div>
      </section>
    </>
  );
}
