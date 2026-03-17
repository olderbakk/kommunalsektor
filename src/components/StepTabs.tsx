"use client";

import { useState } from "react";

const steps = [
  {
    num: "1",
    label: "Forståing",
    title: "No-situasjonsforståing og forventningsavklaring",
    activities: [
      "Eit blikk på verda slik den ser ut for den aktuelle gruppa i dag: Kva må takast vare på, og kva problem hadde det verkeleg vore verdifullt å løyst?",
      "Ein introduksjon og gjennomgang av rammene og metoden - korleis skal ein jobbe i praksis",
      "Beskriving av stega og måten å jobbe på, og kva ein kan rekne med å oppleve både av positiv og meir utfordrande karakter",
      "Forventningsavstemming: Mål og resultat, definere kva ser suksess ut som for gruppa",
      "Skreddarsy vidare opplegg og avgrense mandatet til noko som kan fiksast raskt",
    ],
    effects: [],
  },
  {
    num: "2",
    label: "Problemet",
    title: "Finn det rette problemet",
    activities: [
      "Ei fasilitert arbeidsøkt for den aktuelle gruppa for å komme i gang med å jobbe med eit ekte problem",
      "Finne ei sams problemhypotese basert på alle dei ulike perspektiva som gruppa rommar",
      "Utforske problemet med kritisk sans, fleire spørsmål, mindre forklaring av korleis ein meiner verda heng saman",
      "Finne ei sams løysingshypotese, og utforske eit størst mogeleg utval av mogelege løysingsforslag",
      "Definere eit løysingsforslag kan testast umiddelbart",
    ],
    effects: [
      "Øving i å ta tak i ekte problem med utgangspunkt i innbyggjaren - alltid",
      "Bli trygg på å jobbe på ein ny og anna måte enn det ein har vore vand til",
      "Erfare verdien av å jobbe i eit tverrfagleg kollektiv",
      "Trene på å stå i løysingsforslag og perspektiv ein kanskje ikkje er einig i",
      "Oppleve kor raskt ein kan gå frå komplekst problem til faktisk handling",
    ],
  },
  {
    num: "3",
    label: "Kapasitet",
    title: "Etabler utviklingskapasiteten",
    activities: [
      "Ei fasilitert arbeidsøkt for å etablere ein intern utviklingskapasitet",
      "Finne ut: Kva (type) problem som hastar og er viktig akkurat no / Kva kunnskap/kompetanse/ferdigheiter som krevst då",
      "Utforme rammene som skapar handlingsrom",
    ],
    effects: [
      "Eit felles bilde av kva som skal til for å lukkast i eigen kontekst",
      "Ei felles forståing av korleis dette skal vere til hjelp og nytte",
      "Ein faktisk kapasitet som ein merkar i kvardagen med ein gang",
      "Tillit og tru gjennom rask og trygg handling",
      "Eigarskap frå fleire, som tek ansvar for både problem og løysingar",
    ],
  },
  {
    num: "4",
    label: "Handlingsrom",
    title: "Skap rom for å lukkast",
    activities: [
      "Ei fasilitert arbeidsøkt for å ramme inn ein anna del av leiarrolla: Ambassadørrolla",
      "Forstå, definere og øve på å skape ei ny forteljing om det arbeidet som skjer",
      "Anerkjenne det som er bra frå før og anerkjenne at det som ikkje er bra frå før også har hatt gode intensjonar",
    ],
    effects: [
      "Skape engasjement og entusiasme",
      "Anerkjenne dei som er i gang",
      "Bidra til at flest mogeleg kjenner eigarskap til kvifor dette føregår, kvifor det er nødvendig og kva som skjer dersom ein ikkje gjer noko",
      "Invitere fleire til å melde seg på og bidra",
    ],
  },
  {
    num: "5",
    label: "Overlevering",
    title: "Kom deg ut av vegen",
    activities: [
      "Syt for dei som eig problemet ikkje har gjort seg avhengig av deg for å halde fram",
      "Ha ryggen til dei rundt deg - om ein skal prioritere å vere god på noko må ein tåle å vere dårleg på noko anna",
      "Leit etter prosessar og prosjekt du kan stoppe (ikkje fordi dei ikkje er viktige, men fordi det er grense for kor mykje ein kan løyse raskt og trygt på ein gang)",
      "Ta konfliktane med ein gang (dei går ikkje vekk av seg sjølv, og dei blir ikkje mindre av å vente)",
      "Start jobben med å finne neste viktige problem (om der finst fleire, då)",
    ],
    effects: [
      "Erfaring med opplevinga av å sleppe taket i noko viktig (som for dei fleste er vanskelegare enn ein trudde)",
      "Nokre av organisasjonen sine dysfunksjonalitetar kjem til overflata (oftast i form av rutinar, reglar og prosedyrer ein har laga sjølv)",
      "Kjensla av å vere eit lag som lukkast med noko saman",
      "Eit tydeleg signal til organisasjonen om at noko faktisk er på gang",
    ],
  },
  {
    num: "X",
    label: "Skalering",
    title: "Skalering",
    activities: [
      "Halde fram med det som er organisasjonen sine prioriterte område etter same metodikk som steg 2-5",
      "Støtte frå oss så lenge det er nødvendig, men så raskt som mogeleg i eigen regi",
    ],
    effects: [],
  },
];

export default function StepTabs() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-white border border-[rgba(28,28,26,0.09)] rounded-full p-1.5 gap-1 flex-wrap justify-center">
          {steps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? "bg-[#2D4233] text-white"
                  : "text-[#6B6860] hover:text-[#1C1C1A] hover:bg-[#F5F2EB]"
              }`}
            >
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">
                {s.num === "X" ? "X" : s.num}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="bg-white border border-[rgba(28,28,26,0.09)] rounded-2xl p-6 sm:p-10 min-h-[400px]">
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-lg ${
              step.num === "X"
                ? "border-2 border-[#2D4233] text-[#2D4233]"
                : "bg-[#2D4233] text-white"
            }`}
            style={{
              fontFamily:
                "var(--font-serif), 'Fraunces', serif",
            }}
          >
            {step.num}
          </div>
          <h3
            className="text-xl sm:text-2xl tracking-tight text-[#1C1C1A]"
            style={{
              fontFamily:
                "var(--font-serif), 'Fraunces', serif",
              fontWeight: 400,
            }}
          >
            {step.title}
          </h3>
        </div>

        <div
          className={`grid gap-8 ${step.effects.length > 0 ? "md:grid-cols-2" : ""}`}
        >
          {/* Activities */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6860] mb-4">
              Aktivitetar
            </p>
            <ul className="space-y-3">
              {step.activities.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#3a3a38] text-sm leading-relaxed"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-1.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Effects */}
          {step.effects.length > 0 && (
            <div className="bg-[#EEF5EE] border border-[#C8DEC8] rounded-xl p-5 sm:p-6 h-fit">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4233] mb-4">
                Effektar
              </p>
              <ul className="space-y-3">
                {step.effects.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#3a3a38] text-sm leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-1.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
