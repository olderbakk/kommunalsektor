import Link from "next/link";
import StepTabs from "@/components/StepTabs";

const serif = {
  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
  fontWeight: 400 as const,
};

function Nav() {
  return (
    <header className="border-b border-[rgba(28,28,26,0.09)] sticky top-0 bg-[#F2EEE6]/95 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl tracking-tight" style={serif}>
          KommunalSektor
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-[#6B6860]">
          <Link href="#kvifor" className="hover:text-[#1C1C1A] transition-colors">
            Kvifor
          </Link>
          <Link href="#operativsystem" className="hover:text-[#1C1C1A] transition-colors">
            Operativsystemet
          </Link>
          <Link href="#framgangsmaate" className="hover:text-[#1C1C1A] transition-colors">
            Framgangsmåte
          </Link>
          <Link href="/artiklar" className="hover:text-[#1C1C1A] transition-colors">
            Døme
          </Link>
          <Link href="/om" className="hover:text-[#1C1C1A] transition-colors">
            Om oss
          </Link>
          <Link
            href="#kontakt"
            className="bg-[#2D4233] text-white px-4 py-1.5 rounded-full hover:bg-[#3A5240] transition-colors"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#1C1C1A]"
        style={serif}
      >
        Eit nytt operativsystem
        <br />
        for kommunane
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-[#6B6860] max-w-xl mx-auto leading-relaxed">
        Erfaringar, rammeverk og inspirasjon for kommunar som vil gjere noko anna.
        Frå praksis, ikkje skrivebordsøvingar.
      </p>
      <div className="mt-10 flex gap-4 justify-center">
        <Link
          href="#kvifor"
          className="bg-[#2D4233] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#3A5240] transition-colors"
        >
          Les meir
        </Link>
        <Link
          href="#kontakt"
          className="border border-[rgba(28,28,26,0.14)] px-6 py-3 rounded-full text-sm font-medium text-[#1C1C1A] hover:bg-[#E8E2D6] transition-colors"
        >
          Ta kontakt
        </Link>
      </div>
    </section>
  );
}

function SectionKvifor() {
  return (
    <section id="kvifor" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-[720px]">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-10 text-[#1C1C1A]" style={serif}>
            Kvifor kommune 4.0?
          </h2>
        </div>

        {/* Two-column intro */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-[#3a3a38] leading-[1.75] text-base">
          <div className="space-y-5">
            <p>
              Kommunane treng nye løysingar for framtida. Aukande press på kommuneøkonomien, store
              statlege forventningar og krav og ei eldrebølge som utfordrar arbeidskapasiteten til
              heile den norske velferdsstaten. Legg til aukande utanforskap, klimaendringar og
              ekstremvêr og ei teknologiomveltning som endrar nesten alt.
            </p>
            <p>
              Du har truleg høyrt det før. Til no har det gått nokonlunde greitt å halde fram om lag
              som før. Mange har nytta dei siste åra på å stramme opp og gjere nødvendige første
              grep. Men vil det vere nok?
            </p>
            <p>
              Denne sida har oppstått fordi svaret på det spørsmålet for nokre har vore eit tydeleg
              nei. Med konsekvens at det har vore nødvendig å finne eit truverdig og optimistisk
              alternativ.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              Den viktigaste grunnen til å etablere denne sida for å dele er denne: Det går an å
              gjere noko anna. Og endå betre, det ser ikkje ut til å krevje noko særskilt frå
              omgjevnadane. Hypotesen er at alle kommunar, uansett storleik, økonomi og plassering,
              kan starte med utgangspunkt i der ein er. Akkurat no.
            </p>
            <p>
              Erfaringane på denne sida kjem frå arbeid med ekte problem. Små og store, enkle og
              komplekse. Oppsummeringa så langt er at det er mogeleg å oppnå noko anna. Men den er
              også at det ikkje er enkelt. Mest av alt fordi det vil utfordre mange på noko av det
              vanskelegaste som finst: Eigne tankesett, vanar og haldningar.
            </p>
            <p className="text-[#2D4233] font-medium">
              Vår viktigaste læring er samtidig den mest banale: Det er berre å starte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionOperativsystem() {
  return (
    <section id="operativsystem" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-[720px] mb-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A]" style={serif}>
            Kva går det ut på?
          </h2>
          <p className="text-[#3a3a38] leading-[1.75] text-base">
            Kommunane treng eit nytt operativsystem, fordi det gamle ikkje er i stand til å løyse
            dagens behov &ndash; og langt mindre det som kjem i framtida. Rommet for å gjere noko
            nytt finst, men når det skal skalerast eller bryte med siloane vert det vanskelegare.
            Denne læringa peikte i retning av noko større, noko som låg bakom og skapte hindringar.
          </p>
        </div>

        {/* Old vs New - side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Old */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6860] mb-4">
              Dei gamle systema
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Byråkratiet",
                  desc: "Reglar og rutinar som frigjer folk frå å måtte tenke sjølv",
                },
                {
                  title: "Hierarkiet",
                  desc: "Kommando og kontroll der dei høgst oppe fortel resten kva dei skal gjere",
                },
                {
                  title: "Budsjettet",
                  desc: "Planlegg framtida i detalj og fordel ressursane på førehand",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[rgba(28,28,26,0.09)] rounded-xl p-5 bg-[#F8F6F1]"
                >
                  <p className="font-semibold text-[#1C1C1A] text-sm">{item.title}</p>
                  <p className="text-[#6B6860] text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B6860] mt-4 italic">
              Over 100 år gamle innovasjonar. Forutset stabile omgjevnader og at folk må
              kontrollerast.
            </p>
          </div>

          {/* New */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4233] mb-4">
              Dei nye systema
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Designtenking",
                  desc: "Myndiggjorde kollektiv finn gode løysingar med utgangspunkt i verkelegheita",
                },
                {
                  title: "Sjølvstyrande team",
                  desc: "Nettverk med ansvar og mynde til å løyse oppgåver og dele det dei lærer",
                },
                {
                  title: "Beyond Budgeting",
                  desc: "Mål som set retning, prognosar som fortel korleis det går, og fleksibel ressursfordeling",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#C8DEC8] rounded-xl p-5 bg-[#EEF5EE]"
                >
                  <p className="font-semibold text-[#1C1C1A] text-sm">{item.title}</p>
                  <p className="text-[#3a3a38] text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#2D4233] mt-4 italic">
              Ikkje ein komplett reinstallasjon &ndash; ta det nye i bruk der gevinstane er mest
              openbare.
            </p>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "Ny styringslogikk",
              desc: "Tydelege prinsipp for styring og leiing som skapar rom for utvikling og trivsel",
            },
            {
              title: "Ny organisering",
              desc: "Myndiggjorte team tek eigarskap til å løyse oppgåvene gitt den faktiske konteksten",
            },
            {
              title: "Nye arbeidsprosessar",
              desc: "Designtenking skapar rammer for å først forstå problema, så finne løysingar kollektivt",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-[#2D4233] pl-5 py-3">
              <p className="font-semibold text-[#1C1C1A] text-sm">{item.title}</p>
              <p className="text-[#6B6860] text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionFramgangsmaate() {
  return (
    <section id="framgangsmaate" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A]" style={serif}>
            Korleis komme i gang?
          </h2>
          <p className="text-[#6B6860] text-base leading-relaxed">
            Eit standardløp som kan tilpassast. Inspirert av Anne Morriss og Frances Frei
            i &ldquo;Move fast &amp; fix things&rdquo;.
          </p>
        </div>

        <StepTabs />

        {/* Callouts side by side */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="border border-[rgba(28,28,26,0.14)] rounded-xl p-6 bg-[#F8F6F1]">
            <h4 className="text-lg tracking-tight text-[#1C1C1A] mb-4" style={serif}>
              Fast i alle treffpunkt
            </h4>
            <ul className="space-y-2">
              {[
                "Definere kva som skal gjennomførast til neste gang, heilt konkret",
                "Digital oppfølging mellom dei fysiske møta",
                "Alle økter startar med å oppsummere og hente ut læring frå det som har skjedd sidan sist",
                "Spørre om læringa bør få konsekvensar for vidare skalering",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[#3a3a38] text-sm leading-relaxed"
                >
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#6B6860] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#C8DEC8] rounded-xl p-6 bg-[#EEF5EE]">
            <h4 className="text-lg tracking-tight text-[#2D4233] mb-4" style={serif}>
              Di raskare ein kjem i gang, di raskare vil ein oppnå
            </h4>
            <ul className="space-y-2">
              {[
                "Betre kostnadseffektivitet / meir kommune for pengane",
                "Betre trivsel på jobb / meir attraktiv som arbeidsgjevar",
                "Betre leveranse til innbyggjarane / på samfunnsoppdraget",
                "Alt er skreddarsaum, ingen førehandsdefinerte langsiktige planar",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[#2D4233] text-sm leading-relaxed"
                >
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#2D4233] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDomeOgKontakt() {
  return (
    <>
      {/* Døme */}
      <section className="border-t border-[rgba(28,28,26,0.09)]">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl tracking-tight text-[#1C1C1A]" style={serif}>
              Døme og beskrivingar
            </h2>
            <p className="text-[#6B6860] text-base mt-2">
              Artiklar, erfaringar og refleksjonar frå arbeidet med å gjere noko anna i kommunane.
            </p>
          </div>
          <Link
            href="/artiklar"
            className="bg-[#2D4233] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#3A5240] transition-colors flex-shrink-0"
          >
            Sjå alle artiklar
          </Link>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-[rgba(28,28,26,0.09)]">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl tracking-tight text-[#1C1C1A]" style={serif}>
              Kontakt
            </h2>
            <p className="text-[#6B6860] text-base mt-2">
              Er du nysgjerrig på korleis dette kan sjå ut i din kommune?
            </p>
            <p className="text-[#3a3a38] text-sm mt-3">
              <span className="font-semibold">Selseng &amp; Systaddal AS</span>
              <span className="text-[#6B6860] ml-2">
                Helle Selseng &amp; Joakim Systaddal
              </span>
            </p>
          </div>
          <Link
            href="/om"
            className="border border-[rgba(28,28,26,0.14)] px-6 py-3 rounded-full text-sm font-medium text-[#1C1C1A] hover:bg-[#E8E2D6] transition-colors flex-shrink-0"
          >
            Les meir om oss
          </Link>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9B9790]">
        <p>&copy; {new Date().getFullYear()} Selseng &amp; Systaddal AS</p>
        <p style={serif} className="text-base text-[#6B6860]">
          KommunalSektor.no
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <SectionKvifor />
      <SectionOperativsystem />
      <SectionFramgangsmaate />
      <SectionDomeOgKontakt />
      <Footer />
    </div>
  );
}
