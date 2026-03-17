import Link from "next/link";

function Nav() {
  return (
    <header className="border-b border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl tracking-tight"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          KommunalSektor
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-[#6B6860]">
          <Link href="/" className="hover:text-[#1C1C1A] transition-colors">
            Hjem
          </Link>
          <Link href="#kvifor" className="hover:text-[#1C1C1A] transition-colors">
            Kvifor
          </Link>
          <Link href="#framgangsmaate" className="hover:text-[#1C1C1A] transition-colors">
            Framgangsmåte
          </Link>
          <Link href="/artiklar" className="hover:text-[#1C1C1A] transition-colors">
            Døme
          </Link>
          <Link href="#om-oss" className="hover:text-[#1C1C1A] transition-colors">
            Om oss
          </Link>
          <Link href="#kontakt" className="hover:text-[#1C1C1A] transition-colors">
            Kontakt
          </Link>
        </nav>
        <button className="sm:hidden text-[#6B6860] p-2" aria-label="Meny">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="5" x2="17" y2="5" />
            <line x1="3" y1="10" x2="17" y2="10" />
            <line x1="3" y1="15" x2="17" y2="15" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-[#1C1C1A]"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
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
          className="inline-flex items-center gap-2 bg-[#2D4233] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#3A5240] transition-colors"
        >
          Les meir
        </Link>
        <Link
          href="#kontakt"
          className="inline-flex items-center gap-2 border border-[rgba(28,28,26,0.14)] px-6 py-3 rounded-full text-sm font-medium text-[#1C1C1A] hover:bg-[#E8E2D6] transition-colors"
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
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-10 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Kvifor kommune 4.0?
        </h2>

        <div className="space-y-6 text-[#3a3a38] leading-[1.75] text-base sm:text-lg">
          <p>
            Kommunane treng nye løysingar for framtida. Aukande press på kommuneøkonomien, store statlege
            forventningar og krav og ei eldrebølge som utfordrar arbeidskapasiteten til heile den norske
            velferdsstaten. Legg til aukande utanforskap, klimaendringar og ekstremvêr og ei teknologiomveltning
            som endrar nesten alt. Du har truleg høyrt det før. Til no har det gått nokonlunde greitt å halde
            fram om lag som før. Mange har nytta dei siste åra på å stramme opp og gjere nødvendige første grep.
            Men vil det vere nok?
          </p>

          <p>
            Denne sida har oppstått fordi svaret på det spørsmålet for nokre har vore eit tydeleg nei. Med
            konsekvens at det har vore nødvendig å finne eit truverdig og optimistisk alternativ. Difor vil du
            finne døme, referansar og erfaringar frå eit arbeid som faktisk har prøvd ut noko anna, og sett at
            det går an. Dette er erfaringar frå praksis, ikkje ei skrivebordsøving. Det er erfaringar frå å ha
            handla, og er tufta på læringa frå både det som har gått bra og det som ikkje har fungert som ein
            trudde.
          </p>

          <p>
            Den viktigaste grunnen til å etablere denne sida for å dele er denne: Det går an å gjere noko anna.
            Og endå betre, det ser ikkje ut til å krevje noko særskilt frå omgjevnadane. Hypotesen er at alle
            kommunar, uansett storleik, økonomi og plassering, kan starte med utgangspunkt i der ein er.
            Akkurat no.
          </p>

          <p>
            Erfaringane på denne sida kjem frå arbeid med ekte problem. Små og store, enkle og komplekse. Det
            har gjeve innsikt og læring som har blitt supplert med læring frå andre og tilgjengeleg forsking og
            teori. Oppsummeringa så langt er at det er mogeleg å oppnå noko anna. Men den er også at det ikkje
            er enkelt. Mest av alt fordi det vil utfordre mange på noko av det vanskelegaste som finst: Eigne
            tankesett, vanar og haldningar.
          </p>

          <p>
            Framtida går ikkje over, og det er lite truleg at det vert betre om ein ventar litt til. Dessutan er
            vår viktigaste læring samtidig den mest banale: Det er berre å starte. Finne eit ekte problem, og
            bruke det til å øve seg på å prøve ut ein anna måte å jobbe på. Og ta eitt lite steg i retning av
            noko som kan bli vegen mot noko heilt anna. Det som vert presentert her trengst ikkje greiast ut.
            Ein bør tvert om unngå å gjere det stort og komplisert. Det startar ikkje med ei enormt modig
            avgjerd. Det startar med å invitere inn dei ein har rundt seg, og begynne å stille spørsmål.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionKvaGaarDetUtPaa() {
  return (
    <section className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-10 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Kva går det ut på?
        </h2>

        <div className="space-y-6 text-[#3a3a38] leading-[1.75] text-base sm:text-lg">
          <p>
            Innsikten frå å ha jobba med ulike delar av kommunen leda oss fram til denne hypotesen: Kommunane
            treng eit nytt operativsystem, fordi det gamle ikkje er i stand til å løyse dagens behov &ndash; og
            langt mindre det som kjem i framtida. Mange kommunar har gjort mykje nyskapande, spennande og
            framtidsretta utviklingsarbeid dei siste åra. Men mykje av det er avgrensa til enkelteiningar,
            enkeltprosjekt og enkeltløysingar. Vår erfaring var den same: Rommet for å gjere noko nytt finst,
            men når det skal skalerast eller bryte med siloane vert det vanskelegare. Denne læringa peikte i
            retning av noko større, noko som låg bakom og skapte hindringar.
          </p>

          <p>
            Slik kom me på sporet av operativsystem: Dei systema og strukturane som ein har valgt og laga sjølv
            for å legge føringar korleis ting skal gjerast. Me kjenner det alle frå mobiltelefonen: Med jamne
            mellomrom kjem det større og mindre oppdateringar som skal gjere den betre rusta til å utføre dei
            oppgåvene me treng den til. Det me oppdaga i kommunen var eit operativsystem som ikkje hadde vore
            fornya på lenge. Og som dermed ikkje berre produserte, men reproduserte problem for tilsette og
            innbyggjarar.
          </p>

          <p>
            Konsekvensen er føringar for korleis folk skal jobbe, kva tankesett som skal ligge til grunn og kva
            som i praksis vert belønna (eller straffa) som ikkje samsvarar med dei uttalte intensjonane. Det gav
            også utilsikta og lite hensiktsmessige utslag i praksisar som tek lang tid (og dermed kostar mykje
            pengar), tek frå folk eigarskapet til eigne arbeidsoppgåver og skapar konflikt mellom det som etter
            kvart er mogeleg å ta i bruk av nye løysingar og den ein faktisk kan nytte når ein ikkje endrar
            måten ein jobbar på.
          </p>
        </div>

        {/* Sub-section: Systema */}
        <div className="mt-16">
          <h3
            className="text-2xl tracking-tight mb-6 text-[#1C1C1A]"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Systema som har tent kommunane lenge, men&hellip;
          </h3>

          <div className="text-[#3a3a38] leading-[1.75] text-base sm:text-lg space-y-6">
            <p>
              Kjeldene til problema fann me i nokre godt innarbeidde strukturar. Dei har til felles at dei har
              tent både kommunane og dei fleste andre større organisasjonar godt over lang tid. Dei er alle over
              100 år gamle innovasjonar, og framleis i bruk. Dei mindre gode fellestrekka er at dei også legg
              til grunn eit menneskesyn som legg til grunn at folk må passast på og kontrollerast for å unngå at
              dei gjer noko gale. Og dei har som forutsetning at omgjevnadane er stabile og føreseielege. Ingen
              av desse tre står seg lenger.
            </p>
          </div>
        </div>

        {/* Old systems */}
        <div className="mt-10">
          <h3
            className="text-2xl tracking-tight mb-8 text-[#1C1C1A]"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Så kva system er det snakk om?
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "Byråkratiet",
                desc: "med reglar og rutinar som frigjer folk frå å måtte tenke sjølv",
              },
              {
                title: "Hierarkiet",
                desc: "med kommando og kontroll basert på at dei klokaste (forstått som dei høgst oppe i pyramiden) fortel resten kva dei skal gjere",
              },
              {
                title: "Budsjettet",
                desc: "der ein kan planlegge framtida i detalj og fordele ressursane på førehand",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[rgba(28,28,26,0.09)] rounded-xl p-5 bg-[#F8F6F1]"
              >
                <p className="text-[#1C1C1A]">
                  <span className="font-semibold">{item.title}</span>,{" "}
                  <span className="text-[#6B6860]">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transition text */}
        <div className="mt-12 space-y-6 text-[#3a3a38] leading-[1.75] text-base sm:text-lg">
          <p>
            Men kva då når framtida ikkje lenger er føreseieleg og mogeleg å planlegge? Og når konkurransen om
            folk vert hardare, og der ingenting tyder på at folk er interessert i å bli fortalt alt dei skal
            gjere utan å tenke sjølv?
          </p>

          <p>
            Desse spørsmåla tok oss ut på leiting etter noko anna. Noko som hadde fungert for andre før, og som
            kunne passe med dei føresetnadane som kommunane skal fungerere innanfor. Gjennom utforskring,
            prøving, justering og små steg står det att eit alternativ som ikkje berre fungerer, det gir mykje
            betre kommunar:
          </p>
        </div>

        {/* New systems */}
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Designtenking",
              desc: "der myndiggjorde kollektiv tek ansvar for å finne dei gode løysingane med utgangspunkt i verda slik den faktisk er akkurat no",
            },
            {
              title: "Eit nettverk av sjølvstyrande team",
              desc: "med ansvar og mynde til å løyse sine oppgåver, samhandle med dei ein treng å samhandle med, og som delar det dei gjer og det dei lærer til andre si nytte",
            },
            {
              title: "Beyond Budgeting",
              desc: "der det vert definert mål som set retning mot det ein ynskjer skal skje, vert laga prognosar som fortel kva ein forventar skal skje (og korleis det går) og fordeling av ressursar til der dei gjer mest nytte for seg i ein kostnadsmedviten kvardag",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#C8DEC8] rounded-xl p-5 bg-[#EEF5EE]"
            >
              <p className="text-[#1C1C1A]">
                <span className="font-semibold">{item.title}</span>,{" "}
                <span className="text-[#3a3a38]">{item.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* From one to two */}
        <div className="mt-16">
          <h3
            className="text-2xl tracking-tight mb-6 text-[#1C1C1A]"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Frå eitt gammalt operativsystem, til to
          </h3>

          <div className="space-y-6 text-[#3a3a38] leading-[1.75] text-base sm:text-lg">
            <p>
              Det beste av alt er at det ikkje treng å vere ein komplett reinstallasjon. Det bør sannsynlegvis
              ikkje vere det, fordi alt ikkje trengst endrast (endå iallfall). Ved å installere eit nytt
              operativsystem, og ta det i bruk der fordelane og gevinstane er mest openbare, vil ein kunne
              behalde det gamle der det gir best meining. Me trur dei fleste vil bevege seg raskare og lenger i
              retning av noko nytt enn ein trur når ein startar, men det er ikkje ein føresetnad for å gå i
              gang. Ein vil uansett etter kort tid oppleve det beste frå:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                title: "Ny styringslogikk",
                desc: "med tydelege prinsipp for styring og leiing som skapar rom for utvikling og trivsel",
              },
              {
                title: "Ny måte å organisere seg på",
                desc: "der myndiggjorte og sjølvstyrande team får og tek eigarskap til å løyse oppgåvene på best mogeleg måte gitt den faktiske konteksten dei står i",
              },
              {
                title: "Nye arbeidsprosessar",
                desc: "der designtenking skapar rammer for at kollektiva kan jobbe fritt, kreativt og systematisk med å først forstå problema skikkeleg (dei er ofte meir komplekse enn ein trudde), for så å bruke ulikskapen i gruppa til å finne løysingar som er annleis enn dei ville ha vore om berre ein skulle ha skapt den",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#2D4233] pl-5 py-2"
              >
                <p className="text-[#1C1C1A]">
                  <span className="font-semibold">{item.title}</span>,{" "}
                  <span className="text-[#3a3a38]">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFramgangsmaate() {
  const steps = [
    {
      num: "1",
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
  ];

  return (
    <section id="framgangsmaate" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Korleis komme i gang?
        </h2>

        <p className="text-[#3a3a38] leading-[1.75] text-base sm:text-lg mb-16">
          For å gjere det meir handfast har me laga eit døme på eit standardløp, slik det kan gjerast. Det vil
          alltid vere behov for å gjere tilpassingar for å sikre at det er relevant og nyttig i den konteksten
          det skal skje i, men ingrediensane er stort sett dei same. Dette rammeverket er inspirert av Anne
          Morriss og Frences Frei i deira bok &ldquo;Move fast &amp; fix things&rdquo;:
        </p>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2D4233] text-white flex items-center justify-center text-xl"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3
                    className="text-xl sm:text-2xl tracking-tight text-[#1C1C1A] mb-6"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>

                  {step.activities.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6860] mb-3">
                        Aktivitetar
                      </p>
                      <ul className="space-y-2">
                        {step.activities.map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-2" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.effects.length > 0 && (
                    <div className="bg-[#EEF5EE] border border-[#C8DEC8] rounded-xl p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2D4233] mb-3">
                        Effektar
                      </p>
                      <ul className="space-y-2">
                        {step.effects.map((e, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-2" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Step X */}
          <div className="relative">
            <div className="flex items-start gap-5">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#2D4233] text-[#2D4233] flex items-center justify-center text-lg"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                X
              </div>
              <div className="flex-1 pt-2">
                <h3
                  className="text-xl sm:text-2xl tracking-tight text-[#1C1C1A] mb-6"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Skalering
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-2" />
                    Halde fram med det som er organisasjonen sine prioriterte område etter same metodikk som steg 2-5
                  </li>
                  <li className="flex items-start gap-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-2" />
                    Støtte frå oss så lenge det er nødvendig, men så raskt som mogeleg i eigen regi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Callout: Fast i alle treffpunkt */}
        <div className="mt-16 border border-[rgba(28,28,26,0.14)] rounded-xl p-6 sm:p-8 bg-[#F8F6F1]">
          <h4
            className="text-xl tracking-tight text-[#1C1C1A] mb-5"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Fast i alle treffpunkt:
          </h4>
          <ul className="space-y-3">
            {[
              "Definere kva som skal gjennomførast til neste gang, heilt konkret",
              "Digital oppfølging mellom dei fysiske møta, ikkje skap tidsperiodar i ingenmannsland",
              "Alle økter startar med å oppsummere, reflektere, dele og hente ut læring frå det som har skjedd sidan sist. Uansett kva det er.",
              "Spørre om noko av læringa bør få konsekvensar for vidare skalering, eller for nye og eksisterande styringssystem og organisering",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6B6860] mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Results callout */}
        <div className="mt-8 border border-[#C8DEC8] rounded-xl p-6 sm:p-8 bg-[#EEF5EE]">
          <h4
            className="text-xl tracking-tight text-[#2D4233] mb-5"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Di raskare ein kjem i gang, di raskare vil ein oppnå:
          </h4>
          <ul className="space-y-3">
            {[
              "Betre kostnadseffektivitet / meir kommune for pengane",
              "Betre trivsel på jobb / meir attraktiv som arbeidsgjevar",
              "Betre leveranse til innbyggjarane / på samfunnsoppdraget",
              "Alt er skreddarsaum, ingen førehandsdefinerte langsiktige planar",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#2D4233] text-sm sm:text-base leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2D4233] mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionDome() {
  return (
    <section id="dome" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28 text-center">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Døme og beskrivingar
        </h2>
        <p className="text-[#6B6860] text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          Artiklar, erfaringar og refleksjonar frå arbeidet med å gjere noko anna i kommunane.
        </p>
        <Link
          href="/artiklar"
          className="inline-flex items-center gap-2 bg-[#2D4233] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#3A5240] transition-colors"
        >
          Sjå alle artiklar
        </Link>
      </div>
    </section>
  );
}

function SectionKontakt() {
  return (
    <section id="kontakt" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28 text-center">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-6 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Kontakt
        </h2>
        <p className="text-[#6B6860] text-base sm:text-lg mb-4 max-w-lg mx-auto leading-relaxed">
          Er du nysgjerrig på korleis dette kan sjå ut i din kommune? Ta gjerne kontakt med oss for ein uforpliktande samtale.
        </p>
        <p className="text-[#3a3a38] text-base sm:text-lg">
          <span className="font-semibold">Selseng &amp; Systaddal AS</span>
        </p>
        <p className="text-[#6B6860] text-sm mt-2">
          Helle Selseng &amp; Joakim Systaddal
        </p>
      </div>
    </section>
  );
}

function SectionOmOss() {
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

  return (
    <section id="om-oss" className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-[720px] px-6 py-20 sm:py-28">
        <h2
          className="text-3xl sm:text-4xl tracking-tight mb-10 text-[#1C1C1A]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Om KommunalSektor.no
        </h2>

        <div className="space-y-6 text-[#3a3a38] leading-[1.75] text-base sm:text-lg">
          <p>
            Denne sida er skapt for å dele. Bak innhaldet står Selseng &amp; Systaddal AS og personane Helle
            Selseng og Joakim Systaddal. Me har vore ein del av dei kommunale problema som er beskrivne, og
            kjent den kommunale verkelegheita på kroppen. Frå inngangen av 2023 til utgangen av 2025 har me
            saman jobba med å koordinere endringsarbeidet i Sogndal kommune, utvikla nye kommunale
            styringssystem og -strukturar saman med nasjonale og regionale fagmiljø og delt erfaringar og
            hjulpe andre organisasjonar i gang med tilsvarande initiativ.
          </p>

          <p>
            No ynskjer me å dele det me har lært, slik at dei som ynskjer å nytte seg av erfaringane våre kan
            gjere det. Me meiner offentleg sektor treng meir deling av praktiske erfaringar, og hadde ønskt oss
            ei slik side sjølv når vår reise tok til. Alt du finn på denne sida er fritt fram å bruke, og me
            håpar det kan vere med å inspirere nokon til å gjere det som for oss var det eine viktigaste steget:
            Berre begynne.
          </p>

          <p>
            Skulle nokon vere interessert i hjelp frå oss, så ta gjerne kontakt. Me bidreg gjerne!
          </p>

          <p>
            Ingenting av det me har gjort hadde vore mogeleg utan gode partnarskap. Difor er me glade for å
            kunne peike andre i retning av dei same gode hjelparane som har betydd mest for oss:
          </p>
        </div>

        {/* Partners */}
        <div className="mt-12 space-y-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="border border-[rgba(28,28,26,0.09)] rounded-xl p-6 sm:p-8 bg-white"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#2D4233] hover:underline"
              >
                {partner.name}
              </a>
              <p className="mt-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                {partner.text}
              </p>
            </div>
          ))}
        </div>

        {/* Public partners */}
        <div className="mt-12">
          <h3
            className="text-2xl tracking-tight mb-6 text-[#1C1C1A]"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Dei offentlege hjelparane
          </h3>

          <div className="space-y-6">
            {publicPartners.map((partner) => (
              <div
                key={partner.name}
                className="border border-[rgba(28,28,26,0.09)] rounded-xl p-6 sm:p-8 bg-white"
              >
                <h4 className="text-lg font-semibold text-[#1C1C1A]">
                  {partner.name}
                </h4>
                <p className="mt-3 text-[#3a3a38] text-sm sm:text-base leading-relaxed">
                  {partner.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(28,28,26,0.09)]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9B9790]">
        <p>&copy; {new Date().getFullYear()} Selseng &amp; Systaddal AS</p>
        <p
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          className="text-base text-[#6B6860]"
        >
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
      <SectionKvaGaarDetUtPaa />
      <SectionFramgangsmaate />
      <SectionDome />
      <SectionKontakt />
      <SectionOmOss />
      <Footer />
    </div>
  );
}
