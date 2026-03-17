import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const serif = {
  fontFamily: "var(--font-serif), 'Fraunces', serif",
  fontWeight: 400 as const,
};

const partners = [
  {
    name: "Travers",
    url: "https://travers.as/",
    text: "Me vart først kjent med Travers då dei hjalp til med å lage digitaliseringsstrategi. Sidan har dei hatt ein finger med i spelet kvar gang det har vore behov for hjelp til å løyse vanskelege flokar. Travers er guruar på å bruke designtenking på verkelege utfordringar, og det skadar ikkje at dei er like engasjerte i gode kommunar og lokalsamfunn som oss. Dei både forstår og bryr seg om at innbyggjarane i alle kommunar skal få litt betre tenester. Og så er dei veldig kjekke å jobbe saman med.",
  },
  {
    name: "Bogsnes Advisory / Beyond Budgeting Institute",
    url: "https://bogsnesadvisory.com/",
    text: "Bjarte Bogsnes er sjeldan vare. Han har brukt dei siste 30 åra på å lirke små og store organisasjonar i ein meir menneskeleg og smidig retning. Me oppdaga Bjarte i leitinga etter ein alternativ styringslogikk, ein der systema folk må forhalde seg til samsvarar med den åtferda ein seier at ein vil ha. Som medskapar av Beyond Budgeting er Bjarte sentral i forstå at det faktisk går an å gjere noko anna. Med toppleiarerfaring frå store multinasjonale selskap, i tillegg til å ha vore rådgivar for hundrevis av private og offentlege verksemder, har han vore borti det meste. Og han snakkar eit jordnært og praktisk språk - heilt i vår kommunale ånd.",
  },
  {
    name: "Selvledende Organisationer",
    url: "https://www.selvledendeorganisationer.dk/",
    text: "Det kan sjå ut som om Danmark ligg alltid litt framfor Noreg i utviklinga av offentleg sektor. Særleg nye arbeids- og organiseringsformer var lite utbredt i norsk kommunal sektor, medan danskane har prøvd ut meir og over lenger tid. For oss har det vore av uvurderleg hjelp og nytte at tre av dei fremste kapasitetane på nettopp dette har vore villige til å hjelpe til i vårt arbeid med å gjere noko i norsk kontekst. Helge, Tobias og Michael er ikkje berre kunnskapsrike og flinke, dei er genuint fine folk å jobbe saman med som meir enn gjerne vil hjelpe.",
  },
];

const publicPartners = [
  {
    name: "Doga",
    text: "Med eit nasjonalt mandat for å fremje design og arkitektur har dei vore til stor hjelp og nytte langs heile reise. Dei har utvikla og delt verktøy, invitert til delings- og læringsarenaar, delt tips og svara på små og store spørsmål undervegs. Designtenking er mykje meir enn å utforme fysiske og digitale produkt, det er ein måte å tenke på. Doga er eit unikt miljø i å ha kombinasjonen av breidde- og djupneforståing for korleis å nytte design praktisk. Det burde mange fleire nytte seg av etter vårt syn!",
  },
  {
    name: "KS",
    text: "Med alle kommunar som medlemmar har KS ein unik posisjon og tilgang på innsikt i den kommunale verkelegheita. Me har møtt og møter framleis ofte kommunar og kommunetilsette som vert overraska over omfanget av det arbeidet som KS gjer for å spele kommunane gode. Her tyder mykje på at potensialet er langt større enn kva kommunane klarar å gjere seg nytte av i dag, me har iallfall funne svaret på mykje og fått hjelp og sparring til endå meir.",
  },
  {
    name: "Statsforvaltarane",
    text: "Trass alle mediesaker der kommunane irriterer seg over Statsforvaltar sine vedtak, så har dei for oss ein velfortent plass på denne lista. I arbeidet med å utforske problem og mogelegheiter, enten i grensesnittet mellom forvaltningsnivå der ein treng kvarandre, eller på leit etter nye måtar å praktisere lovverket på har Statsforvaltaren vore ein nyttig, klok og kunnskapsrik sparringspartner. Vårt råd? Snakk med dei!",
  },
];

export default function OmPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="border-b border-[rgba(28,28,26,0.09)] sticky top-0 bg-[#F2EEE6]/95 backdrop-blur-sm z-50">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6 text-sm text-[#6B6860]">
            <Link href="/#kvifor" className="hover:text-[#1C1C1A] transition-colors">
              Kvifor
            </Link>
            <Link href="/#operativsystem" className="hover:text-[#1C1C1A] transition-colors">
              Operativsystemet
            </Link>
            <Link href="/#framgangsmaate" className="hover:text-[#1C1C1A] transition-colors">
              Framgangsmåte
            </Link>
            <Link href="/artiklar" className="hover:text-[#1C1C1A] transition-colors">
              Døme
            </Link>
            <Link href="/om" className="text-[#1C1C1A] font-medium">
              Om oss
            </Link>
            <Link
              href="/#kontakt"
              className="bg-[#2D4233] text-white px-4 py-1.5 rounded-full hover:bg-[#3A5240] transition-colors"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1C1C1A] mb-8"
          style={serif}
        >
          Om KommunalSektor.no
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-[#3a3a38] leading-[1.75] text-base">
          <div className="space-y-5">
            <p>
              Denne sida er skapt for å dele. Bak innhaldet står Selseng &amp; Systaddal AS og
              personane Helle Selseng og Joakim Systaddal. Me har vore ein del av dei kommunale
              problema som er beskrivne, og kjent den kommunale verkelegheita på kroppen.
            </p>
            <p>
              Frå inngangen av 2023 til utgangen av 2025 har me saman jobba med å koordinere
              endringsarbeidet i Sogndal kommune, utvikla nye kommunale styringssystem og -strukturar
              saman med nasjonale og regionale fagmiljø og delt erfaringar og hjulpe andre
              organisasjonar i gang med tilsvarande initiativ.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              No ynskjer me å dele det me har lært, slik at dei som ynskjer å nytte seg av
              erfaringane våre kan gjere det. Me meiner offentleg sektor treng meir deling av
              praktiske erfaringar, og hadde ønskt oss ei slik side sjølv når vår reise tok til.
            </p>
            <p>
              Alt du finn på denne sida er fritt fram å bruke, og me håpar det kan vere med å
              inspirere nokon til å gjere det som for oss var det eine viktigaste steget: Berre
              begynne.
            </p>
            <p className="text-[#2D4233] font-medium">
              Skulle nokon vere interessert i hjelp frå oss, så ta gjerne kontakt. Me bidreg gjerne!
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-[rgba(28,28,26,0.09)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl tracking-tight mb-10 text-[#1C1C1A]" style={serif}>
            Partnarar
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="border border-[rgba(28,28,26,0.09)] rounded-xl p-6 bg-white flex flex-col"
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#2D4233] hover:underline"
                >
                  {partner.name} &rarr;
                </a>
                <p className="mt-3 text-[#3a3a38] text-sm leading-relaxed flex-1">
                  {partner.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public partners */}
      <section className="border-t border-[rgba(28,28,26,0.09)]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl tracking-tight mb-10 text-[#1C1C1A]" style={serif}>
            Dei offentlege hjelparane
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {publicPartners.map((partner) => (
              <div
                key={partner.name}
                className="border border-[rgba(28,28,26,0.09)] rounded-xl p-6 bg-white flex flex-col"
              >
                <h3 className="text-base font-semibold text-[#1C1C1A]">{partner.name}</h3>
                <p className="mt-3 text-[#3a3a38] text-sm leading-relaxed flex-1">
                  {partner.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
