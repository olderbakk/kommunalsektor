import Link from "next/link";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

export default function Footer() {
  return (
    <footer className="bg-[#2D4233] text-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {/* Top section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <svg
                width={15}
                height={25}
                viewBox="0 0 18 28"
                fill="currentColor"
                className="text-white/70"
              >
                <path d="M9 0C4 0 0 3.2 0 5v11c0 2 3 6.5 6.4 9.2.8.7 1.7 1.2 2.6 1.8.9-.6 1.8-1.1 2.6-1.8C15 22.5 18 18 18 16V5C18 3.2 14 0 9 0z" />
              </svg>
              <p className="text-2xl tracking-tight" style={serif}>
                KommunalSektor
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Erfaringar, rammeverk og inspirasjon for kommunar som vil gjere noko anna. Frå
              praksis, ikkje skrivebordsøvingar.
            </p>
            <p className="text-sm text-white/40 mt-6">
              Selseng &amp; Systaddal AS
              <br />
              Sogndal, Noreg
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Innhald
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#kvifor" className="text-white/70 hover:text-white transition-colors">
                  Kvifor kommune 4.0?
                </Link>
              </li>
              <li>
                <Link
                  href="/#operativsystem"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Operativsystemet
                </Link>
              </li>
              <li>
                <Link
                  href="/#framgangsmaate"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Framgangsmåte
                </Link>
              </li>
              <li>
                <Link
                  href="/artiklar"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Døme og artiklar
                </Link>
              </li>
            </ul>
          </div>

          {/* Om */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Om oss
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/om" className="text-white/70 hover:text-white transition-colors">
                  Om KommunalSektor
                </Link>
              </li>
              <li>
                <a
                  href="https://travers.as/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Travers
                </a>
              </li>
              <li>
                <a
                  href="https://bogsnesadvisory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Bogsnes Advisory
                </a>
              </li>
              <li>
                <a
                  href="https://www.selvledendeorganisationer.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Selvledende Org.
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Kontakt
            </p>
            <div className="text-sm space-y-2.5">
              <p className="text-white/70">Helle Selseng</p>
              <p className="text-white/70">Joakim Systaddal</p>
              <Link
                href="/#kontakt"
                className="inline-block mt-3 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
              >
                Send oss ei melding
              </Link>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Selseng &amp; Systaddal AS. Alt innhald er fritt
            tilgjengeleg.
          </p>
          <p className="text-xs text-white/30">
            Inspirert av praksis i Sogndal kommune, 2023&ndash;2025
          </p>
        </div>
      </div>

      {/* Large background text */}
      <div
        className="text-[12vw] font-bold leading-none text-white/[0.04] text-center select-none -mt-8 pb-4 overflow-hidden"
        style={serif}
        aria-hidden="true"
      >
        KommunalSektor
      </div>
    </footer>
  );
}
