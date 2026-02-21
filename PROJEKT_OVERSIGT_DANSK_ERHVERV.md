# Warehouse Warrior — Projektoversigt

**Udarbejdet af:** Martin René Mortensen, SmartPack  
**Formål:** Projektoversigt til Dansk Erhverv  
**Version:** Marts 2025

---

## 1. Hvad er Warehouse Warrior?

Warehouse Warrior er et gratis, browserbaseret quiz-spil, der tester og træner spillerens viden om lageroptimering for e-commerce. Spillet er bygget som en webapp (PWA) og kan installeres direkte på telefonen — ingen app-store nødvendig.

Alt indhold er baseret på e-bogen **"Lagerhåndbog for den voksende webshop"** af Martin René Mortensen (SmartPack), og spillet fungerer som en interaktiv forlængelse af bogens budskaber.

**Målgruppe:** Lagermedarbejdere, lagerledere, webshop-ejere og logistikstuderende i Danmark.

---

## 2. Spillets opbygning

### 2.1 Struktur: 3 runder, 15 spørgsmål

| Runde | Spørgsmål | Sværhedsgrad | Tid pr. spørgsmål | Point-multiplikator |
|:---:|:---:|---|:---:|:---:|
| **1** | Q1–Q5 | Let (level 1–5) | 60 sek. | ×1 |
| **2** | Q6–Q10 | Medium (level 6–10) | 45 sek. | ×3 |
| **3** | Q11–Q15 | Svær (level 11–15) | 20 sek. | ×5 |

- **Runde 1–2:** Ét tilfældigt spørgsmål trækkes fra hvert level (1–10). Der er 8–12 spørgsmål pr. level i databasen, så spilleren får nye spørgsmål ved hvert spil.
- **Runde 3:** 5 tilfældige spørgsmål trækkes fra en pulje på 67 avancerede spørgsmål fordelt over tre sværhedsgrader: *Avanceret*, *Ekspert* og *Super Ekspert*.

### 2.2 Spørgsmålsdatabase

- **252 unikke spørgsmål** med 4 svarmuligheder hver
- **15 kategorier:** Lagerindretning, ABC-analyse, Plukkestrategi, Redskaber, Lagerstyring, Pakkefejl, Returer, Svind, Nøgletal, 3PL, Fragt, Emballage, Kampagner, Generelt, samt de tre avancerede niveauer
- Hvert spørgsmål har en **forklaring** der vises ved forkert svar, så spilleren lærer af sine fejl
- Udvalgte spørgsmål har et **Pro Tip** der vises ved både korrekt og forkert svar

### 2.3 Forkert svar = Game Over

Spillet bruger en **"Hvem vil være millionær"-mekanik**: Ét forkert svar, og spillet er slut. Dette skaber spænding og gør, at spilleren tænker sig grundigt om — i stedet for at klikke hurtigt igennem.

### 2.4 Pointsystem

Point beregnes ud fra **hastighed**: Jo hurtigere du svarer korrekt, jo flere point. Maksimalt 1.000 point pr. spørgsmål (×1/×3/×5 afhængigt af runde). Det belønner både viden og sikkerhed.

---

## 3. Hjælp og ikke-hjælp: Livliner som strategisk element

Spilleren har **4 livliner**, der hver kun kan bruges én gang:

### 3.1 50/50
Fjerner 2 forkerte svar, så spilleren står med 2 muligheder. **Altid pålidelig** — en ren hjælp.

### 3.2 Ekstra tid (+15 sekunder)
Tilføjer 15 sekunder til timeren. **Altid pålidelig** — en ren hjælp.

### 3.3 Spørg publikum 📊
Viser en afstemning med procent-fordeling over de 4 svar. **Men publikum er ikke altid klogt:**

| Runde | Adfærd |
|:---:|---|
| **1** (Q1–Q5) | Publikum peger oftest på det rigtige svar (~60% korrekt) |
| **2** (Q6–Q10) | Publikum er usikre — svarene spredes mere jævnt |
| **3** (Q11–Q15) | **Publikum er en fælde:** 80% chance for at et forkert svar "vinder" afstemningen. Kun 20% chance for at det korrekte svar er øverst |

> **Design-intention:** I de lette runder er publikum en hjælp. I den svære runde er det en psykologisk fælde, der tester om spilleren stoler blindt på andre — eller tænker selv.

### 3.4 Ring til en ekspert 📞
Spilleren vælger mellem 5 eksperter med forskellige specialer:

| Ekspert | Speciale |
|---|---|
| **Lars Lagerchef** 🔧 | Lagerindretning, ABC-analyse, Plukkestrategi |
| **Pakke-Pia** 📦 | Pakkefejl, Redskaber, Generelt |
| **Data-Dennis** 📊 | Lagerstyring, Nøgletal, 3PL |
| **Truck-Thomas** 🚛 | Redskaber, Lagerindretning, Svind |
| **Retur-Rita** 📋 | Returer, Svind, Pakkefejl |

**Mekanikken:**
- Hvis spilleren vælger en ekspert, der **matcher** spørgsmålets kategori (rigtig ekspert), er sandsynligheden for et korrekt svar høj.
- Hvis spilleren vælger en ekspert, der **ikke matcher** (forkert ekspert), er sandsynligheden for et korrekt svar lav.
- I runde 3 er selv den rigtige ekspert mere usikker, og den forkerte ekspert giver næsten altid et forkert svar.

| Runde | Rigtig ekspert | Forkert ekspert |
|:---:|:---:|:---:|
| **1–2** (Q1–Q10) | 90% korrekt | 50% korrekt |
| **3** (Q11–Q15) | 60% korrekt | 20% korrekt |

> **Design-intention:** Spilleren skal lære at vælge den rette ekspert til den rette opgave — præcis som i virkeligheden, hvor man spørger den kollega, der har forstand på emnet.

### 3.5 "Er du sikker?" og "Brug en livline?"

Før svaret låses, kan værten (Carsten Rose Lundberg) gribe ind:

- **"Brug en livline?"** — Vises tilfældigt hvis spilleren har ubrugte livliner. Timeren pauses. Spilleren kan vælge en livline eller afvise.
- **"Er du sikker?"** — Vises tilfældigt (50% chance i runde 1–2, 75% i runde 3) med et psykologisk "psyk-billede" og en provokerende tekst. Timeren pauses. Spilleren kan bekræfte eller ændre sit svar.

> **Design-intention:** Disse mekanikker simulerer det pres, man oplever i virkeligheden, når man skal træffe beslutninger under tidspres — og tvinger spilleren til at reflektere over sit valg.

---

## 4. Værten: Carsten Rose Lundberg

Spillet har en gennemgående vært, **Carsten Rose Lundberg**, der optræder visuelt i alle scener med forskellige udtryk (begejstret, tænkende, skuffet, vred, dansende osv.). Værten:

- Byder velkommen med tilfældige citater i Carstens personlige stil
- Kommenterer ved checkpoints (Q5 og Q10) med opmuntring og info om point-multiplikatorer
- Reagerer visuelt på korrekte og forkerte svar
- Stiller "Er du sikker?"-spørgsmål med provokerende psyk-billeder

Værten giver spillet personlighed og gør det til en oplevelse — ikke bare en test.

---

## 5. Lyd og musik

- **12 musiknumre** i runde 1–2 (let, energisk stemning)
- **5 musiknumre** i runde 3 (dramatisk, intens stemning — automatisk skift ved checkpoint 10)
- **1 Game Over-nummer**
- **15+ lydeffekter:** klik, korrekt, forkert, buzzer, drumroll, crowd cheer, crowd groan, explosion, celebration, whoosh, ding, wah-wah, alarm, dramatic buildup, checkpoint riser
- Musik og lydeffekter kan slås til/fra individuelt, og musikvolumen kan justeres

---

## 6. Checkpoints og progression

Ved spørgsmål 5 og 10 vises et **checkpoint** med:
- Badge (niveau 5, 10 eller 15)
- Aktuel score
- Carstens kommentar med info om point-multiplikator (×3 fra Q6, ×5 fra Q11)
- Dramatisk lydeffekt (checkpoint riser)

Ved checkpoint 10 skifter musikken automatisk til den dramatiske finale-playlist.

---

## 7. Sejr og Game Over

### Sejr (12+ korrekte af 15)
- Konfetti-animation
- Crowd cheer + celebration-lyd
- Guldmedalje
- Mulighed for at gemme score med navn og virksomhed

### Game Over (forkert svar)
- Forklaring af det korrekte svar
- Pro Tip (hvis tilgængeligt)
- "Læs mere"-knap der linker til det relevante kapitel i e-bogen
- Fun fact baseret på statistik fra andre spillere
- Mulighed for at gemme score med navn og virksomhed
- CTA til e-bogen

---

## 8. Highscore-system

### 8.1 Global highscore (Firebase)
Alle scores gemmes i en global Firebase Realtime Database. Highscore-listen viser:

- **Top 10** — De 10 bedste spillere
- **Top 100** — De 100 bedste spillere
- **Virksomheder** — Bedste score pr. virksomhed (med antal spillere og antal spil)

Spilleren indtaster navn og virksomhed (valgfrit) efter hvert spil. Virksomhedsnavne kan normaliseres via et alias-system i databasen (fx "SP" → "SmartPack").

### 8.2 Virksomhedskonkurrence
Virksomhedsoversigten gør det muligt at bruge spillet som **intern konkurrence** mellem virksomheder — fx ved events, messer eller i forbindelse med Dansk Erhvervs aktiviteter.

---

## 9. Dataopsamling og analytics

Spillet opsamler **anonymiserede data** via Firebase Realtime Database. Ingen persondata gemmes udover det navn og den virksomhed, spilleren frivilligt indtaster ved highscore.

### 9.1 Spørgsmålsstatistik (pr. spørgsmål)

For hvert af de 252 spørgsmål opsamles:

| Datapunkt | Beskrivelse |
|---|---|
| `totalAnswers` | Antal gange spørgsmålet er besvaret |
| `correctAnswers` | Antal korrekte svar |
| `wrongChoices` | Hvilke forkerte svar der vælges (og hvor ofte) |
| `correctRatio` | Korrektprocent (beregnet) |
| `suggestedLevel` | Foreslået sværhedsgrad baseret på data |

> **Værdi:** Viser præcis hvilke emner der er svære for målgruppen. Hvis fx 70% svarer forkert på spørgsmål om svind, indikerer det et vidensgab i branchen.

### 9.2 Sessionsdata

| Datapunkt | Beskrivelse |
|---|---|
| `totalSessions` | Samlet antal besøg |
| `devices` | Fordeling mobil vs. desktop |
| `timeSlots` | Hvornår spilles der (morgen/eftermiddag/aften/nat) |
| `referrers` | Trafikkilder (LinkedIn, Facebook, e-mail, Google, direkte, andet) |

> **Værdi:** Viser hvornår og hvordan målgruppen engagerer sig. Kan bruges til at time kampagner og vælge kanaler.

### 9.3 Svartider (pr. spørgsmålsnummer)

| Datapunkt | Beskrivelse |
|---|---|
| `totalTime` | Samlet svartid (ms) |
| `count` | Antal svar |
| `correctTime` | Svartid for korrekte svar |
| `correctCount` | Antal korrekte svar |

> **Værdi:** Viser om spillere bruger lang tid (usikre) eller svarer hurtigt (sikre/gætter). Kan afsløre om spørgsmål er forvirrende vs. svære.

### 9.4 "Er du sikker?"-statistik

| Datapunkt | Beskrivelse |
|---|---|
| `shown` | Antal gange "Er du sikker?" er vist |
| `confirmed` | Antal gange spilleren fastholdt sit svar |
| `changed` | Antal gange spilleren ændrede sit svar |
| `confirmedCorrect` | Antal gange fastholdelse var korrekt |
| `changedSavedIt` | Antal gange ændring reddede spilleren |

> **Værdi:** Viser om spillere er for selvsikre (fastholder forkerte svar) eller for usikre (ændrer korrekte svar). Interessant adfærdsdata.

### 9.5 Spilafslutning (pr. dag)

| Datapunkt | Beskrivelse |
|---|---|
| `games` | Antal gennemførte spil |
| `totalScore` | Samlet score (til gennemsnit) |
| `totalCorrect` | Samlet antal korrekte svar |
| `victories` | Antal sejre (12+ korrekte) |
| `scores` | Score-fordeling i buckets (0–999, 1000–2999, 3000–5999, 6000–9999, 10000+) |
| `streaks` | Fordeling af bedste streak (antal korrekte i streg) |
| `dropOff` | Hvilket spørgsmålsnummer spillere taber på |

> **Værdi:** Viser spillets sværhedsgrad over tid, hvor spillere falder fra, og om ændringer i spørgsmål/sværhedsgrad har effekt.

### 9.6 Klik-tracking

| Datapunkt | Beskrivelse |
|---|---|
| `ebook_wrong` | Klik på e-bog-link fra "forkert svar"-skærm |
| `ebook_gameover` | Klik på e-bog-link fra "game over"-skærm |
| `ebook_victory` | Klik på e-bog-link fra "sejr"-skærm |
| `ebook_chapter` | Klik på "Læs mere om svaret" (kapitel-link) |
| `smartpack` | Klik på SmartPack-logo i footer |
| `dansk_erhverv` | Klik på Dansk Erhverv-logo i footer |

> **Værdi:** Måler direkte konvertering fra spil til e-bog og partnersynlighed.

### 9.7 Event-tracking

| Event | Beskrivelse |
|---|---|
| `game_started` | Spil startet |
| `checkpoint_reached` | Checkpoint nået (med breakdown pr. spørgsmålsnummer) |
| `game_over` | Spil tabt (med breakdown pr. spørgsmålsnummer) |
| `game_victory` | Spil vundet |
| `game_abandoned` | Spiller forlod spillet frivilligt |

> **Værdi:** Funnel-analyse fra start til sejr. Viser præcis hvor spillere falder fra.

---

## 10. Fun Facts — Social proof i realtid

Når en spiller svarer korrekt eller forkert, vises en **fun fact** baseret på live-data fra alle andre spillere:

- *"🧠 Kun 28% svarer rigtigt på dette — du er skarp!"*
- *"😬 65% svarer også forkert her, du er ikke alene!"*
- *"📈 47 spillere har svaret på dette spørgsmål"*
- *"🔥 5 i streg! Kun de bedste holder det niveau!"*

> **Design-intention:** Skaber fællesskabsfølelse og gør spillet socialt, selvom man spiller alene.

---

## 11. Teknisk platform

| Komponent | Teknologi |
|---|---|
| Frontend | Vanilla HTML/CSS/JavaScript (ingen frameworks) |
| Backend/database | Firebase Realtime Database |
| Hosting | Statisk hosting (kan deployes hvor som helst) |
| PWA | Service Worker med auto-opdatering |
| Kompatibilitet | Alle moderne browsere, iOS Safari, Android Chrome |
| Installation | PWA — kan installeres på hjemmeskærm (iOS + Android) |
| Offline | Service Worker cacher alle assets |

**Ingen server, ingen login, ingen cookies, ingen persondata-problemer.** Spilleren vælger selv om de vil indtaste navn/virksomhed.

---

## 12. Indhold og kvalitetssikring

- **252 spørgsmål** faktatjekket mod e-bogens indhold
- **Svar-længder balanceret:** Forkerte svar er bevidst gjort lige så lange/plausible som korrekte svar, så man ikke kan gætte ud fra længde (kun 12% af spørgsmål har længste svar = korrekt, ned fra 83%)
- **Forklaringer på alle spørgsmål:** Spilleren lærer altid noget, uanset om svaret er rigtigt eller forkert
- **Pro Tips** på udvalgte spørgsmål med ekstra praktisk viden
- **Kapitel-links:** Ved forkert svar linkes direkte til det relevante kapitel i e-bogen

---

## 13. Branding og partnerskab

- **SmartPack-logo** i footer med klik-tracking
- **Dansk Erhverv-logo** i footer med klik-tracking
- **E-bog CTA** på alle afslutningsskærme (forkert svar, game over, sejr)
- **Værten Carsten Rose Lundberg** som gennemgående brand-ambassadør
- Spillet er designet til at kunne bruges ved **events, messer, workshops og online kampagner**

---

## 14. Mulige anvendelser

| Kontekst | Beskrivelse |
|---|---|
| **Messer/events** | Spil på storskærm eller tablets. Highscore-konkurrence mellem virksomheder |
| **Intern træning** | Virksomheder kan bruge spillet til onboarding af lagermedarbejdere |
| **LinkedIn/SoMe** | Del highscore, udfordr kolleger, skab engagement |
| **Nyhedsbrev** | Link til spillet som interaktivt indhold |
| **Workshops** | Brug spørgsmålsstatistik til at identificere vidensgab og tilpasse undervisning |
| **Brancheanalyse** | Aggregerede data viser hvilke lageremner der er sværest for branchen |

---

## 15. Opsummering

Warehouse Warrior er ikke bare et quiz-spil — det er et **læringsværktøj, et engagement-redskab og en datakilde** i ét:

1. **Læring:** 252 spørgsmål med forklaringer, pro tips og kapitel-links til e-bogen
2. **Engagement:** Gamification med livliner, streaks, point-multiplikatorer og en karismatisk vært
3. **Data:** Detaljeret, anonymiseret indsigt i branchens vidensniveau, adfærd og engagement
4. **Branding:** Synlighed for SmartPack og Dansk Erhverv ved hvert eneste spil
5. **Skalerbarhed:** Gratis, browserbaseret, ingen installation — kan deles med et link

---

*Warehouse Warrior — Test din lagerviden. Lær af dine fejl. Bliv en ægte Warehouse Warrior.* 🏆
