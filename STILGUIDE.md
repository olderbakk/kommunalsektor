# Aula — Stilguide
**Versjon 2.4 · Februar 2026**

> Fasitdokument for alle som designer og utvikler Aula.
> Gjelder på tvers av admin, deltakerside, frittstående features og markedsføring.
> Bruk dette aktivt i Cursor — ikke som ettertanke.

---

## Innhold

0. [Komponentbibliotek — shadcn/ui](#0-komponentbibliotek--shadcnui)
1. [Designkarakter](#1-designkarakter)
2. [Farger](#2-farger)
3. [Typografi](#3-typografi)
4. [Mellomrom](#4-mellomrom)
5. [Radius og skygger](#5-radius-og-skygger)
6. [Knapper](#6-knapper)
7. [Badges og etiketter](#7-badges-og-etiketter)
8. [Kort og overflater](#8-kort-og-overflater)
9. [Skjemaelementer](#9-skjemaelementer)
10. [Navigasjon og layout](#10-navigasjon-og-layout)
11. [Tomme tilstander](#11-tomme-tilstander)
12. [Spesialkomponenter](#12-spesialkomponenter)
13. [Animasjon](#13-animasjon)
14. [Tone of voice](#14-tone-of-voice)
15. [De tre kontekstene](#15-de-tre-kontekstene)

---

## 0. Komponentbibliotek — shadcn/ui

Aula bruker **shadcn/ui** som teknisk grunnlag for UI-komponenter. shadcn gir ferdigbygde, tilgjengelige komponenter (knapp, modal, dropdown, toggle osv.) som vi overstyrer med Aulas egne designtokens.

### Prinsippet

shadcn er **strukturen**. Aulas CSS-variabler er **utseendet**.

```
shadcn Button  →  komponentlogikk, tilgjengelighet, tastaturnavigasjon
Aulas tokens   →  farge, radius, typografi, mellomrom
```

Cursor kjenner shadcn godt. Det betyr raskere og mer presis kodegenerering når du beskriver komponenter.

### Slik overstyrer vi shadcn

Alle Aulas farger, radius og typografi er definert som CSS-variabler i `globals.css`. shadcn henter sine verdier fra de samme variabelnavnene — vi mapper Aulas tokens til shadcns forventede navn:

```css
/* globals.css — Aula-overrides av shadcn sine variabler */
:root {
  /* shadcn forventer disse navnene: */
  --background:        var(--color-bg-app);        /* #F2EEE6 */
  --foreground:        var(--color-text-primary);  /* #1C1C1A */
  --card:              var(--color-bg-surface);    /* #FFFFFF */
  --card-foreground:   var(--color-text-primary);
  --primary:           var(--color-green-900);     /* #2D4233 */
  --primary-foreground: var(--color-text-inverse); /* #FFFFFF */
  --muted:             var(--color-bg-subtle);     /* #F5F2EB */
  --muted-foreground:  var(--color-text-secondary);
  --border:            var(--color-border);
  --radius:            var(--radius-md);           /* 10px — shadcns base-radius */
}
```

### Hvilke shadcn-komponenter vi bruker

| shadcn-komponent | Aula bruker den til | Override |
|-----------------|---------------------|---------|
| `Button` | Primær CTA, sekundær, ghost | `--radius-pill` for primær, `--radius-md` for sekundær |
| `Dialog` | Modaler | Sentrert ikon øverst, CTA festet nederst |
| `DropdownMenu` | Kontekstmeny (⋯) | Vises kun på hover |
| `Switch` | Toggle | `--color-green-900` når aktiv |
| `Badge` | Statusbadges, type-badges | Egne fargevariabler per status |
| `Tabs` | Innspill / Innsikt / Deling | Understrek-stil, ikke boks-stil |
| `Input` | Skjemafelt | `--radius-md`, fokusring i grønn |
| `Select` | Dropdown-velgere | Samme stil som Input |
| `Tooltip` | Hover-forklaringer | Mørk bakgrunn, hvit tekst |

Toast-varsler bruker **`react-hot-toast`** — ikke shadcn Toast. Plassering: nedre høyre hjørne.

### Det shadcn ikke løser

Disse komponentene er Aula-spesifikke og bygges fra scratch:

- **Aktivitetskort** — thumbnail, status-badge, type-ikon, hover-handlinger
- **Kartpinne** — grønn teardrop med skygge
- **Stemknapp (Vote)** — tre tilstander, pill-form
- **Legg til-kort** — stiplet kant, +-ikon, lys grønn bakgrunn
- **FAB** — flytende grønn pill over kartvisning
- **Innspillkort** — stor tekst (≥ 20px), stemknapp, tidsstempel
- **Popularitetsbar** — temavisualisering i statistikkvisning

---

## 1. Designkarakter

Aula er et nordisk arbeidsverktøy. Det skal kjennes **varmt, romslig og tillitsfullt** — ikke generisk SaaS.

### Designprinsipper

**Innhold er det viktigste.**
Deltakernes innspill, prosjektbilder og kart er alltid det som dominerer skjermen. UI-elementer skal trekke seg tilbake.

**Ett fokus om gangen.**
Hver skjerm har én primær handling. Alt annet er underordnet.

**Konsekvent = trygt.**
Det samme komponentet oppfører seg likt overalt. Visuell gjenkjenning bygger tillit — særlig viktig for deltakere som bruker Aula én gang.

**Nordisk ro.**
Rikelig luft. Subtile grenser. Aldri klaustrofobisk — ikke typisk SaaS-dashboard.

### Konkrete designregler

Disse reglene er destillert fra Aulas tidlige designarbeid. De lever uavhengig av hvilke andre produkter som finnes der ute.

**Sidebar**
- Kun tekst og ikoner — ingen seksjonsoverskrifter med uppercase-labels
- Aktiv lenke: subtil kremfarge, ingen tykk farget stripe
- Bruker-rad alltid nederst, festet til bunnen

**Tomme tilstander**
- Sentrert ikon med lav opacity (40%), aldri farget
- Én overskrift: hva du kan gjøre her
- Én konkret undertekst: neste steg
- Én primærknapp — aldri to handlinger
- Aldri bare en blank flate

**Modaler**
- Ikon eller illustrasjon sentrert øverst
- Tittel og undertekst sentrert
- Primær CTA festet nederst i modalen
- Maks én primærhandling per modal

**Lister og tabeller**
- Type-badge inline til høyre for tittel (ikke i egen kolonne)
- Handlinger (rediger, slett) vises kun på hover
- Kontekstmeny bak ⋯-knapp, aldri eksponert som rad med knapper

**Legg til-kort**
- Enkelt hvitt kort med stiplet kant
- Kun +-ikon i midten — ingen forklarende tekst inni kortet
- Samme størrelse og radius som innholdskortene ved siden av

**Historisk kontekst:**
Designbeslutningene er påvirket av Heidi Health (sidebar og tomme tilstander), Airbnb (kart og kortlayout), Hedvig (nordisk minimal estetikk) og Apple HIG (interaksjonsmønstre). Disse navnene er referanser for historisk forståelse — ikke aktive instruksjoner.

---

## 2. Farger

### 2.1 CSS-variabler

```css
:root {

  /* ── BAKGRUNN ─────────────────────────────── */
  --color-bg-app:          #F2EEE6;  /* Varm krem — sidens ytterkant */
  --color-bg-surface:      #FFFFFF;  /* Hvit — kort, paneler, modaler */
  --color-bg-subtle:       #F5F2EB;  /* Svakt krem — hover, inndeling */
  --color-bg-green-muted:  #EEF5EE;  /* Lys grønn — tomme/legg-til-kort */

  /* ── PRIMÆR MERKEVARE (grønn) ────────────── */
  --color-green-900:       #2D4233;  /* Mørk skogsgrønn — primær CTA */
  --color-green-800:       #3A5240;  /* Hover for primær CTA */
  --color-green-700:       #4A6650;  /* Aktive nav-elementer */
  --color-green-200:       #C8DEC8;  /* Grønn kant */
  --color-green-100:       #EEF5EE;  /* Lys grønn bakgrunn */
  --color-green-text:      #2D6A4F;  /* Grønn tekst (badges, lenker) */

  /* ── AVATAR-ORANGE (kun avatarer) ────────── */
  --color-avatar-bg:       #FDEADB;  /* Lys bakgrunn for avatar */
  --color-avatar-fill:     #E07A3C;  /* Orange fyll */
  /* OBS: orange brukes ALDRI som knapp, aksent eller lenke */

  /* ── MARKETING-GUL (kun aula.no) ─────────── */
  --color-yellow-cta:      #F0C93A;
  --color-yellow-hover:    #E8BF2A;
  /* OBS: gul brukes ALDRI i selve appen */

  /* ── TEKST ────────────────────────────────── */
  --color-text-primary:    #1C1C1A;  /* Nesten svart — UI-tekst */
  --color-text-serif:      #5C3D1E;  /* Varm brun/kopper — kun serif-overskrifter */
  --color-text-secondary:  #6B6860;  /* Varm grå — metadata, undertekst */
  --color-text-disabled:   #B5B2AC;
  --color-text-inverse:    #FFFFFF;  /* Tekst på mørk bakgrunn */
  --color-text-green:      #2D6A4F;
  --color-text-blue:       #2B5A8A;

  /* ── GRENSER ──────────────────────────────── */
  --color-border:          rgba(28, 28, 26, 0.09);
  --color-border-medium:   rgba(28, 28, 26, 0.14);
  --color-border-strong:   rgba(28, 28, 26, 0.20);
  --color-border-dashed:   rgba(28, 28, 26, 0.18);

  /* ── STATUS ───────────────────────────────── */
  --color-active-bg:       #E8F5E8;
  --color-active-text:     #2D6A4F;
  --color-closed-bg:       #FCE8EA;
  --color-closed-text:     #B03A42;
  --color-inactive-bg:     #EDECE8;
  --color-inactive-text:   #6B6860;

  /* ── SYNLIGHET ────────────────────────────── */
  --color-public-bg:       #E8F5EE;
  --color-public-text:     #2D6A4F;
  --color-invited-bg:      #E8EFF8;
  --color-invited-text:    #2B5A8A;
  --color-private-bg:      #EDECE8;
  --color-private-text:    #6B6860;

  /* ── FARE ─────────────────────────────────── */
  --color-danger-text:     #C0392B;
  --color-danger-bg:       #FCE8EA;
  --color-danger-border:   #E8A0A5;
}
```

### 2.2 Fargebruk i praksis

| Farge | Riktig bruk | Feil bruk |
|-------|-------------|-----------|
| `--color-green-900` | Primær CTA, kartpinne, aktiv toggle | Dekorativ bakgrunn, tekst i brødtekst |
| `--color-avatar-fill` (orange) | Avatarer og team-ikoner | Knapper, aksentfarger, lenker |
| `--color-yellow-cta` | CTA på aula.no | Noe som helst inne i appen |
| `--color-bg-app` | Sidens ytterbakgrunn | Kortoverflater |
| `#FFFFFF` | Kort, modaler, sidebar | Sidens ytterbakgrunn |

---

## 3. Typografi

Aula bruker **to distinkte font-roller** som aldri blandes innenfor samme element.

### 3.1 Font-stack

```css
/* Serif — kun overskrifter og logo */
--font-family-serif: 'GascogneTS-Light', 'Cormorant Garamond', Georgia, serif;

/* Sans-serif — all UI-tekst */
--font-family-base: 'Moderat', 'DM Sans', 'Helvetica Neue', sans-serif;

--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**GascogneTS-Light** er den lisensierte serif-fonten. Den er elegant og lys med Garamond-slektskap — brukes til H1, display og logo. Klar til bruk når lisensen er på plass.

**Cormorant Garamond Regular** (`wght 400`) er aktiv fallback frem til GascogneTS er klar. Bruk Regular — ikke Light. Light er for tynn i liten størrelse.

**Moderat** er lisensiert grotesk for all UI-tekst. **DM Sans** er fallback.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
```

### Hvilken font til hva

| Element | Font | Farge |
|---------|------|-------|
| Logo "Aula" | Serif | `--color-text-primary` |
| H1 hilsen ("God morgen, Elias!") | Serif | `--color-text-serif` (#5C3D1E) |
| H2 sideoverskrift | Serif | `--color-text-primary` |
| Navigasjonslenker | Sans-serif | `--color-text-secondary` |
| Knapper | Sans-serif | avhenger av variant |
| Brødtekst, labels, metadata | Sans-serif | `--color-text-primary` / secondary |
| Badges, tabs | Sans-serif | avhenger av variant |

**Viktig:** Serif-fonten brukes sparsomt og konsekvent — kun der den allerede er etablert. Ikke legg til serif på nye steder uten gjennomtenkt grunn.

### 3.2 Størrelsesskala

```css
--font-size-xs:   11px;   /* Metadata, uppercase-labels */
--font-size-sm:   13px;   /* Nav, sekundær tekst */
--font-size-base: 15px;   /* Standard brødtekst */
--font-size-md:   17px;   /* Fremhevet brødtekst */
--font-size-lg:   20px;   /* Innspilltekst, kortoverskrifter */
--font-size-xl:   24px;   /* Sideoverskrift (h3) */
--font-size-2xl:  32px;   /* Statistikkverdier, h2 */
--font-size-3xl:  40px;   /* App-hero (h1) */
--font-size-4xl:  56px;   /* Marketing display */
--font-size-5xl:  72px;   /* Stor marketing display */
```

### 3.3 Vekter

```css
/* Grotesk (Moderat / DM Sans) */
--font-weight-regular:  400;
--font-weight-medium:   500;
--font-weight-semibold: 600;
--font-weight-bold:     700;

/* Serif (GascogneTS / Cormorant Garamond) */
--font-weight-serif:    400;  /* Regular — eneste vekten som brukes i serif */
```

### 3.4 Linjeavstand

```css
--line-height-tight:   1.15;  /* Store overskrifter */
--line-height-snug:    1.3;   /* Mellomstore overskrifter */
--line-height-base:    1.55;  /* Brødtekst */
--line-height-relaxed: 1.75;  /* Innspilltekst, lange avsnitt */
```

### 3.5 Bokstavmellomrom

```css
--letter-spacing-tight:  -0.02em;  /* H1, H2 */
--letter-spacing-normal:  0em;
--letter-spacing-label:   0.07em;  /* Uppercase-labels */
```

### 3.6 Typografiske roller

| Rolle | Font | Størrelse | Vekt | Brukes til |
|-------|------|-----------|------|-----------|
| Display | **Serif** | 56–72px | Regular | Marketing-hero |
| H1 | **Serif** | 40px | Regular | App-sideoverskrift — «God morgen, Elias!» |
| H2 | **Serif** | 32px | Regular | Seksjonsoverskrift |
| H3 | Grotesk | 24px | Semibold | Kortoverskrift, modaltittel |
| H4 | Grotesk | 20px | Medium | Underoverskrift |
| Body LG | Grotesk | 17px | Regular | Ingress, hjelpetekst |
| Body | Grotesk | 15px | Regular | Standard brødtekst |
| Body SM | Grotesk | 13px | Regular | Nav, metadata, labels |
| Caption | Grotesk | 11px | Semibold + uppercase | Seksjonsoverskrifter i sidebar |
| Innspill | Grotesk | 20px | Regular | Deltakerinnspill — alltid stor og lesbar |

**Tommelfingerregel:** Serif er alltid Regular-vekt — aldri Bold. Tyngden ligger i størrelsen, ikke vekten. All interaktiv tekst (knapper, nav, labels, inputs) er alltid grotesk.

---

## 4. Mellomrom

8px-grid. Alle verdier er multipler av 4.

```css
--space-1:   4px;
--space-2:   8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Tommelfingerregler

| Situasjon | Token |
|-----------|-------|
| Gap mellom ikon og tekst i knapp | `--space-2` |
| Padding i liten knapp | `8px 14px` |
| Padding i standard knapp | `10px 18px` |
| Padding i stor CTA | `16px 28px` |
| Padding inni kort | `--space-5` til `--space-6` |
| Gap mellom seksjoner | `--space-8` til `--space-12` |
| Sidebar indre padding | `--space-4` |
| Innhold-padding (main) | `--space-8` |

---

## 5. Radius og skygger

### 5.1 Hjørneradius

```css
--radius-sm:    6px;     /* Chips, intern inndeling */
--radius-md:    10px;    /* Sekundærknapper, inputs, tabeller */
--radius-lg:    14px;    /* Kort */
--radius-xl:    18px;    /* Store kort, modaler */
--radius-2xl:   24px;    /* App-shell (den ytre rammen) */
--radius-pill:  9999px;  /* Primærknapper, FAB, badges */
```

**Mønster:**
- Primær CTA og FAB → `--radius-pill`
- Sekundærknapper og inputs → `--radius-md`
- Kort → `--radius-lg` eller `--radius-xl`
- Den ytre app-rammen (som i skjermbildene) → `--radius-2xl`

### 5.2 Skygger

Alltid varme — aldri blå eller kalde.

```css
--shadow-xs:  0 1px 2px  rgba(28, 28, 26, 0.05);
--shadow-sm:  0 2px 6px  rgba(28, 28, 26, 0.07);
--shadow-md:  0 4px 14px rgba(28, 28, 26, 0.09);
--shadow-lg:  0 8px 28px rgba(28, 28, 26, 0.11);
--shadow-xl:  0 16px 48px rgba(28, 28, 26, 0.14);
```

**Bruk:** Kort bruker vanligvis bare `--color-border`, ikke skygge. Skygger reserveres for modaler, dropdowns og floating-elementer (FAB, kartpinner).

---

## 6. Knapper

Aula har et rikt knappsystem. Hierarkiet er strengt — følg det.

### 6.1 Primær CTA

Mørk skogsgrønn pill. Alltid den viktigste handlingen på siden.

```css
.btn-primary {
  background-color: var(--color-green-900);
  color: var(--color-text-inverse);
  border-radius: var(--radius-pill);
  padding: 10px 18px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  transition: background-color 150ms ease;
}

.btn-primary:hover {
  background-color: var(--color-green-800);
}
```

Brukes til: `+ Ny aktivitet`, `+ Nytt rom`, `Legg til innspill` (FAB)

### 6.2 Sekundær / Basic

Lys bakgrunn, subtil kant. Støttende handlinger.

```css
.btn-secondary {
  background-color: var(--color-bg-subtle);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  padding: 8px 14px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  transition: background-color 150ms ease;
}

.btn-secondary:hover {
  background-color: var(--color-border);
}
```

Brukes til: `Rediger`, `Vis rom`, `Innstillinger`, `Inviter medlemmer`, `Tilbake`

### 6.3 Ghost

Ingen bakgrunn, ingen kant. For handlinger som ikke skal konkurrere.

```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  border-radius: var(--radius-md);
  padding: 8px 14px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.btn-ghost:hover {
  background-color: var(--color-bg-subtle);
  color: var(--color-text-primary);
}
```

### 6.4 CTA Big (deltakerflyt)

Tre varianter — brukes for store handlinger i deltakerflyten. Alltid `--radius-pill`.

```css
/* Transparent */
.btn-cta-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-pill);
  padding: 16px 28px;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  width: 100%;
  cursor: pointer;
}

/* Lys */
.btn-cta-light {
  background: var(--color-bg-subtle);
  color: var(--color-text-primary);
  border: none;
  border-radius: var(--radius-pill);
  padding: 16px 28px;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  width: 100%;
  cursor: pointer;
}

/* Mørk */
.btn-cta-dark {
  background: var(--color-green-900);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-pill);
  padding: 16px 28px;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  width: 100%;
  cursor: pointer;
}
```

Brukes til: `Gi innspill`, `Se hvordan det funker`

### 6.5 FAB (Floating Action Button)

Grønn pill med ikon, flytende over kart eller innhold.

```css
.btn-fab {
  background: var(--color-green-900);
  color: var(--color-text-inverse);
  border-radius: var(--radius-pill);
  padding: 14px 22px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: var(--shadow-lg);
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
}
```

Brukes til: `+ Legg til innspill` på kartvisning

### 6.6 Destruktiv / Slett

```css
.btn-danger {
  background: var(--color-danger-bg);
  color: var(--color-danger-text);
  border: 1px solid var(--color-danger-border);
  border-radius: var(--radius-md);
  padding: 8px 14px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}

.btn-danger-ghost {
  background: transparent;
  color: var(--color-danger-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 8px 14px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
}
```

### 6.7 Marketing CTA (kun aula.no)

```css
.btn-marketing {
  background: var(--color-yellow-cta);
  color: var(--color-text-primary);
  border: none;
  border-radius: var(--radius-pill);
  padding: 12px 22px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
```

**Aldri i appen. Kun på aula.no.**

### 6.8 Knapphierarki — oppsummert

```
Per side / modal:
  Én primær (btn-primary eller btn-cta-dark)
  Én til to sekundære (btn-secondary)
  Ghost for stillere handlinger

Deltakerside:
  btn-cta-dark som primær
  btn-cta-light eller btn-cta-outline som alternativ
  btn-fab over kart

Destruktive handlinger:
  Alltid isolert, aldri ved siden av primærknapp
  Bekreftelsesdialog påkrevd ved permanent sletting
```

---

## 7. Badges og etiketter

### 7.1 Aktivitetsstatus

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.badge-active   { background: var(--color-active-bg);   color: var(--color-active-text); }
.badge-closed   { background: var(--color-closed-bg);   color: var(--color-closed-text); }
.badge-inactive { background: var(--color-inactive-bg); color: var(--color-inactive-text); }
```

Tekst: `Aktiv` · `Avsluttet` · `Innaktiv`

### 7.2 Synlighetsetiketter

Tre varianter for hvem som kan se et prosjekt eller aktivitet.

```css
.visibility-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.visibility-public  { background: var(--color-public-bg);  color: var(--color-public-text); }
.visibility-invited { background: var(--color-invited-bg); color: var(--color-invited-text); }
.visibility-private { background: var(--color-private-bg); color: var(--color-private-text); }
```

Tekst: `Synlig for alle` · `Kun for inviterte` · `Synlig kun for deg`

### 7.3 Type-badge (inline)

Inspirert av Heidi Health — vises inline etter tittel i tabeller og lister.

```css
.type-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
  margin-left: var(--space-2);
}
```

Brukes til å merke type aktivitet: `Kart` · `Spørsmål` · `Meningsmåling` osv.

---

## 8. Kort og overflater

### 8.1 Standard aktivitetskort

```css
.activity-card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.activity-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.activity-card__thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--color-bg-subtle);
  object-fit: cover;
}

.activity-card__body {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.activity-card__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.activity-card__meta {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}
```

### 8.2 Legg-til-kort

Inspirert av Heidi Health — enkelt, tillitsfullt. Stiplet kant, lys grønn bakgrunn.

```css
.add-card {
  background: var(--color-bg-green-muted);
  border: 1.5px dashed var(--color-border-dashed);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.add-card:hover {
  background: var(--color-green-100);
  border-color: var(--color-green-200);
}
```

### 8.3 Innspillkort (deltakervisning)

Innspillstekst er alltid stor og romslig. Aldri tett.

```css
.contribution-card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.contribution-card__meta {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-5);
}

.contribution-card__text {
  font-size: var(--font-size-lg);      /* 20px */
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  margin-bottom: var(--space-5);
}
```

### 8.4 Statistikkblokk

Brukes for engasjementstall (besøkende, innspill, reaksjoner).

```css
.stat-block {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
}

.stat-block__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.stat-block__value {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
}
```

### 8.5 Modal

Inspirert av Heidi Health — hvit flate, runde hjørner, ikon/tittel sentrert øverst, primær CTA festet i bunnen.

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 28, 26, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-4);
}

.modal {
  background: var(--color-bg-surface);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  width: 100%;
  max-width: 520px;
  box-shadow: var(--shadow-xl);
  max-height: 90vh;
  overflow-y: auto;
}

.modal__icon {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.modal__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  margin-bottom: var(--space-2);
}

.modal__subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: var(--space-6);
}

.modal__footer {
  margin-top: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
```

---

## 9. Skjemaelementer

### 9.1 Input-felt

```css
.input {
  width: 100%;
  padding: 10px 14px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.input::placeholder {
  color: var(--color-text-disabled);
}

.input:focus {
  border-color: var(--color-green-900);
  box-shadow: 0 0 0 3px rgba(45, 66, 51, 0.10);
}
```

### 9.2 Select / dropdown

Samme stil som input, med chevron-ikon til høyre.

### 9.3 Toggle

```css
.toggle {
  width: 44px;
  height: 26px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-pill);
  position: relative;
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease;
}

.toggle--on {
  background: var(--color-green-900);
  border-color: var(--color-green-900);
}

.toggle__knob {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 200ms ease;
  box-shadow: var(--shadow-xs);
}

.toggle--on .toggle__knob {
  transform: translateX(18px);
}
```

### 9.4 Checkbox

Standard OS-checkbox med Moderat-label. Ingen custom-styling — følg OS/browser-default for best tilgjengelighet.

---

## 10. Navigasjon og layout

### 10.1 App-shell

```
┌──────────────────────────────────────────────────────┐
│  (krem ytterbakgrunn — #F2EEE6)                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  Sidebar (200px)  │  Hovedinnhold            │   │
│  │  krem bakgrunn    │  krem/off-white bakgrunn │   │
│  │  (samme som ytre) │                          │   │
│  │  [Aula-logo]      │  [Serif overskrift]      │   │
│  │  [Ny aktivitet]   │  [Handlingskort]         │   │
│  │                   │  [Kortgrid]              │   │
│  │  Nav-lenker       │                          │   │
│  │                   │                          │   │
│  │  [Team]           │                          │   │
│  │  [Instillinger]   │                          │   │
│  │  [Bruker]         │                          │   │
│  └──────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘
```

**Viktig:** Sidebar-bakgrunnen er **krem** — samme farge som ytterbakgrunnen (`--color-bg-app`). Det er ikke noe visuelt skille mellom sidebar og ytterkant. Kortene og innholdsoverflatene er hvite og skaper kontrasten. App-shellet som helhet (den avrundede ytre rammen) er ett sammenhengende kremfelt — sidebar skiller seg ikke ut som en separat hvit kolonne.

### 10.2 Sidebar-navigasjon

```css
/* Seksjonsoverskrift */
.nav-section-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-label);
  text-transform: uppercase;
  color: var(--color-text-disabled);
  padding: var(--space-4) var(--space-4) var(--space-2);
}

/* Nav-lenke */
.nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  margin: 1px var(--space-2);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  text-decoration: none;
}

.nav-item:hover {
  background: var(--color-bg-subtle);
  color: var(--color-text-primary);
}

.nav-item--active {
  background: var(--color-bg-subtle);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

.nav-item svg {
  width: 16px;
  height: 16px;
  opacity: 0.45;
  flex-shrink: 0;
}

.nav-item:hover svg,
.nav-item--active svg {
  opacity: 0.9;
}
```

### 10.3 Faner (tabs)

```css
.tab-bar {
  display: flex;
  border-bottom: 1px solid var(--color-border);
  gap: 0;
}

.tab {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}

.tab--active {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  border-bottom-color: var(--color-text-primary);
}
```

### 10.4 Grid/List-toggle

```css
.view-toggle {
  display: flex;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-md);
  padding: 3px;
  gap: 2px;
}

.view-toggle__btn {
  padding: 6px 12px;
  border-radius: calc(var(--radius-md) - 2px);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  transition: all 150ms ease;
}

.view-toggle__btn--active {
  background: var(--color-text-primary);
  color: white;
}
```

### 10.5 Sorteringsvelger

```css
.sort-group {
  display: flex;
  gap: var(--space-1);
}

.sort-btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-text-secondary);
}

.sort-btn--active {
  background: var(--color-bg-subtle);
  color: var(--color-text-primary);
}
```

---

## 11. Tomme tilstander

Tomme tilstander er en mulighet til å invitere — ikke en feil å gjemme bort.

### Struktur

```
[Sentrert illustrasjon eller ikon]
[Overskrift — hva du kan gjøre her]
[Undertekst — konkret neste steg]
[Primærknapp]
```

### CSS

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-16) var(--space-8);
  gap: var(--space-4);
}

.empty-state__icon {
  width: 48px;
  height: 48px;
  opacity: 0.4;
  margin-bottom: var(--space-2);
}

.empty-state__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.empty-state__description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  max-width: 360px;
}
```

### Eksempeltekster

| Kontekst | Overskrift | Undertekst |
|----------|-----------|------------|
| Ingen prosjekter | Opprett ditt første prosjekt | Her samler du aktiviteter og innspill fra deltakerne. |
| Ingen aktiviteter | Legg til en aktivitet | Velg type — kart, spørsmål, avstemming eller mer. |
| Ingen innspill ennå | Ingen innspill ennå | Del lenken med deltakere for å komme i gang. |

---

## 12. Spesialkomponenter

### 12.1 Stemknapp (Vote)

Tre tilstander: standard, hover, aktiv (har stemt).

```css
.vote-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  font-size: var(--font-size-sm);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--color-text-secondary);
  transition: all 150ms ease;
}

.vote-btn:hover {
  background: var(--color-bg-subtle);
  border-color: var(--color-border);
  color: var(--color-text-primary);
}

.vote-btn--voted {
  background: var(--color-green-900);
  color: var(--color-text-inverse);
  border-color: var(--color-green-900);
}
```

Ledsagetekst: `Støtt innspill` → `Du støtter`

### 12.2 Kartpinne

Mørk grønn teardrop. Lys ring rundt. Alltid `--shadow-md`.

```css
.map-pin {
  width: 44px;
  height: 56px;
  background: var(--color-green-900);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.map-pin::before {
  content: '';
  position: absolute;
  inset: -5px;
  background: var(--color-green-100);
  border-radius: inherit;
  z-index: -1;
}

.map-pin__icon {
  transform: rotate(45deg);
  color: white;
  width: 18px;
  height: 18px;
}
```

### 12.3 Avatar

```css
.avatar {
  border-radius: var(--radius-pill);
  background: var(--color-avatar-bg);
  color: var(--color-avatar-fill);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
  flex-shrink: 0;
  overflow: hidden;
}

.avatar--xs  { width: 20px; height: 20px; font-size: 9px; }
.avatar--sm  { width: 26px; height: 26px; font-size: var(--font-size-xs); }
.avatar--md  { width: 32px; height: 32px; font-size: var(--font-size-xs); }
.avatar--lg  { width: 44px; height: 44px; font-size: var(--font-size-sm); }
.avatar--xl  { width: 64px; height: 64px; font-size: var(--font-size-lg); }
```

### 12.4 Accordion-meny (innspillhandlinger)

```css
.context-menu {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-width: 160px;
  box-shadow: var(--shadow-md);
}

.context-menu__item {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background 100ms ease;
}

.context-menu__item:hover {
  background: var(--color-bg-subtle);
}

.context-menu__item--danger {
  color: var(--color-danger-text);
}

.context-menu__item--danger:hover {
  background: var(--color-danger-bg);
}
```

### 12.5 Populære tema / horisontale bars

```css
.topic-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-sm);
}

.topic-bar__label { color: var(--color-text-primary); }
.topic-bar__value { color: var(--color-text-secondary); }

.topic-bar__track {
  height: 6px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-pill);
  margin-top: var(--space-1);
  margin-bottom: var(--space-2);
}

.topic-bar__fill {
  height: 100%;
  background: var(--color-green-200);
  border-radius: var(--radius-pill);
}
```

---

## 13. Animasjon

```css
--duration-instant:  80ms;
--duration-fast:    150ms;
--duration-base:    220ms;
--duration-slow:    350ms;
--ease-default: cubic-bezier(0.16, 1, 0.3, 1);  /* Springy ut */
--ease-in:      cubic-bezier(0.4, 0, 1, 1);
--ease-out:     cubic-bezier(0, 0, 0.2, 1);
```

**Tommelfingerregler:**
- Hover-tilstander: `--duration-fast` + `--ease-out`
- Modaler inn/ut: `--duration-base` + `--ease-default`
- Ingenting i UI bruker mer enn `--duration-slow`
- Aldri `linear` — det kjennes mekanisk

---

## 14. Tone of voice

### Hvem snakker Aula til?

**Administratorer** er planleggere, rådgivere og prosjektledere. De vil ha effektiv navigasjon og klare instruksjoner. Ingen unødvendig forklaring.

**Deltakere** er innbyggere, ansatte eller brukere som kanskje aldri har brukt lignende verktøy. De trenger trygghet, lav terskel og tydelig oppfordring.

### Stemme

Vennlig og direkte — som en kompetent kollega som tar deg på alvor.

| ✅ Gjør | ❌ Unngå |
|--------|---------|
| Kort og konkret | Lange forklarende setninger |
| Direkte tiltale ("du", "ditt") | Passiv form ("det kan opprettes") |
| Norske ord | Anglisismer ("submit", "upload", "feed") |
| Handlingsorientert | Abstrakt og vagt |
| Varm uten å være falsk | "Fantastisk!", "Supert!", overdriven positivitet |

### Tone per kontekst

**Tom tilstand:** Inviterende og konkret.
> "Du har ingen prosjekter ennå. Opprett ditt første for å komme i gang."

**Bekreftelse:** Kort og faktabasert.
> "Prosjektet er lagret." — ikke "Flott, prosjektet ditt er nå lagret!"

**Feil:** Rolig og løsningsorientert.
> "Noe gikk galt. Prøv igjen, eller kontakt oss hvis problemet vedvarer."

**Slett:** Tydelig, ikke dramatisk.
> "Innspillet slettes permanent. Er du sikker?"

### Nøkkelterminologi

Bruk disse ordene konsekvent i UI-tekst og variabelnavn:

| Bruk | Ikke bruk |
|------|-----------|
| Prosjekt | Case, survey, oppdrag |
| Aktivitet | Form, module, oppgave |
| Innspill | Svar, respons, submission, bidrag |
| Deltaker | Bruker, respondent, innbygger (kontekstavhengig) |
| Team | Workspace, organisasjon, org |
| Rom | Side, portal, landingsside |
| Synlighet | Tillatelser, permissions, tilgang |
| Støtt (innspill) | Like, stem, vote, upvote |

---

## 15. De tre kontekstene

Aula eksisterer i tre distinkte kontekster som deler designsystemet, men har egne regler.

### 15.1 Admin — app.aula.no

- Sidebar til venstre, hvit overflate på krem bakgrunn
- App-i-vindu-look med `--radius-2xl` på ytre ramme
- Primærknapp: `btn-primary` (grønn pill)
- Kompakt typografiskala
- Fokus: effektivitet og oversikt

**Ikke bruk:** gul CTA, stor deltakertype, FAB

### 15.2 Deltakerside — [url]/a/[slug]

- Ingen sidebar — fullt fokus på aktiviteten
- Hvit bakgrunn
- Primærknapp: `btn-cta-dark` eller `btn-fab` over kart
- Innspilltekst alltid ≥ 20px
- Fokus: enkel deltakelse, lav terskel

**Ikke bruk:** gul CTA, admin-kortgrid

### 15.3 Markedsføring — aula.no

- Gul primær CTA (aldri i appen)
- Stor displaytypografi (56–72px)
- Redaksjonelt foto, illustrasjoner tillatt
- Fokus: konvertering og kommunikasjon av verdi

**Ikke bruk:** grønn primærknapp, admin-UI-mønstre

---

## Appendiks: Z-indeks og breakpoints

```css
/* Z-indeks */
--z-base:     0;
--z-dropdown: 100;
--z-sticky:   200;
--z-modal:    300;
--z-toast:    400;
--z-tooltip:  500;

/* Layout */
--sidebar-width:      200px;
--content-max-width: 1200px;
--modal-max-width:    520px;

/* Breakpoints */
--bp-sm:  640px;
--bp-md:  768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

---

*Maintainers: Erlend Grimeland · Sist oppdatert: Februar 2026*
*Spørsmål? Oppdater dette dokumentet — ikke lag parallelle beslutninger.*
