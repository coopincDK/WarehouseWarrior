// Warehouse Warrior - Spørgsmålsdatabase
// Baseret på "Lagerhåndbog for den voksende webshop" af Martin René Mortensen, SmartPack

const questionBank = [
    // NIVEAU 1-3: Grundlæggende (Lagerindretning & Flow)
    {
        level: 1,
        question: "Hvad er det vigtigste princip ved lagerindretning?",
        answers: ["Tænk flow, ikke flot", "Tænk flot, ikke flow", "Tænk pris, ikke plads", "Tænk højde, ikke bredde"],
        correct: 0,
        category: "Lagerindretning",
        explanation: "Det vigtigste er at tænke i flow - hvordan varerne og medarbejderne bevæger sig. Et lager der ser pænt ud, men har dårligt flow, koster dig tid og penge hver eneste dag. Fokusér på at minimere skridt og undgå flaskehalse."
    },
    {
        level: 1,
        question: "Hvor mange zoner bør et godt lager opdeles i?",
        answers: ["2 zoner", "3 zoner", "4 zoner", "5 zoner"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Et godt lager opdeles i 3 zoner: Modtagelse (hvor varer ankommer), Lager (hvor varer opbevares) og Afsendelse (hvor varer pakkes og sendes). Dette skaber et klart, ensrettet flow fra indgang til udgang."
    },
    {
        level: 1,
        question: "Hvad er den første zone i et ensrettet lagerflow?",
        answers: ["Afsendelse", "Modtagelse", "Lager", "Pakkeområde"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Modtagelse er den første zone, hvor varer ankommer og kontrolleres. Herfra går de videre til lager-zonen, og til sidst til afsendelse. Dette ensrettede flow forhindrer kaos og sikrer, at varer ikke krydser hinandens veje."
    },
    {
        level: 2,
        question: "Hvor skal pakkebordet placeres?",
        answers: ["I et hjørne", "Centralt, ikke gemt væk", "Ved indgangen", "Ved udgangen"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pakkebordet er dit vigtigste arbejdssted og skal placeres centralt, ikke gemt væk i et hjørne. Det skal ikke være klemt op ad en væg, så der er plads til at bevæge sig. De mest brugte materialer skal være inden for rækkevidde."
    },
    {
        level: 2,
        question: "Hvad er fordelen ved et mekanisk rullefelt ved pakkebordet?",
        answers: ["Det ser professionelt ud", "Det kan fordoble pakkehastigheden", "Det er billigt", "Det kræver mindre plads"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Et mekanisk rullefelt kan fordoble din pakkehastighed! Når pakken er færdig, skubber du den bare væk på rullefeltet, og den næste ordre kan startes med det samme. Ingen tid spildt på at løfte og flytte pakker."
    },
    {
        level: 3,
        question: "Hvad skal du gøre FØRST, før du begynder at flytte reoler?",
        answers: ["Købe nye reoler", "Gå en tur på lageret", "Ansætte flere folk", "Købe et WMS"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Før du gør NOGET, skal du gå en tur på lageret og observere flowet. Følg en ordre fra start til slut. Hvor går medarbejderne? Hvor er flaskehalsene? Først når du forstår det nuværende flow, kan du forbedre det."
    },
    {
        level: 3,
        question: "Hvorfor skal du adskille ens varer fysisk på lageret?",
        answers: ["Det ser pænere ud", "Det mindsker risikoen for plukfejl", "Det fylder mindre", "Det er lovpligtigt"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Hvis du har to næsten ens produkter (f.eks. samme T-shirt i to farver) ved siden af hinanden, er risikoen for plukfejl enorm. Adskil dem fysisk - gerne med andre produkter imellem. Det reducerer fejl markant."
    },

    // NIVEAU 4-6: ABC-analyse & Plukkestrategi
    {
        level: 4,
        question: "Hvad er hovedprincippet i ABC-analysen?",
        answers: ["Alfabetisk sortering", "80% af salget kommer fra 20% af produkterne", "Alle varer er lige vigtige", "Dyre varer først"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen bygger på Pareto-princippet: 80% af dit salg kommer fra 20% af dine produkter. Disse 20% er dine A-varer. Ved at placere dem tættest på pakkebordet, sparer du enorme mængder tid hver dag."
    },
    {
        level: 4,
        question: "Hvor skal A-varer placeres?",
        answers: ["Bagerst på lageret", "Tættest på pakkebordet", "På øverste hylde", "I kælderen"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "A-varer er dine bestsellere og skal placeres tættest på pakkebordet - gerne inden for armslængde. Hvis du går 10 meter for hver A-vare, og du plukker 100 om dagen, går du 1 km unødvendigt!"
    },
    {
        level: 5,
        question: "Hvor ofte sælges A-varer typisk?",
        answers: ["En gang om måneden", "Hver dag", "En gang om ugen", "Sjældent"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "A-varer er dine daglige bestsellere - de sælges hver eneste dag, ofte flere gange. Derfor er det så vigtigt at de ligger tæt på pakkebordet. B-varer sælges ugentligt, C-varer månedligt eller sjældnere."
    },
    {
        level: 5,
        question: "Hvad er batch-plukning?",
        answers: ["At plukke én ordre ad gangen", "At plukke samme varer til flere ordrer på én tur", "At plukke tilfældigt", "At plukke alfabetisk"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Batch-plukning betyder at du samler ordrer med samme varer og plukker dem på én tur. Hvis 5 kunder har bestilt den samme T-shirt, tager du alle 5 på én gang i stedet for at gå derhen 5 gange. Enorm tidsbesparelse!"
    },
    {
        level: 6,
        question: "Hvor mange ture kan du spare ved at batch-plukke 20 T-shirts i stedet for at plukke én ad gangen?",
        answers: ["5 ture", "10 ture", "19 ture", "20 ture"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Du sparer 19 ture! I stedet for at gå til T-shirt-hylden 20 gange, går du derhen én gang og tager alle 20. Hvis hver tur tager 30 sekunder, har du lige sparet 9,5 minut på én vare. Gang det med alle dine varer!"
    },
    {
        level: 6,
        question: "Hvad er forskellen på single-line og multi-line ordrer?",
        answers: ["Pris", "Antal forskellige varer i ordren", "Leveringstid", "Kundens alder"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Single-line ordrer indeholder kun én type vare (f.eks. 3 ens T-shirts). Multi-line ordrer har flere forskellige varer (T-shirt + bukser + sko). Single-line ordrer er perfekte til batch-plukning!"
    },

    // NIVEAU 7-9: Redskaber & Lagerstyring
    {
        level: 7,
        question: "Hvad er den vigtigste fordel ved plukkevogne?",
        answers: ["De ser professionelle ud", "De kan plukke til flere ordrer på én rute", "De er billige", "De fylder lidt"],
        correct: 1,
        category: "Redskaber",
        explanation: "Plukkevogne med flere hylder/rum lader dig plukke til 5-10 ordrer på én rute gennem lageret. I stedet for at gå samme rute 10 gange, går du den én gang. Det er forskellen mellem 100 meter og 1 kilometer!"
    },
    {
        level: 7,
        question: "Hvor mange plukkevogne bør der minimum være?",
        answers: ["Én til hele lageret", "Én pr. aktiv plukker + 1-2 ekstra", "Ti stykker", "Ingen, de er unødvendige"],
        correct: 1,
        category: "Redskaber",
        explanation: "Hver aktiv plukker skal have sin egen vogn, plus 1-2 ekstra til pakkebordet. Hvis plukkere skal vente på en vogn, spildes der dyr arbejdstid. Plukkevogne er billige - ventetid er dyrt!"
    },
    {
        level: 8,
        question: "Hvad betyder 'min/max' i lagerstyring?",
        answers: ["Minimum pris og maksimum pris", "Minimum lagerniveau og maksimum lagerniveau", "Minimum størrelse og maksimum størrelse", "Minimum ansatte og maksimum ansatte"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Min/max er simple grænser: Når lageret når minimum (f.eks. 10 stk), bestiller du op til maximum (f.eks. 50 stk). Det forhindrer at du løber tør, men også at du overbestænder og binder penge i lager."
    },
    {
        level: 8,
        question: "Hvad er 'den røde streg' metode?",
        answers: ["En advarsel til medarbejdere", "En visuel markering på reolen for minimum lagerniveau", "En farlig zone", "En fejlmarkering"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Den røde streg er en simpel, visuel metode: Marker med rød tape hvor minimum-niveauet er på reolen. Når varerne når den røde streg, er det tid til at genbestille. Alle kan se det - intet system nødvendigt!"
    },
    {
        level: 9,
        question: "Hvor ofte skal A-varer tælles ved lageroptælling?",
        answers: ["En gang om året", "Cirka en gang om måneden", "Hver dag", "Aldrig"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "A-varer bevæger sig hurtigt og skal tælles oftere - cirka månedligt. B-varer kvartalsvis, C-varer årligt. Fokusér optællingen hvor det betyder mest: på de varer der sælges mest."
    },
    {
        level: 9,
        question: "Hvad er vigtigst ved SKU-navngivning?",
        answers: ["At det er langt", "At det er konsistent og unikt", "At det er på engelsk", "At det har mange tal"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "SKU-numre skal være konsistente (samme system for alle varer) og unikke (ingen to varer har samme nummer). Brug et logisk system som KATEGORI-FARVE-STØRRELSE, f.eks. TSHIRT-BLU-M. Det gør det nemt at finde og identificere varer."
    },

    // NIVEAU 10-12: Pakkefejl & Returer
    {
        level: 10,
        question: "Hvad koster en typisk pakkefejl cirka?",
        answers: ["50 kr.", "150 kr.", "350 kr.", "1000 kr."],
        correct: 2,
        category: "Pakkefejl",
        explanation: "En pakkefejl koster cirka 350 kr. når du regner alt med: Ny forsendelse, returfragt, ekstra håndtering, kundeservice-tid, og tabt goodwill. Hvis du laver 10 fejl om ugen, koster det dig 182.000 kr. om året!"
    },
    {
        level: 10,
        question: "Hvad er det vigtigste princip for at undgå pakkefejl?",
        answers: ["Arbejde hurtigere", "Dobbelttjek: én plukker, en anden pakker", "Ansætte flere folk", "Købe dyrere emballage"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Dobbelttjek er den mest effektive metode: Én person plukker, en anden pakker og kontrollerer. Fire øjne ser mere end to. Selv om det virker langsommere, sparer du langt mere tid (og penge) på at undgå fejl."
    },
    {
        level: 11,
        question: "Hvad skal du notere i et fejllog?",
        answers: ["Kun ordrenummer", "Dato, ordrenummer, varenummer, type fejl og mulig årsag", "Kun kundens navn", "Ingenting"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Et godt fejllog indeholder: Dato, ordrenummer, varenummer, type fejl (forkert vare/antal/mangler) og mulig årsag. Med disse data kan du finde mønstre - f.eks. at samme vare fejles ofte, eller fejl sker mest om fredagen."
    },
    {
        level: 11,
        question: "Hvad er formålet med et fejllog?",
        answers: ["At skælde medarbejdere ud", "At finde mønstre og løse årsager", "At opfylde lovkrav", "At imponere kunder"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Fejlloggen er IKKE til at finde syndebukke! Den er til at finde systemfejl: Ligger to ens varer for tæt? Er en etiket uklar? Sker fejl på bestemte tidspunkter? Når du løser årsagen, forsvinder fejlene."
    },
    {
        level: 12,
        question: "Hvor lang tid skal en retur maksimalt ligge ubehandlet?",
        answers: ["En uge", "Inden dagens slutning eller maks. 2 timer", "En måned", "Det er ligegyldigt"],
        correct: 1,
        category: "Returer",
        explanation: "Returer skal håndteres SAMME DAG - helst inden for 2 timer. Hver dag en retur ligger, er det en vare du ikke kan sælge. Hvis 10 returer ligger i en uge, har du bundet 10 varer i 70 dage samlet. Det er tabt salg!"
    },
    {
        level: 12,
        question: "Hvad er de tre beslutninger ved returhåndtering?",
        answers: ["Smid ud, behold, giv væk", "Salgbar igen, udsalg/2. sortering, kassation", "Billig, dyr, gratis", "Rød, gul, grøn"],
        correct: 1,
        category: "Returer",
        explanation: "Ved hver retur skal du beslutte: 1) Salgbar igen (perfekt stand, tilbage på lager), 2) Udsalg/2. sortering (mindre skade, sælg billigere), eller 3) Kassation (for beskadiget). Beslut hurtigt og få varen tilbage i omløb!"
    },

    // NIVEAU 13-15: Svind, Nøgletal & Avanceret
    {
        level: 13,
        question: "Hvad er 'rullende lageroptælling'?",
        answers: ["At tælle alt på én dag", "At tælle små områder løbende, men oftere", "At rulle varerne rundt", "At bruge en robot"],
        correct: 1,
        category: "Svind",
        explanation: "I stedet for at lukke lageret én gang om året og tælle ALT, tæller du små områder løbende. F.eks. tæl A-varer hver måned, B-varer hvert kvartal. Lageret kører videre, og du opdager fejl hurtigere!"
    },
    {
        level: 13,
        question: "Hvilke tre typer svind findes der?",
        answers: ["Stort, mellem, lille", "Proces-svind, naturligt svind, uforklarligt svind", "Internt, eksternt, digitalt", "Rød, gul, grøn"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind = kendte tab (beskadigelse, demo-varer). Naturligt svind = fordampning, udtørring. Uforklarligt svind = forskellen mellem hvad systemet siger og hvad der faktisk er (tyveri, fejlregistrering). Fokusér på det uforklarlige!"
    },
    {
        level: 14,
        question: "Hvad måler pakkefejlsprocent?",
        answers: ["Antal fejl / antal sendte ordrer × 100", "Antal ordrer / antal fejl", "Antal medarbejdere / antal fejl", "Pris / antal fejl"],
        correct: 0,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocent = (Antal fejl / Antal sendte ordrer) × 100. Hvis du sender 1000 ordrer og har 5 fejl, er det 0,5%. Målet er under 1%. Over 2% er alarmerende og koster dig dyrt!"
    },
    {
        level: 14,
        question: "Hvad er formålet med nøgletal på lageret?",
        answers: ["At imponere investorer", "At måle om det går fremad og bruge som kompas", "At straffe medarbejdere", "At opfylde lovkrav"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Nøgletal er dit kompas - de viser om dine ændringer virker. Hvis pakkefejl falder fra 2% til 0,5% efter dobbelttjek, ved du det virker! Mål få ting, men mål dem konsekvent. Hvad måles, forbedres."
    },
    {
        level: 15,
        question: "Hvornår giver det mening at overveje 3PL (outsourcing)?",
        answers: ["Fra dag ét", "Når manuelle processer begynder at knirke og volumen stiger", "Aldrig", "Kun for store virksomheder"],
        correct: 1,
        category: "3PL",
        explanation: "Overvej 3PL når: 1) Volumen vokser hurtigere end du kan skalere, 2) Manuelle processer begynder at fejle, 3) Du bruger mere tid på lager end på forretningsudvikling. 3PL giver dig tid til at fokusere på salg og vækst."
    },
    {
        level: 15,
        question: "Hvad er den vigtigste forudsætning for at migrere til et WMS senere?",
        answers: ["Mange penge", "God datahygiejne fra starten", "Mange medarbejdere", "Et stort lager"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "God datahygiejne fra dag ét er guld værd! Konsistente SKU-numre, korrekte lagerniveauer, strukturerede produktdata. Når du senere skal migrere til et WMS, er det forskellen mellem 2 ugers arbejde og 6 måneders kaos."
    },

    // EKSTRA SPØRGSMÅL til variation (shuffles ind)
    {
        level: 1,
        question: "Hvad skal du spørge dine medarbejdere om for at forbedre lageret?",
        answers: ["Deres løn", "Hvor flaskehalsene er og hvad der irriterer dem", "Deres alder", "Deres uddannelse"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Dine medarbejdere er på lageret hver dag - de ved hvor skoene trykker! Spørg: Hvad irriterer dig? Hvor går du mest? Hvad tager unødvendig tid? De bedste forbedringer kommer ofte fra gulvet, ikke fra kontoret."
    },
    {
        level: 2,
        question: "Hvad skal der være plads til omkring pakkebordet?",
        answers: ["Ingenting", "Plads til at bevæge sig, ikke klemt op ad væg", "Kun én person", "Lagervarer"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pakkebordet skal have plads omkring sig - ikke være klemt op ad en væg. Du skal kunne gå rundt om det, nå materialer fra begge sider, og have plads til plukkevogne. Et klemt pakkebord = langsom pakning."
    },
    {
        level: 3,
        question: "Hvad er fordelen ved at mærke emballage med stregkode og pris?",
        answers: ["Det ser pænt ud", "Pakkemedarbejderen kan registrere rigtigt og se konsekvensen af valg", "Det er lovpligtigt", "Det er gratis"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Når emballage er mærket med stregkode og pris, kan pakkemedarbejderen scanne den rigtige kasse og se hvad den koster. Det motiverer til at vælge den billigste passende kasse - ikke bare den nærmeste store kasse."
    },
    {
        level: 4,
        question: "Hvor skal C-varer placeres?",
        answers: ["Tættest på pakkebordet", "I øjenhøjde", "Bagerst eller på øverste hylde", "I midten"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "C-varer sælges sjældent (månedligt eller mindre), så de kan ligge bagerst eller på øverste hylde. Det er okay at de er svære at nå - du skal alligevel sjældent derhen. Gem den gode plads til A-varer!"
    },
    {
        level: 5,
        question: "Hvad skal du sortere efter i din ABC-analyse?",
        answers: ["Omsætning", "Antal solgte ud fra antal ordrer varen er med på", "Varepris", "Varevægt"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "Sorter efter antal ordrer varen er med på - ikke omsætning! En billig vare der er med i 100 ordrer om dagen, skal ligge tættere end en dyr vare der sælges 2 gange om ugen. Det handler om hvor ofte du skal derhen."
    },
    {
        level: 6,
        question: "Hvad er en plukkekasse?",
        answers: ["En kasse til affald", "En kasse der repræsenterer én ordre ved multi-line pluk", "En kasse til returer", "En kasse til emballage"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer (ordrer med flere forskellige varer) bruger du en plukkekasse pr. ordre. Når du plukker, lægger du varerne i den rigtige kasse. Så kan du plukke til 10 ordrer på én rute uden at blande dem sammen!"
    },
    {
        level: 7,
        question: "Hvad kan et simpelt farvesystem på plukkevogne bruges til?",
        answers: ["Dekoration", "At styre prioritet og hvilke ordrer der haster", "At adskille medarbejdere", "Ingenting"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Et farvesystem gør prioritering synlig: Rød vogn = ekspres (skal sendes i dag), Gul = normal, Grøn = ikke-hastende. Alle kan se hvad der haster, og pakkerne ved hvilke vogne de skal tage først. Simpelt og effektivt!"
    },
    {
        level: 8,
        question: "Hvor ofte skal B-varer tælles ved lageroptælling?",
        answers: ["Hver dag", "Cirka hvert kvartal", "Aldrig", "Hver time"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "B-varer tælles cirka hvert kvartal (hver 3. måned). De bevæger sig jævnligt, men ikke så hurtigt som A-varer. Husk: A-varer månedligt, B-varer kvartalsvis, C-varer årligt. Fokusér optællingen hvor det betyder mest."
    },
    {
        level: 9,
        question: "Hvad skal du undgå i SKU-navngivning?",
        answers: ["Tal", "Specialtegn som ; og , der kan fejltolkes i CSV", "Bogstaver", "Mellemrum"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Undgå specialtegn som semikolon (;) og komma (,) i SKU-numre. De bruges til at adskille felter i CSV-filer, så de kan ødelægge dine data ved import/eksport. Brug bindestreg (-) eller understreg (_) i stedet."
    },
    {
        level: 10,
        question: "Hvad kan dårlig belysning føre til?",
        answers: ["Ingenting", "Mange pakkefejl", "Hurtigere arbejde", "Lavere omkostninger"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Dårlig belysning er en skjult årsag til mange pakkefejl! Når medarbejdere ikke kan se ordentligt, forveksler de ens varer, læser etiketter forkert, og laver fejl. God belysning er en billig investering der betaler sig hurtigt."
    },
    {
        level: 11,
        question: "Hvad er formålet med tavlemøder på lageret?",
        answers: ["At spilde tid", "At tale om fejl, forbedringer og flaskehalse", "At holde ferie", "At sælge mere"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Korte daglige tavlemøder (5-10 min) holder alle opdateret: Hvilke fejl skete i går? Hvad kan vi gøre bedre? Hvad haster i dag? Det skaber fælles ansvar og løser problemer før de bliver store. Konsistens er nøglen!"
    },
    {
        level: 12,
        question: "Hvad skal en returlog indeholde?",
        answers: ["Kun kundens navn", "Dato, ordrenr, varenr, antal, type retur og årsag", "Kun dato", "Ingenting"],
        correct: 1,
        category: "Returer",
        explanation: "En god returlog indeholder: Dato, ordrenummer, varenummer, antal, type retur (fortrydelse/defekt/forkert vare) og årsag. Med disse data kan du finde mønstre - f.eks. at samme vare returneres ofte pga. størrelse."
    },
    {
        level: 13,
        question: "Hvad er proces-svind?",
        answers: ["Tyveri", "Fejl i hverdagen som fejltælling eller manglende registrering", "Naturlig nedbrydning", "Planlagt svind"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind er fejl i hverdagen: Glemmer at registrere en vare som kasseret, fejltæller ved optælling, glemmer at opdatere systemet. Det er ikke tyveri - det er menneskelige fejl. Løsningen er bedre processer og checklister."
    },
    {
        level: 14,
        question: "Hvad måler 'pluk pr. time'?",
        answers: ["Hvor mange pauser der holdes", "Om ændringer i layout og strategi gør lageret mere effektivt", "Hvor mange fejl der laves", "Hvor mange kunder der ringer"],
        correct: 1,
        category: "Nøgletal",
        explanation: "'Pluk pr. time' viser hvor mange ordrelinjer eller varer der plukkes i timen. Hvis du flytter A-varer tættere på pakkebordet og tallet stiger fra 40 til 60 pluk/time, ved du at ændringen virker! Det er dit effektivitets-kompas."
    },
    {
        level: 15,
        question: "Hvad er den største risiko ved at vokse for hurtigt uden styr på lageret?",
        answers: ["For mange kunder", "Tab af overblik, kvalitet og økonomi", "For meget plads", "For mange medarbejdere"],
        correct: 1,
        category: "Generelt",
        explanation: "Hvis du vokser for hurtigt uden styr på lageret, mister du overblikket. Pakkefejl stiger, returer eksploderer, svind vokser, og du binder penge i forkert lager. Mange webshops er gået konkurs fordi de voksede hurtigere end deres systemer kunne følge med."
    },
    {
        level: 3,
        question: "Hvad er formålet med en separat zone til varer, der skal direkte videre til kunden?",
        answers: ["At spare tid og plads på varer der ikke skal lagres", "At gøre lageret pænere", "At skjule varer", "Det er lovpligtigt"],
        correct: 0,
        category: "Lagerindretning",
        explanation: "Nogle varer skal direkte videre til kunden uden at blive lagret (f.eks. dropshipping eller cross-docking). Giv dem en separat zone tæt på afsendelse, så de ikke fylder på lageret og kan sendes hurtigt."
    },
    {
        level: 4,
        question: "Hvor mange procent af sortimentet udgør typisk A-varer?",
        answers: ["50%", "20%", "80%", "10%"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "A-varer udgør typisk 20% af dit sortiment, men står for 80% af salget (Pareto-princippet). Hvis du har 1000 produkter, er det kun 200 der virkelig betyder noget. Fokusér din energi på de 20%!"
    },
    {
        level: 6,
        question: "Hvad er eksemplet fra virkeligheden på batch-plukning under Black Friday?",
        answers: ["10 ordrer på 1 time", "675 single-line ordrer på lidt over 2 timer med 2 personer", "1000 ordrer på en dag", "50 ordrer på 10 minutter"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Et virkeligt eksempel fra Black Friday: 2 personer plukkede 675 single-line ordrer på lidt over 2 timer ved at batch-plukke! Det er over 300 ordrer i timen. Uden batch-plukning ville det have taget hele dagen. Batch-plukning er superkraft!"
    },
    {
        level: 7,
        question: "Hvor lang tid tager det typisk for en plukkevogn til 3.000 kr. at tjene sig hjem, hvis den sparer 10 min/dag?",
        answers: ["1 uge", "3-4 måneder", "2 år", "Den tjener sig aldrig hjem"],
        correct: 1,
        category: "Redskaber",
        explanation: "Hvis en plukkevogn til 3.000 kr. sparer 10 minutter om dagen, og en medarbejder koster 250 kr/time, sparer du cirka 42 kr/dag. Det er 1.000 kr/måned. Vognen har tjent sig hjem på 3-4 måneder - og fortsætter med at spare penge!"
    },
    {
        level: 8,
        question: "Hvad skal der stå på en post-it ved den sidste enhed af en A-vare?",
        answers: ["Ingenting", "'Bestil mere' sammen med bestillingsnummer", "Kundens navn", "Prisen"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "En simpel post-it på den sidste enhed med 'BESTIL MERE' og bestillingsnummer sikrer, at I aldrig løber tør for A-varer. Når post-it'en dukker op, ved du det er tid til at genbestille. Simpelt og effektivt!"
    },
    {
        level: 9,
        question: "Hvad er formålet med én primær placering pr. SKU?",
        answers: ["At spare penge", "At undgå at samme vare ligger flere steder (hvis ikke du bruger scanner)", "At fylde mere", "Det er lovpligtigt"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Uden scanner skal hver vare kun have én fast placering. Hvis samme T-shirt ligger 3 steder, hvordan ved plukkeren hvor den skal hentes? Det skaber forvirring og fejl. Én vare = ét sted (medmindre du har WMS med multi-location)."
    },
    {
        level: 10,
        question: "Hvor mange pakkefejl om ugen koster 180.000 kr. om året (ved 350 kr. pr. fejl)?",
        answers: ["5 fejl", "10 fejl", "20 fejl", "50 fejl"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "10 fejl om ugen à 350 kr. = 3.500 kr/uge = 182.000 kr/år! Det er en halv medarbejders løn spildt på fejl. Hvis du kan reducere til 2 fejl/uge ved dobbelttjek, sparer du 145.000 kr/år. Pakkefejl er DYRE!"
    },
    {
        level: 11,
        question: "Hvad skal den person, der pakker, altid tjekke?",
        answers: ["Kun vægten", "At vare, størrelse, farve, antal og label matcher ordren", "Kun prisen", "Ingenting"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Pakkeren skal tjekke ALT: Rigtig vare? Rigtig størrelse? Rigtig farve? Rigtigt antal? Matcher label ordren? Dette dobbelttjek fanger 90% af fejlene før pakken forlader lageret. Fire øjne ser mere end to!"
    },
    {
        level: 12,
        question: "Hvad er de tre kategorier ved returvurdering?",
        answers: ["Billig, mellem, dyr", "Salgbar igen, salgbar som udsalg/2. sortering, kassation", "Rød, gul, grøn", "Stor, mellem, lille"],
        correct: 1,
        category: "Returer",
        explanation: "Ved hver retur: 1) Salgbar igen = perfekt stand, fuld pris, tilbage på lager. 2) Udsalg/2. sortering = mindre skade, reduceret pris. 3) Kassation = for beskadiget til salg. Beslut hurtigt og få varen tilbage i omløb!"
    },
    {
        level: 13,
        question: "Hvad skal du gøre, når noget går i stykker på lageret?",
        answers: ["Smide det ud med det samme", "Lægge det i 'Defekt/kan ikke sælges' kasse og registrere som kasseret", "Ignorere det", "Sælge det alligevel"],
        correct: 1,
        category: "Svind",
        explanation: "Når noget går i stykker: 1) Læg det i en 'Defekt' kasse. 2) Registrer det som kasseret i systemet SAMME DAG. 3) Opdater lagerbeholdningen. Hvis du ikke registrerer det, viser systemet varer du ikke har - det skaber kaos!"
    },
    {
        level: 14,
        question: "Hvad er returprocent?",
        answers: ["Antal returordrer / antal sendte ordrer × 100", "Antal ordrer / antal returer", "Pris / antal returer", "Antal medarbejdere / antal returer"],
        correct: 0,
        category: "Nøgletal",
        explanation: "Returprocent = (Antal returordrer / Antal sendte ordrer) × 100. Hvis du sender 1000 ordrer og får 50 returer, er returprocenten 5%. Branchen ligger typisk på 5-15%. Over 20% er et rødt flag - noget er galt med produkter, beskrivelser eller kvalitet."
    },
    {
        level: 15,
        question: "Hvad er det vigtigste fundament, som alt andet bygger på?",
        answers: ["Dyre systemer", "Det basale: flow, ABC, pluk, fejllog, datahygiejne", "Mange medarbejdere", "Et stort lager"],
        correct: 1,
        category: "Generelt",
        explanation: "Det vigtigste er det basale: Godt flow, ABC-analyse, smart plukkestrategi, fejllog og god datahygiejne. Disse fundamenter koster næsten ingenting, men skaber enorm værdi. Dyre systemer hjælper ikke hvis fundamentet er dårligt. Start med det simple!"
    },
    {
        level: 5,
        question: "Hvad er forskellen på at plukke 20 gange til samme reol vs. én gang?",
        answers: ["Ingen forskel", "Du sparer over en halv kilometer gang på én dag på én vare", "Du sparer 10 meter", "Du sparer 5 minutter"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Hvis en reol er 30 meter væk, og du går derhen 20 gange (tur-retur = 60m × 20 = 1.200m), har du gået 1,2 km! Med batch-plukning går du derhen én gang (60m). Du sparer 1.140 meter - over en kilometer - på én vare på én dag!"
    },
    {
        level: 11,
        question: "Hvad kan en webshop reducere pakkefejl til ved at indføre dobbelttjek og fejllog?",
        answers: ["Fra 10% til 5%", "Fra 3% til under 1%", "Fra 50% til 40%", "Det kan ikke reduceres"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Mange webshops starter med 3% pakkefejl. Ved at indføre dobbelttjek (plukkeren plukker, pakkeren tjekker) og føre fejllog, kan du reducere til under 1%. Det er en 70% reduktion! Og det koster næsten ingenting - kun disciplin."
    },
    {
        level: 12,
        question: "Hvad skal du bruge returloggen til?",
        answers: ["Ingenting", "At spotte mønstre og forbedre produkttekster, størrelsesguider og kvalitet", "At straffe kunder", "At gemme væk"],
        correct: 1,
        category: "Returer",
        explanation: "Returloggen er en guldgrube! Hvis 30% af returer på en T-shirt er 'for lille', skal du opdatere størrelsesguiden. Hvis samme produkt returneres for 'dårlig kvalitet', skal du skifte leverandør. Brug data til at forbedre!"
    },
    {
        level: 14,
        question: "Hvor mange nøgletal skal du starte med?",
        answers: ["10-15 stykker", "2-3 nøgletal du faktisk bruger", "50 stykker", "Ingen"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Start med 2-3 nøgletal du faktisk bruger: F.eks. 'pluk pr. time', 'pakkefejl pr. uge' og 'returprocent'. Hvis du laver 50 nøgletal, bruger du ingen af dem. Bedre at have få nøgletal du tjekker hver dag end mange du ignorerer."
    },

    // === NYE SPØRGSMÅL FRA E-BOGEN ===
    {
        level: 4,
        question: "Hvad er det vigtigste formål med ABC-analysen på et lille lager?",
        answers: ["At få de dyreste varer tættest på pakkebordet", "At placere varerne efter leverandør", "At reducere unødige skridt ved at have de mest solgte varer tættest på flowet", "At få alle varer til at stå alfabetisk"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "ABC-analysen handler om at minimere unødige skridt. De varer der sælges mest (A-varer) skal ligge tættest på pakkebordet. Det handler ikke om pris, men om frekvens - hvor ofte du skal hen til varen."
    },
    {
        level: 4,
        question: "Hvilken type varer hører typisk til i A-zonen?",
        answers: ["Varer der næsten aldrig sælges", "Varer der sælges dagligt eller meget hyppigt", "Varer med høj stykpris men lav omsætning", "Varer der kun bruges til kampagner én gang om året"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "A-varer er dine daglige bestsellere - de sælges hver dag, ofte flere gange. Det er dem du plukker oftest, og derfor skal de ligge tættest på pakkebordet. Høj stykpris er irrelevant - det handler om plukfrekvens."
    },
    {
        level: 1,
        question: "Hvorfor giver det sjældent mening at indrette lageret som en butik?",
        answers: ["Fordi kunderne ikke må komme på lageret", "Fordi det gør det sværere at lave flotte reoler", "Fordi butikstankegangen fokuserer på udtryk frem for plukflow", "Fordi et lager altid skal være helt tomt"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "En butik er designet til at kunder skal browse og opdage varer. Et lager er designet til effektivitet - hurtigst muligt fra ordre til pakke. Hvis du indretter lageret som en butik, prioriterer du udseende over flow, og det koster tid hver eneste dag."
    },
    {
        level: 2,
        question: "Hvad er et typisk tegn på, at dit lager er vokset lag på lag uden plan?",
        answers: ["Alle reoler står i perfekte rækker", "Pakkebordet står tilfældigt i et hjørne og reoler er sat op der hvor der lige var plads", "Der er for meget lys", "Der er for få varer på hylderne"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Når lageret vokser organisk uden plan, ender pakkebordet gemt i et hjørne og reoler står hvor der tilfældigvis var plads. Det skaber krydsende ruter, unødige skridt og flaskehalse. Løsningen er at stoppe op og redesigne flowet."
    },
    {
        level: 3,
        question: "Hvad er formålet med at gå en fysisk tur på lageret og følge vareflowet?",
        answers: ["At kontrollere om medarbejderne går hurtigt nok", "At finde steder hvor du kan sætte flere reoler", "At opdage flaskehalse, unødige skridt og steder hvor folk krydser hinanden", "At kontrollere hvor ofte medarbejderne kigger på mobilen"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "En fysisk tur på lageret afslører ting du ikke ser fra kontoret: Hvor krydser medarbejdere hinanden? Hvor er der kø? Hvilke ruter tager de? Følg en ordre fra modtagelse til afsendelse og noter alle stop og omveje."
    },
    {
        level: 1,
        question: "Hvad kendetegner et godt flow på lageret ifølge guiden?",
        answers: ["At alle går forskellige ruter hver dag", "At varemodtagelse, lager og afsendelse hænger sammen i en nogenlunde ensrettet retning", "At alle varer står tæt på døren", "At pakkebordet står længst væk fra lageret"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Et godt flow er ensrettet: Varer kommer ind i modtagelse, flyttes til lager, plukkes og pakkes, og sendes ud. Ingen krydsende ruter, ingen tilbageløb. Tænk på det som en flod der strømmer i én retning."
    },
    {
        level: 2,
        question: "Hvad er hovedpointen i at dele lageret op i modtagelse, lager og afsendelse?",
        answers: ["At gøre det lettere at tælle reoler", "At sikre tydelige zoner og bedre flow i hverdagen", "At kunne låse medarbejdere inde i hver sin zone", "At gøre lageret mere dekorativt"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Tydelige zoner skaber orden og flow. Når alle ved at modtagelse er HER, lager er DER og afsendelse er DEROVRE, undgår du kaos. Varer bevæger sig i én retning, og medarbejdere ved præcis hvor de skal hen."
    },
    {
        level: 3,
        question: "Hvorfor bør ens varer adskilles fysisk – især varer der ligner hinanden?",
        answers: ["For at fylde reolerne helt ud", "For at det ser pænere ud på billeder", "For at mindske risikoen for plukfejl på næsten identiske produkter", "For at undgå at skulle bruge labels"],
        correct: 2,
        category: "Fejlreduktion",
        explanation: "Hvis to næsten identiske produkter (fx samme T-shirt i sort og navy) ligger ved siden af hinanden, er risikoen for forveksling enorm. Adskil dem fysisk med andre produkter imellem, så plukkeren ikke tager den forkerte."
    },
    {
        level: 5,
        question: "Hvad er den største ulempe ved at plukke én ordre ad gangen?",
        answers: ["Det kræver for mange labels", "Det skaber mange unødige ture på lageret og lavere effektivitet", "Det er svært at lære op", "Det kræver særligt IT-udstyr"],
        correct: 1,
        category: "Pluk",
        explanation: "Når du plukker én ordre ad gangen, går du den samme rute igen og igen. Hvis 10 ordrer har samme vare, går du til den reol 10 gange. Med batch-plukning går du derhen én gang og tager alle 10. Enorm forskel i effektivitet!"
    },
    {
        level: 5,
        question: "Hvad er hovedideen i batch-plukning?",
        answers: ["At plukke én varelinje pr. dag", "At plukke alle varer alfabetisk", "At plukke varer til mange ordrer på én rute og først splitte dem ved pakkebordet", "At lade kunderne plukke deres egne varer"],
        correct: 2,
        category: "Pluk",
        explanation: "Batch-plukning samler flere ordrer og plukker dem på én rute. Du sorterer først ved pakkebordet. I stedet for 20 ture til samme reol, går du derhen én gang. Det er den største tidsbesparelse du kan lave på et lille lager."
    },
    {
        level: 6,
        question: "Hvad kendetegner en single-line ordre?",
        answers: ["En ordre med mange varelinjer", "En ordre med kun én type vare", "En ordre der sendes i flere kolli", "En ordre kun til B2B-kunder"],
        correct: 1,
        category: "Pluk",
        explanation: "En single-line ordre indeholder kun én type vare (fx 2 stk. af samme T-shirt). De er perfekte til batch-plukning, fordi du kan samle alle single-line ordrer med samme vare og plukke dem på én gang."
    },
    {
        level: 6,
        question: "Hvorfor giver plukkekasser især mening til multi-line ordrer?",
        answers: ["Fordi kasserne fylder mest muligt på lageret", "Fordi du kan farvekode kasserne", "Fordi hver kasse kan repræsentere én ordre, mens du går én samlet rute", "Fordi kasser er billigere end reoler"],
        correct: 2,
        category: "Pluk",
        explanation: "Ved multi-line ordrer har hver ordre flere forskellige varer. Med en plukkekasse pr. ordre kan du gå én samlet rute og lægge varerne i den rigtige kasse undervejs. Så blander du aldrig ordrerne sammen."
    },
    {
        level: 7,
        question: "Hvad er det typiske problem i et lager uden nok plukkevogne?",
        answers: ["Der bliver for stille på lageret", "Alle plukker for hurtigt", "Der opstår kø og ventetid fordi folk mangler udstyr til at tage flere ordrer ad gangen", "Vognene står i vejen for nødudgangene"],
        correct: 2,
        category: "Udstyr",
        explanation: "Hvis der kun er én plukkevogn til tre plukkere, venter to af dem altid. Ventetid er spildt arbejdstid. Hver aktiv plukker skal have sin egen vogn plus 1-2 ekstra. Plukkevogne er billige - ventetid er dyrt!"
    },
    {
        level: 7,
        question: "Hvorfor kan en plukkevogn være en god investering?",
        answers: ["Den gør lageret pænere", "Den gør det muligt at samle flere ordrer på én rute og mindsker tunge løft", "Den gør det lettere at holde pauser", "Den mindsker behovet for emballage"],
        correct: 1,
        category: "Udstyr",
        explanation: "En plukkevogn med flere rum lader dig plukke til 5-10 ordrer på én rute. Plus den mindsker tunge løft fordi du ikke bærer alt i hænderne. En vogn til 3.000 kr. kan spare 10+ minutter om dagen - tjent hjem på få måneder."
    },
    {
        level: 8,
        question: "Hvad er pointen med min/max-metoden på et lille lager?",
        answers: ["At købe så lidt ind som muligt", "At sikre at du aldrig har mere end én enhed på lager", "At have et visuelt styringsprincip for hvornår du skal bestille mere af dine A-varer", "At undgå at lave indkøbsaftaler"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Min/max er simpelt: Sæt et minimum (bestil når du rammer dette) og et maximum (bestil op til dette). Det forhindrer at du løber tør, men også at du overbestiller. Perfekt til små lagre uden avancerede systemer."
    },
    {
        level: 8,
        question: "Hvordan bruges den røde streg på reolen i min/max-opsætningen?",
        answers: ["Som dekoration på lageret", "Som markering af hvor højt kasserne må stables", "Som visuelt niveau for hvornår en vare er under minimum og skal på bestillingslisten", "Som markering af hvilke varer der er på tilbud"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Den røde streg er en simpel visuel markering på reolen. Når varerne når ned til stregen, er det tid til at genbestille. Alle kan se det - ingen systemer nødvendige. Det er lavpraktisk lagerstyring der virker!"
    },
    {
        level: 9,
        question: "Hvad er den vigtigste datadisciplin i et lille setup uden WMS?",
        answers: ["At have et meget avanceret ERP-system", "At alle varer har unikke og konsistente SKU'er og kun én primær placering", "At alle varer har samme varenummer", "At alle varer lagres efter farve"],
        correct: 1,
        category: "Datahygiejne",
        explanation: "Uden WMS er datadisciplin alt. Hver vare skal have et unikt SKU-nummer og kun én fast placering. Hvis samme vare har tre forskellige numre eller ligger tre steder, opstår der kaos. God datahygiejne er fundamentet for alt andet."
    },
    {
        level: 9,
        question: "Hvad er en typisk rytme for optælling i et lille setup uden system?",
        answers: ["Alt tælles dagligt", "A-varer månedligt, B-varer kvartalsvist og resten cirka én gang om året", "Kun C-varer tælles", "Der tælles kun ved årsskifte"],
        correct: 1,
        category: "Lageroptælling",
        explanation: "Fokusér optællingen hvor det betyder mest: A-varer bevæger sig hurtigt og skal tælles månedligt. B-varer kvartalsvist. C-varer årligt. Det er rullende optælling - du lukker aldrig lageret, men holder styr på de vigtigste varer."
    },
    {
        level: 10,
        question: "Hvorfor kaldes pakkefejl i guiden for 'den stille dræber'?",
        answers: ["Fordi de aldrig opdages", "Fordi de typisk koster meget pr. fejl uden at man lægger mærke til det i hverdagen", "Fordi det handler om støjniveau på lageret", "Fordi kunder aldrig klager over dem"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Pakkefejl er 'den stille dræber' fordi de sker løbende uden at nogen reagerer. Hver fejl koster ca. 350 kr., men det mærkes ikke i hverdagen. Først når du regner det sammen - 10 fejl/uge = 182.000 kr/år - ser du hvor dyrt det er."
    },
    {
        level: 10,
        question: "Hvad er idéen med dobbelttjek mellem pluk og pak?",
        answers: ["At gøre processen langsommere", "At give medarbejderne mere papirarbejde", "At én plukker og en anden kontrollerer og pakker for at fange fejl før afsendelse", "At kunne bruge flere printere"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Dobbelttjek er den mest effektive fejlreduktion: Én person plukker, en anden kontrollerer og pakker. Fire øjne ser mere end to. Det virker langsommere, men du sparer enormt på færre fejl, returer og utilfredse kunder."
    },
    {
        level: 11,
        question: "Hvad er formålet med en fejllog?",
        answers: ["At kunne placere skyld", "At have noget til revision", "At finde mønstre i fejltyper, varer og tidspunkter for at kunne løse årsagerne", "At måle hvem der laver flest fejl"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Fejlloggen er IKKE til at finde syndebukke! Den er til at finde systemfejl og mønstre: Sker fejl mest om fredagen? Er det altid samme vare? Ligger to ens varer for tæt? Når du løser årsagen, forsvinder fejlene."
    },
    {
        level: 11,
        question: "Hvad er hovedformålet med små standarder som 'sådan plukker vi' og 'sådan pakker vi'?",
        answers: ["At begrænse medarbejdernes frihed", "At gøre oplæring og drift mere ensartet og reducere fejl", "At kunne sende manualer til kunderne", "At gøre lageret mere bureaukratisk"],
        correct: 1,
        category: "Standarder",
        explanation: "Standarder sikrer at alle gør tingene ens - uanset om det er en erfaren medarbejder eller en ny vikar. Det reducerer fejl, gør oplæring hurtigere og sikrer ensartet kvalitet. Det handler ikke om kontrol, men om konsistens."
    },
    {
        level: 11,
        question: "Hvorfor er en kort tjekliste ved pakkebordet effektiv?",
        answers: ["Fordi den erstatter al oplæring", "Fordi den gør det sværere at lave fejl i de vigtigste trin uden at gøre arbejdet langsommere", "Fordi den pynter på væggen", "Fordi den gør det lettere at gemme fejl"],
        correct: 1,
        category: "Standarder",
        explanation: "En kort tjekliste (5-7 punkter) ved pakkebordet fungerer som et sikkerhedsnet. Selv erfarne medarbejdere glemmer ting under pres. Tjeklisten fanger de vigtigste fejl uden at bremse tempoet. Piloter bruger dem - det bør du også."
    },
    {
        level: 13,
        question: "Hvad er pointen med korte, faste tavlemøder på 10-15 minutter?",
        answers: ["At holde lange strategiske oplæg", "At diskutere kampagner", "At dele fejl, forbedringsforslag og flaskehalse og vælge én konkret forbedring til næste uge", "At måle hvem der har været mest syg"],
        correct: 2,
        category: "Forbedring",
        explanation: "Korte tavlemøder skaber en kultur for løbende forbedring. Del gårsdagens fejl, diskutér flaskehalse, og vælg ÉN konkret ting at forbedre til næste uge. Ikke 10 ting - én ting. Konsistens slår ambition."
    },
    {
        level: 10,
        question: "Hvorfor kan dårlig belysning være en direkte kilde til pakkefejl?",
        answers: ["Fordi det gør medarbejderne trætte", "Fordi labels bliver mørkere", "Fordi det er sværere at se små forskelle på produkter og størrelser", "Fordi scannere ikke virker i lys"],
        correct: 2,
        category: "Arbejdsmiljø",
        explanation: "Dårlig belysning gør det svært at skelne mellem næsten ens produkter - fx navy vs. sort, str. M vs. L. Det er en billig fejlkilde at løse: God LED-belysning over pluk- og pakkeområder reducerer fejl markant."
    },
    {
        level: 12,
        question: "Hvad er hovedmålet med en enkel returproces?",
        answers: ["At gøre det svært for kunden at returnere", "At få returer til at fylde mest muligt", "At sikre fast zone, fast flow og systematisk opdatering af lager og økonomi", "At undgå at give penge retur"],
        correct: 2,
        category: "Returer",
        explanation: "En god returproces har fast zone (hvor returer lander), fast flow (modtag → vurder → beslut → opdater) og systematisk opdatering af lager og økonomi. Uden dette ender returer i en bunke der aldrig bliver behandlet."
    },
    {
        level: 12,
        question: "Hvad er en returlog god til?",
        answers: ["At gemme kundernes adresser", "At logge fejl i bogføringen", "At se mønstre i hvilke produkter, årsager og leverandører der giver flest returer", "At måle hvor hurtigt PostNord leverer"],
        correct: 2,
        category: "Returer",
        explanation: "Returloggen afslører mønstre: Returneres samme produkt ofte? Er det altid 'for lille'? Er det altid fra samme leverandør? Med disse data kan du forbedre produkttekster, størrelsesguider og leverandørvalg."
    },
    {
        level: 12,
        question: "Hvad er guidens anbefaling ift. hvor længe en retur må ligge ubehandlet?",
        answers: ["Der er ingen grænse", "Mindst 14 dage", "Så kort som muligt – fx maks. 2 timer eller samme dag", "Indtil kunden ringer"],
        correct: 2,
        category: "Returer",
        explanation: "Returer skal behandles SAMME DAG - helst inden for 2 timer. Hver dag en retur ligger, er det en vare du ikke kan sælge, en kunde der venter, og rod der hober sig op. Hurtig behandling = bedre økonomi og gladere kunder."
    },
    {
        level: 13,
        question: "Hvad er forskellen på proces-svind og naturligt svind?",
        answers: ["Proces-svind handler om fejl i arbejdsgange, naturligt svind om fx ødelagte varer og samples", "Der er ingen forskel", "Proces-svind er lovligt, naturligt svind er ulovligt", "Naturligt svind handler kun om tyveri"],
        correct: 0,
        category: "Svind",
        explanation: "Proces-svind er fejl i arbejdsgange: fejltælling, manglende registrering, forkert modtagelse. Naturligt svind er kendte tab: beskadigede varer, demo-produkter, samples. Begge skal registreres, men løsningerne er forskellige."
    },
    {
        level: 13,
        question: "Hvad er formålet med rullende lageroptælling?",
        answers: ["At undgå at tælle lageret", "At samle al optælling på én lang nat én gang om året", "At fordele optællingen over året og fokusere mest på de vigtigste varer", "At tælle kun C-varer"],
        correct: 2,
        category: "Lageroptælling",
        explanation: "Rullende optælling fordeler arbejdet over hele året: A-varer månedligt, B-varer kvartalsvist, C-varer årligt. Du lukker aldrig lageret, opdager fejl hurtigere, og fokuserer energien på de varer der betyder mest."
    },
    {
        level: 13,
        question: "Hvorfor er det vigtigt at gøre kasserede varer synlige i stedet for usynlige?",
        answers: ["Så de kan sælges som nye", "Så de ikke forstyrrer medarbejderne", "Så svind bliver noget, du aktivt tager stilling til og kan reducere", "Så der kommer mere rod på lageret"],
        correct: 2,
        category: "Svind",
        explanation: "Hvis kasserede varer bare forsvinder stille, ved du aldrig hvor meget du taber. Gør dem synlige med en 'Defekt'-kasse og registrer dem. Når svind er synligt, kan du måle det, forstå det og reducere det."
    },
    {
        level: 14,
        question: "Hvilket nøgletal er særligt godt som 'temperaturmåling' på kvaliteten i pakkeriet?",
        answers: ["Omsætning pr. dag", "Antal reoler på lageret", "Pakkefejlsprocent", "Antal medarbejdere"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocenten er dit vigtigste kvalitetsnøgletal. Den viser direkte om dine processer virker. Under 1% er godt, over 2% er alarmerende. Følg den ugentligt og reager når den stiger."
    },
    {
        level: 14,
        question: "Hvordan beregner du pakkefejlsprocenten?",
        answers: ["Fejl i kroner / omsætning", "Antal fejl / antal varer", "Antal ordrer med fejl / antal sendte ordrer × 100", "Antal returer / antal kunder × 100"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocent = (Antal ordrer med fejl / Antal sendte ordrer) × 100. Hvis du sender 500 ordrer og 3 har fejl, er det 0,6%. Simpelt at beregne, men kraftfuldt at følge over tid."
    },
    {
        level: 14,
        question: "Hvilket nøgletal kan hjælpe dig med at se, om layout og plukkestrategi virker?",
        answers: ["Likes på sociale medier", "Antal nye produkter pr. måned", "Plukkede ordrelinjer eller ordrer pr. time", "Antal leverandører"],
        correct: 2,
        category: "Nøgletal",
        explanation: "'Pluk pr. time' viser direkte om dine layout-ændringer virker. Hvis du flytter A-varer tættere på pakkebordet og tallet stiger fra 40 til 60, ved du det virker. Det er dit effektivitets-kompas."
    },
    {
        level: 15,
        question: "Hvad er 'bundne lagerkroner i langsomme varer' et udtryk for?",
        answers: ["Hvor pænt lageret ser ud", "Hvor meget kapital der står stille i varer, der ikke sælger", "Hvor stor kredit du har hos leverandører", "Hvor meget der er solgt på udsalg"],
        correct: 1,
        category: "Økonomi",
        explanation: "Bundne lagerkroner er penge der står stille. Hvis du har C-varer for 200.000 kr. der ikke har solgt i 90 dage, er det 200.000 kr. du ikke kan bruge på A-varer, marketing eller vækst. Død kapital er en stille dræber."
    },
    {
        level: 15,
        question: "Hvad er en typisk lavpraktisk måde at finde bundet kapital i C-varer?",
        answers: ["Tælle alle varer fysisk", "Gætte ud fra reolpladsen", "Trække en liste over varer uden salg de sidste 90 dage og summere kostprisen", "Spørge kunderne"],
        correct: 2,
        category: "Økonomi",
        explanation: "Træk en liste fra dit shopsystem over varer uden salg de sidste 90 dage. Summer kostprisen. Det tal er din bundne kapital i langsomme varer. Ofte er det overraskende højt - og det er penge du kan frigøre."
    },
    {
        level: 8,
        question: "Hvorfor kan emballage være en skjult driver af fragtomkostninger?",
        answers: ["Fordi papkasser er dyre", "Fordi for stor emballage giver højere volumen og dermed højere fragtpris", "Fordi kunder ikke kan lide små kasser", "Fordi labels ikke passer"],
        correct: 1,
        category: "Fragt",
        explanation: "Fragtpriser beregnes ofte på volumenvægt - ikke kun faktisk vægt. Hvis du sender en lille vare i en stor kasse, betaler du fragt for luft! 2-4 passende kassestørrelser kan spare tusindvis af kroner om måneden."
    },
    {
        level: 8,
        question: "Hvad er en enkel måde at skære spild væk i emballagen?",
        answers: ["Bruge så store kasser som muligt", "Bruge kun én kassestørrelse", "Måle de mest solgte produkter og vælge 2-4 passende kassestørrelser/kuverter", "Bruge dobbelt så meget fyld"],
        correct: 2,
        category: "Emballage",
        explanation: "Mål dine 10-20 mest solgte produkter og find 2-4 kassestørrelser der passer. Det reducerer fyld, sænker volumenvægt og sparer fragt. Én kassestørrelse er for lidt (for meget luft), 10 er for mange (for komplekst)."
    },
    {
        level: 9,
        question: "Hvilken rolle spiller fragtportaler for en mindre webshop?",
        answers: ["De øger altid prisen", "De gør det muligt at ride med på andres volumen og få bedre priser og produkter", "De sænker kvaliteten", "De er kun til B2B"],
        correct: 1,
        category: "Fragt",
        explanation: "Fragtportaler samler mange små webshops og forhandler fælles priser. Du får adgang til priser og produkter du aldrig kunne forhandle alene. Det er som at købe ind i et indkøbsfællesskab - volumen giver rabat."
    },
    {
        level: 9,
        question: "Hvad er pointen med at tage et lille gebyr for hjemmelevering og have pakkeshop som standard?",
        answers: ["At gøre kunderne sure", "At komplicere checkout", "At styre omkostninger og samtidig give et valg til kunden", "At undgå at sende til pakkeshop"],
        correct: 2,
        category: "Fragt",
        explanation: "Pakkeshop er billigere end hjemmelevering. Ved at gøre pakkeshop til standard og tage et lille gebyr for hjemmelevering, styrer du omkostningerne. Kunden får stadig valget, men de fleste vælger den gratis/billige option."
    },
    {
        level: 15,
        question: "Hvad er en smart måde at hente lidt ekstra dækningsbidrag til fragt via checkout?",
        answers: ["Hæve produktpriserne", "Tilbyde et lille tilvalg som 'prioriteret pluk og pak' mod et beskedent beløb", "Lægge skjulte gebyrer ind", "Kun tilbyde gratis fragt"],
        correct: 1,
        category: "Fragt",
        explanation: "Et tilvalg som 'prioriteret pluk og pak' for fx 19 kr. giver kunden en følelse af ekstra service, og du får lidt ekstra dækningsbidrag. Det er ærligt, valgfrit og kan samlet give et pænt beløb over måneden."
    },
    {
        level: 3,
        question: "Hvad er de tre niveauer, emballage kan arbejde på ifølge guiden?",
        answers: ["Billig, dyr og miljøvenlig", "Hård, blød og mellem", "Funktionel, professionel og wow", "Lille, mellem og stor"],
        correct: 2,
        category: "Emballage",
        explanation: "Funktionel = varen kommer hel frem. Professionel = varen kommer hel frem og pakken ser ordentlig ud. Wow = kunden får en oplevelse ved at åbne pakken. Start med professionel - det koster næsten det samme som funktionel."
    },
    {
        level: 3,
        question: "Hvad kendetegner 'professionel' emballage i e-bogen?",
        answers: ["Kun genbrugte kasser", "Alt for store kasser med meget fyld", "Varen kommer frem hel og pakken ser ordentlig og afstemt ud", "Kun sort/hvidt design"],
        correct: 2,
        category: "Emballage",
        explanation: "Professionel emballage handler om at varen er beskyttet, kassen passer til varen, og det hele ser ordentligt ud. Ingen overdreven fyld, ingen kæmpe kasse til en lille vare. Det signalerer kvalitet uden at koste ekstra."
    },
    {
        level: 15,
        question: "Hvorfor kan kampagnedage ses som en stresstest af lageret?",
        answers: ["Fordi medarbejderne har fri", "Fordi systemer slukkes", "Fordi volumen pludselig eksploderer og afslører svagheder i flow, standarder og bemanding", "Fordi kunder ikke bestiller noget"],
        correct: 2,
        category: "Kampagner",
        explanation: "Black Friday og lignende kampagner presser lageret til det yderste. Alle svagheder i flow, standarder og bemanding bliver synlige. Brug det som en læringsmulighed - noter hvad der gik galt og fix det før næste gang."
    },
    {
        level: 15,
        question: "Hvad er de tre faser i en kampagne ifølge guiden?",
        answers: ["Planlægning, budget, evaluering", "Marketing, lager, bogholderi", "Før, under og efter", "Dag, uge og måned"],
        correct: 2,
        category: "Kampagner",
        explanation: "Før = planlæg bemanding, lager, emballage og roller. Under = kør planen, prioritér og hold fokus. Efter = evaluer hvad der virkede og hvad der skal forbedres. De fleste glemmer 'efter' - men det er der læringen sker."
    },
    {
        level: 15,
        question: "Hvorfor er det vigtigt at lave en kort 'krigsplan' på én A4 før en stor kampagne?",
        answers: ["Så alle kan få den med hjem", "For at vise ledelsen et pænt dokument", "For at gøre roller, prioriteringer og ansvar krystalklare når det går stærkt", "For at få mere papir på kontoret"],
        correct: 2,
        category: "Kampagner",
        explanation: "Når volumen eksploderer, er der ikke tid til at diskutere hvem der gør hvad. En kort krigsplan på én A4 med roller, prioriteringer og ansvar sikrer at alle ved præcis hvad de skal. Simpelt, men afgørende."
    },
    {
        level: 15,
        question: "Hvad er en typisk fordel ved 3PL for en mindre webshop i tidlig fase?",
        answers: ["At slippe helt for at tænke på lager", "At kunne gemme omkostninger", "At få faste rutiner, bedre fragtpriser og slippe for selv at bygge lager op", "At kunne undgå at tale med kunder"],
        correct: 2,
        category: "3PL",
        explanation: "3PL giver dig adgang til professionelle rutiner, bedre fragtpriser (volumen) og du slipper for at investere i lager, udstyr og personale. Det frigør tid til at fokusere på salg og produktudvikling."
    },
    {
        level: 15,
        question: "Hvad er en vigtig pointe i guiden om ansvar ved 3PL?",
        answers: ["At ansvaret flytter helt over på lagerhotellet", "At kunden oplever fejl som DIN fejl, også når 3PL laver rod", "At ingen har ansvar ved fejl", "At transportøren har hele ansvaret"],
        correct: 1,
        category: "3PL",
        explanation: "Kunden kender ikke dit lagerhotel. Når der sker en fejl, er det DIT brand der tager skaden. Derfor er det vigtigt med klare SLA'er, løbende opfølgning og en exit-plan hvis kvaliteten ikke holder."
    }
];

// Funktion til at vælge 15 tilfældige spørgsmål fordelt over niveauer
function generateQuestionSet() {
    const questionSet = [];
    
    // Grupper spørgsmål efter niveau
    const questionsByLevel = {};
    for (let i = 1; i <= 15; i++) {
        questionsByLevel[i] = questionBank.filter(q => q.level === i);
    }
    
    // Vælg ét tilfældigt spørgsmål fra hvert niveau
    for (let level = 1; level <= 15; level++) {
        const levelQuestions = questionsByLevel[level];
        if (levelQuestions && levelQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * levelQuestions.length);
            questionSet.push({...levelQuestions[randomIndex], level: level});
        }
    }
    
    return questionSet;
}
