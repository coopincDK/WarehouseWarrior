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
        category: "Pakkefejl",
        explanation: "Hvis to næsten identiske produkter (fx samme T-shirt i sort og navy) ligger ved siden af hinanden, er risikoen for forveksling enorm. Adskil dem fysisk med andre produkter imellem, så plukkeren ikke tager den forkerte."
    },
    {
        level: 5,
        question: "Hvad er den største ulempe ved at plukke én ordre ad gangen?",
        answers: ["Det kræver for mange labels", "Det skaber mange unødige ture på lageret og lavere effektivitet", "Det er svært at lære op", "Det kræver særligt IT-udstyr"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Når du plukker én ordre ad gangen, går du den samme rute igen og igen. Hvis 10 ordrer har samme vare, går du til den reol 10 gange. Med batch-plukning går du derhen én gang og tager alle 10. Enorm forskel i effektivitet!"
    },
    {
        level: 5,
        question: "Hvad er hovedideen i batch-plukning?",
        answers: ["At plukke én varelinje pr. dag", "At plukke alle varer alfabetisk", "At plukke varer til mange ordrer på én rute og først splitte dem ved pakkebordet", "At lade kunderne plukke deres egne varer"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Batch-plukning samler flere ordrer og plukker dem på én rute. Du sorterer først ved pakkebordet. I stedet for 20 ture til samme reol, går du derhen én gang. Det er den største tidsbesparelse du kan lave på et lille lager."
    },
    {
        level: 6,
        question: "Hvad kendetegner en single-line ordre?",
        answers: ["En ordre med mange varelinjer", "En ordre med kun én type vare", "En ordre der sendes i flere kolli", "En ordre kun til B2B-kunder"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "En single-line ordre indeholder kun én type vare (fx 2 stk. af samme T-shirt). De er perfekte til batch-plukning, fordi du kan samle alle single-line ordrer med samme vare og plukke dem på én gang."
    },
    {
        level: 6,
        question: "Hvorfor giver plukkekasser især mening til multi-line ordrer?",
        answers: ["Fordi kasserne fylder mest muligt på lageret", "Fordi du kan farvekode kasserne", "Fordi hver kasse kan repræsentere én ordre, mens du går én samlet rute", "Fordi kasser er billigere end reoler"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer har hver ordre flere forskellige varer. Med en plukkekasse pr. ordre kan du gå én samlet rute og lægge varerne i den rigtige kasse undervejs. Så blander du aldrig ordrerne sammen."
    },
    {
        level: 7,
        question: "Hvad er det typiske problem i et lager uden nok plukkevogne?",
        answers: ["Der bliver for stille på lageret", "Alle plukker for hurtigt", "Der opstår kø og ventetid fordi folk mangler udstyr til at tage flere ordrer ad gangen", "Vognene står i vejen for nødudgangene"],
        correct: 2,
        category: "Redskaber",
        explanation: "Hvis der kun er én plukkevogn til tre plukkere, venter to af dem altid. Ventetid er spildt arbejdstid. Hver aktiv plukker skal have sin egen vogn plus 1-2 ekstra. Plukkevogne er billige - ventetid er dyrt!",
        proTip: "Når du har styr på vognene, kan næste skridt være en tablet eller scanner på vognen — så får plukkeren den optimale rute vist direkte."
    },
    {
        level: 7,
        question: "Hvorfor kan en plukkevogn være en god investering?",
        answers: ["Den gør lageret pænere", "Den gør det muligt at samle flere ordrer på én rute og mindsker tunge løft", "Den gør det lettere at holde pauser", "Den mindsker behovet for emballage"],
        correct: 1,
        category: "Redskaber",
        explanation: "En plukkevogn med flere rum lader dig plukke til 5-10 ordrer på én rute. Plus den mindsker tunge løft fordi du ikke bærer alt i hænderne. En vogn til 3.000 kr. kan spare 10+ minutter om dagen - tjent hjem på få måneder.",
        proTip: "Med en scanner eller tablet på vognen kan du få vist den optimale plukkerute og bekræfte hvert pluk — det øger både hastighed og præcision."
    },
    {
        level: 8,
        question: "Hvad er pointen med min/max-metoden på et lille lager?",
        answers: ["At købe så lidt ind som muligt", "At sikre at du aldrig har mere end én enhed på lager", "At have et visuelt styringsprincip for hvornår du skal bestille mere af dine A-varer", "At undgå at lave indkøbsaftaler"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Min/max er simpelt: Sæt et minimum (bestil når du rammer dette) og et maximum (bestil op til dette). Det forhindrer at du løber tør, men også at du overbestiller. Perfekt til små lagre uden avancerede systemer.",
        proTip: "Når du vokser, kan et lagerstyringssystem automatisk overvåge niveauer og sende bestillingsforslag — så slipper du for at tjekke reolerne manuelt."
    },
    {
        level: 8,
        question: "Hvordan bruges den røde streg på reolen i min/max-opsætningen?",
        answers: ["Som dekoration på lageret", "Som markering af hvor højt kasserne må stables", "Som visuelt niveau for hvornår en vare er under minimum og skal på bestillingslisten", "Som markering af hvilke varer der er på tilbud"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Den røde streg er en simpel visuel markering på reolen. Når varerne når ned til stregen, er det tid til at genbestille. Alle kan se det - ingen systemer nødvendige. Det er lavpraktisk lagerstyring der virker!",
        proTip: "Næste skridt kan være en simpel scanner-løsning der automatisk opdaterer lagerbeholdningen — så ved systemet hvornår du rammer minimum."
    },
    {
        level: 9,
        question: "Hvad er den vigtigste datadisciplin i et lille setup uden WMS?",
        answers: ["At have et meget avanceret ERP-system", "At alle varer har unikke og konsistente SKU'er og kun én primær placering", "At alle varer har samme varenummer", "At alle varer lagres efter farve"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Uden WMS er datadisciplin alt. Hver vare skal have et unikt SKU-nummer og kun én fast placering. Hvis samme vare har tre forskellige numre eller ligger tre steder, opstår der kaos. God datahygiejne er fundamentet for alt andet.",
        proTip: "God datadisciplin er det perfekte fundament for et fremtidigt WMS — når dine SKU'er og placeringer allerede er på plads, bliver overgangen meget lettere."
    },
    {
        level: 9,
        question: "Hvad er en typisk rytme for optælling i et lille setup uden system?",
        answers: ["Alt tælles dagligt", "A-varer månedligt, B-varer kvartalsvist og resten cirka én gang om året", "Kun C-varer tælles", "Der tælles kun ved årsskifte"],
        correct: 1,
        category: "Svind",
        explanation: "Fokusér optællingen hvor det betyder mest: A-varer bevæger sig hurtigt og skal tælles månedligt. B-varer kvartalsvist. C-varer årligt. Det er rullende optælling - du lukker aldrig lageret, men holder styr på de vigtigste varer.",
        proTip: "Med en håndscanner og simpelt lagersystem kan optælling gå meget hurtigere — scan lokation, scan vare, indtast antal. Færdig."
    },
    {
        level: 10,
        question: "Hvorfor kaldes pakkefejl i guiden for 'den stille dræber'?",
        answers: ["Fordi de aldrig opdages", "Fordi de typisk koster meget pr. fejl uden at man lægger mærke til det i hverdagen", "Fordi det handler om støjniveau på lageret", "Fordi kunder aldrig klager over dem"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Pakkefejl er 'den stille dræber' fordi de sker løbende uden at nogen reagerer. Hver fejl koster ca. 350 kr., men det mærkes ikke i hverdagen. Først når du regner det sammen - 10 fejl/uge = 182.000 kr/år - ser du hvor dyrt det er.",
        proTip: "En stregkodescanner ved pakkebordet kan fange de fleste pakkefejl automatisk — scan vare mod ordre, og systemet advarer hvis noget ikke matcher."
    },
    {
        level: 10,
        question: "Hvad er idéen med dobbelttjek mellem pluk og pak?",
        answers: ["At gøre processen langsommere", "At give medarbejderne mere papirarbejde", "At én plukker og en anden kontrollerer og pakker for at fange fejl før afsendelse", "At kunne bruge flere printere"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Dobbelttjek er den mest effektive fejlreduktion: Én person plukker, en anden kontrollerer og pakker. Fire øjne ser mere end to. Det virker langsommere, men du sparer enormt på færre fejl, returer og utilfredse kunder.",
        proTip: "Når volumen vokser, kan en simpel stregkodescanner ved pakkebordet automatisere dette tjek — scan vare mod ordre og fang fejl med det samme."
    },
    {
        level: 11,
        question: "Hvad er formålet med en fejllog?",
        answers: ["At kunne placere skyld", "At have noget til revision", "At finde mønstre i fejltyper, varer og tidspunkter for at kunne løse årsagerne", "At måle hvem der laver flest fejl"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Fejlloggen er IKKE til at finde syndebukke! Den er til at finde systemfejl og mønstre: Sker fejl mest om fredagen? Er det altid samme vare? Ligger to ens varer for tæt? Når du løser årsagen, forsvinder fejlene.",
        proTip: "Et simpelt WMS kan automatisk logge fejl og vise mønstre i dashboards — så slipper du for manuelle noter og får bedre data."
    },
    {
        level: 11,
        question: "Hvad er hovedformålet med små standarder som 'sådan plukker vi' og 'sådan pakker vi'?",
        answers: ["At begrænse medarbejdernes frihed", "At gøre oplæring og drift mere ensartet og reducere fejl", "At kunne sende manualer til kunderne", "At gøre lageret mere bureaukratisk"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Standarder sikrer at alle gør tingene ens - uanset om det er en erfaren medarbejder eller en ny vikar. Det reducerer fejl, gør oplæring hurtigere og sikrer ensartet kvalitet. Det handler ikke om kontrol, men om konsistens.",
        proTip: "Når du vokser, kan et WMS guide medarbejderen trin-for-trin på en skærm — så bliver standarden digital og endnu sværere at springe over."
    },
    {
        level: 11,
        question: "Hvorfor er en kort tjekliste ved pakkebordet effektiv?",
        answers: ["Fordi den erstatter al oplæring", "Fordi den gør det sværere at lave fejl i de vigtigste trin uden at gøre arbejdet langsommere", "Fordi den pynter på væggen", "Fordi den gør det lettere at gemme fejl"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "En kort tjekliste (5-7 punkter) ved pakkebordet fungerer som et sikkerhedsnet. Selv erfarne medarbejdere glemmer ting under pres. Tjeklisten fanger de vigtigste fejl uden at bremse tempoet. Piloter bruger dem - det bør du også.",
        proTip: "Med en stregkodescanner kan tjeklisten blive digital — scan vare, scan ordre, og systemet bekræfter automatisk at det matcher."
    },
    {
        level: 13,
        question: "Hvad er pointen med korte, faste tavlemøder på 10-15 minutter?",
        answers: ["At holde lange strategiske oplæg", "At diskutere kampagner", "At dele fejl, forbedringsforslag og flaskehalse og vælge én konkret forbedring til næste uge", "At måle hvem der har været mest syg"],
        correct: 2,
        category: "Generelt",
        explanation: "Korte tavlemøder skaber en kultur for løbende forbedring. Del gårsdagens fejl, diskutér flaskehalse, og vælg ÉN konkret ting at forbedre til næste uge. Ikke 10 ting - én ting. Konsistens slår ambition."
    },
    {
        level: 10,
        question: "Hvorfor kan dårlig belysning være en direkte kilde til pakkefejl?",
        answers: ["Fordi det gør medarbejderne trætte", "Fordi labels bliver mørkere", "Fordi det er sværere at se små forskelle på produkter og størrelser", "Fordi scannere ikke virker i lys"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Dårlig belysning gør det svært at skelne mellem næsten ens produkter - fx navy vs. sort, str. M vs. L. Det er en billig fejlkilde at løse: God LED-belysning over pluk- og pakkeområder reducerer fejl markant.",
        proTip: "Kombiner god belysning med stregkodescanning — så behøver du slet ikke skelne visuelt mellem ens varer. Scanneren ved præcis hvilken det er."
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
        explanation: "Returloggen afslører mønstre: Returneres samme produkt ofte? Er det altid 'for lille'? Er det altid fra samme leverandør? Med disse data kan du forbedre produkttekster, størrelsesguider og leverandørvalg.",
        proTip: "Et WMS kan automatisk koble returdata til produkter og vise dig dashboards over returmønstre — så slipper du for manuelt regneark."
    },
    {
        level: 12,
        question: "Hvad er guidens anbefaling ift. hvor længe en retur må ligge ubehandlet?",
        answers: ["Der er ingen grænse", "Mindst 14 dage", "Så kort som muligt – fx maks. 2 timer eller samme dag", "Indtil kunden ringer"],
        correct: 2,
        category: "Returer",
        explanation: "Guidens anbefaling er at sigte efter samme dag — fx inden for 2 timer som et mål. Jo længere en retur ligger, jo længere er varen ude af salg og kunden venter. Hurtig behandling giver bedre økonomi og gladere kunder.",
        proTip: "Et simpelt lagersystem med scanning kan automatisk opdatere beholdningen, når returen modtages — så er varen straks salgsklar igen."
    },
    {
        level: 13,
        question: "Hvad er forskellen på proces-svind og naturligt svind?",
        answers: ["Proces-svind handler om fejl i arbejdsgange, naturligt svind om fx ødelagte varer og samples", "Der er ingen forskel", "Proces-svind er lovligt, naturligt svind er ulovligt", "Naturligt svind handler kun om tyveri"],
        correct: 0,
        category: "Svind",
        explanation: "Proces-svind er fejl i arbejdsgange: fejltælling, manglende registrering, forkert modtagelse. Naturligt svind er kendte tab: beskadigede varer, demo-produkter, samples. Begge skal registreres, men løsningerne er forskellige.",
        proTip: "Scanning ved modtagelse og pluk kan drastisk reducere proces-svind — systemet fanger afvigelser med det samme i stedet for ved næste optælling."
    },
    {
        level: 13,
        question: "Hvad er formålet med rullende lageroptælling?",
        answers: ["At undgå at tælle lageret", "At samle al optælling på én lang nat én gang om året", "At fordele optællingen over året og fokusere mest på de vigtigste varer", "At tælle kun C-varer"],
        correct: 2,
        category: "Svind",
        explanation: "Rullende optælling fordeler arbejdet over hele året: A-varer månedligt, B-varer kvartalsvist, C-varer årligt. Du lukker aldrig lageret, opdager fejl hurtigere, og fokuserer energien på de varer der betyder mest.",
        proTip: "Med en håndscanner og lagersystem kan cyklusoptælling gå meget hurtigere — scan lokation, tæl, bekræft. Ingen papir og kuglepen."
    },
    {
        level: 13,
        question: "Hvorfor er det vigtigt at gøre kasserede varer synlige i stedet for usynlige?",
        answers: ["Så de kan sælges som nye", "Så de ikke forstyrrer medarbejderne", "Så svind bliver noget, du aktivt tager stilling til og kan reducere", "Så der kommer mere rod på lageret"],
        correct: 2,
        category: "Svind",
        explanation: "Hvis kasserede varer bare forsvinder stille, ved du aldrig hvor meget du taber. Gør dem synlige med en 'Defekt'-kasse og registrer dem. Når svind er synligt, kan du måle det, forstå det og reducere det.",
        proTip: "Et lagersystem kan automatisk trække kasserede varer fra beholdningen og vise svind-rapporter — så har du altid overblik over det reelle tab."
    },
    {
        level: 14,
        question: "Hvilket nøgletal er særligt godt som 'temperaturmåling' på kvaliteten i pakkeriet?",
        answers: ["Omsætning pr. dag", "Antal reoler på lageret", "Pakkefejlsprocent", "Antal medarbejdere"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocenten er dit vigtigste kvalitetsnøgletal. Den viser direkte om dine processer virker. Under 1% er godt, over 2% er alarmerende. Følg den ugentligt og reager når den stiger.",
        proTip: "Et WMS med scanning kan automatisk beregne din pakkefejlsprocent i realtid — så ser du straks om en ny proces virker eller ej."
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
        explanation: "'Pluk pr. time' viser direkte om dine layout-ændringer virker. Hvis du flytter A-varer tættere på pakkebordet og tallet stiger fra 40 til 60, ved du det virker. Det er dit effektivitets-kompas.",
        proTip: "Med et WMS kan du måle pluk pr. time automatisk og se trends over tid — ingen manuel optælling nødvendig."
    },
    {
        level: 15,
        question: "Hvad er 'bundne lagerkroner i langsomme varer' et udtryk for?",
        answers: ["Hvor pænt lageret ser ud", "Hvor meget kapital der står stille i varer, der ikke sælger", "Hvor stor kredit du har hos leverandører", "Hvor meget der er solgt på udsalg"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Bundne lagerkroner er penge der står stille. Hvis du har C-varer for 200.000 kr. der ikke har solgt i 90 dage, er det 200.000 kr. du ikke kan bruge på A-varer, marketing eller vækst. Død kapital er en stille dræber.",
        proTip: "Et lagerstyringssystem kan automatisk flagge varer uden salg i X dage og beregne den bundne kapital — så opdager du problemet tidligt."
    },
    {
        level: 15,
        question: "Hvad er en typisk lavpraktisk måde at finde bundet kapital i C-varer?",
        answers: ["Tælle alle varer fysisk", "Gætte ud fra reolpladsen", "Trække en liste over varer uden salg de sidste 90 dage og summere kostprisen", "Spørge kunderne"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Træk en liste fra dit shopsystem over varer uden salg de sidste 90 dage. Summer kostprisen. Det tal er din bundne kapital i langsomme varer. Ofte er det overraskende højt - og det er penge du kan frigøre.",
        proTip: "Et lagersystem med ABC-analyse kan automatisk generere denne rapport og endda foreslå udsalgspriser baseret på alder og kostpris."
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
    },

    // NYE SPØRGSMÅL - ABC-analyse & lagerlayout + flow
    {
        level: 3,
        question: "Hvad er det vigtigste formål med en ABC-analyse på et lille lager?",
        answers: ["At få styr på bogføringen", "At placere de mest solgte varer tættest på pakkebordet", "At sikre, at alle varer står alfabetisk", "At få et flottere visuelt udtryk i reolerne"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen handler om at give de varer, der driver mest salg, de bedste pladser. Derfor er målet at få A-varerne tættest på pakkebordet."
    },
    {
        level: 4,
        question: "Hvad kendetegner typisk dine A-varer i en ABC-analyse?",
        answers: ["Varer der sjældent sælges, men fylder meget", "Varer med lav avance", "Varer der står for en stor del af omsætningen og går igen på mange ordrer", "Varer som kun sælges på udsalg"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "A-varer er dem, der står for en forholdsmæssigt stor del af salget. De optræder ofte og er derfor nøglen til et effektivt lager."
    },
    {
        level: 5,
        question: "Hvorfor er det problematisk, hvis en langsomt sælgende vase står ved pakkebordet, mens en storsælgende T-shirt står 15 meter væk?",
        answers: ["Det gør statusoptælling sværere", "Det øger risikoen for svind", "Det øger plukketiden unødigt på de varer, du sælger mest", "Det påvirker kun indretningen kosmetisk"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Når dine bestsellere står langt væk, bruger du for mange skridt på de ordrer, der fylder mest. Det sluger både tid og lønkroner."
    },
    {
        level: 6,
        question: "Hvorfor giver det ofte mening at indrette lageret efter salgshyppighed frem for kun efter brand eller varegruppe?",
        answers: ["Fordi det ser bedre ud på billeder", "Fordi det gør det lettere at bestille hos leverandører", "Fordi det forkorter plukkeruterne på de varer, du rører ved hver dag", "Fordi det er et krav fra transportørerne"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Når reolerne afspejler salgsdata, minimerer du gåafstand på de mest brugte varer og øger tempoet uden flere hænder."
    },
    {
        level: 7,
        question: "Hvordan kan du bruge din ABC-analyse aktivt til at frigøre likviditet?",
        answers: ["Ved at købe flere A-varer hjem uden plan", "Ved at udsælge C-varer, der har stået stille længe", "Ved at flytte A-varer længere væk", "Ved at sætte prisen ned på alle varer"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "C-varer binder ofte unødvendig kapital. Ved at sælge dem ud frigør du både plads og likviditet til varer, der faktisk vender sig."
    },
    {
        level: 4,
        question: "Hvad er den vigtigste forskel på at indrette et lager og en fysisk butik?",
        answers: ["Butikken skal være pænere for kunderne", "På lageret optimerer du for medarbejderens effektivitet – ikke kundens oplevelse", "Lageret må ikke have skilte", "Butikken må ikke have smalle gange"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "I butikken designer du til kunderejsen. På lageret designer du til plukkerens rute og effektivitet."
    },
    {
        level: 6,
        question: "Hvorfor er et ensrettet flow på lageret en fordel?",
        answers: ["Det gør lagergangen smallere", "Det forlænger den samlede rute", "Det mindsker mængden af krydsende ruter og kø", "Det gør det lettere at dekorere"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når folk ikke konstant går mod hinanden, får du færre stop, mindre trængsel og et mere stabilt tempo."
    },
    {
        level: 7,
        question: "Hvorfor giver det mening at lade medarbejderne pege på flaskehalse, før du tegner nyt layout?",
        answers: ["De har som regel flest ideer til indretning", "De kender lageret i praksis og mærker friktionen hver dag", "De skal godkende alle investeringer", "De ved mest om webshopdesign"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Medarbejderne oplever dagligt hvor det halter. Deres input er guld værd, fordi de kender de reelle flaskehalse – ikke kun dem der ser logiske ud på papir."
    },
    // ===== NYE SPØRGSMÅL FRA EBOG (sp4) =====
    {
        level: 3,
        question: "Hvad er hovedformålet med en ABC-analyse på et lille webshop-lager?",
        answers: ["At sortere varer efter farve", "At placere de mest solgte varer mest tilgængeligt", "At finde de billigste leverandører", "At reducere antallet af varenumre"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen bruges primært til at identificere de varer, der driver størstedelen af salget, så de kan placeres tæt på pakkebordet og reducere unødvendige skridt."
    },
    {
        level: 4,
        question: "Når du laver en simpel ABC-analyse, hvad kigger du typisk på først?",
        answers: ["Omsætning i kroner pr. vare", "Antal ordrer, hvor varen indgår", "Antal styklager på hylden", "Indkøbsprisen på varen"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "I guiden lægges vægt på, at du sorterer efter hvor mange ordrer varen indgår i – ikke kun omsætning – fordi det bedre afspejler den daglige belastning på lageret."
    },
    {
        level: 5,
        question: "Hvad kendetegner typisk C-varer i en ABC-analyse?",
        answers: ["De sælger få, men er meget dyre", "De sælger ofte og i store mængder", "De sælger sjældent og binder ofte unødigt lager", "De er altid nye produkter i sortimentet"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "C-varer er de langsomt omsættende varer, som ofte står stille og binder kapital og plads. Derfor bør de ligge perifert og løbende vurderes for udsalg."
    },
    {
        level: 6,
        question: "Hvad er den mest lavpraktiske måde at komme i gang med ABC på, hvis du bruger et simpelt shopsystem?",
        answers: ["Eksportér alle varer til et lagerstyringssystem", "Gå en tur på lageret og gæt dig til A-varer", "Træk salgsrapport for 3 måneder, sorter på antal ordrer og marker top 20 %", "Lad leverandøren fortælle dig, hvad der er A-varer"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Guiden anbefaler at trække en simpel rapport fra webshoppen for de seneste måneder, sortere efter ordrefrekvens og markere de varer, der står for størstedelen af salget."
    },
    {
        level: 4,
        question: "Hvorfor er det problematisk at indrette lageret som en butik – fx efter brands – i stedet for efter flow?",
        answers: ["Det gør lageret mere uoverskueligt for kunder", "Det ser mindre pænt ud på billeder", "Det forlænger plukkeruterne og giver flere skridt pr. ordre", "Det gør det sværere at tage pæne produktfotos"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når varer står efter brand eller kategori i stedet for salgsfrekvens og flow, må plukkeren ofte krydse lageret igen og igen efter de samme bestsellere."
    },
    {
        level: 5,
        question: "Hvad er det vigtigste, du skal observere, når du 'går en tur på lageret' for at forbedre flowet?",
        answers: ["Om reolerne har samme højde", "Hvor medarbejderne venter, går i vejen for hinanden eller går unødigt langt", "Om alle kasserne matcher din brandfarve", "Hvor mange paller der er i alt"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pointen med lager-walken er at se, hvor der opstår flaskehalse, krydsende ruter og spildte skridt – ikke om lageret er visuelt perfekt."
    },
    {
        level: 6,
        question: "Hvad menes der med at tænke i 'ensrettet flow' i lagerindretningen?",
        answers: ["At alle medarbejdere går i samme tempo", "At al trafik kun må gå med uret rundt i bygningen", "At varerne bevæger sig i én logisk retning fra modtagelse til afsendelse", "At man kun må plukke én ordre ad gangen"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Ensrettet flow betyder, at varerne ideelt bevæger sig i én retning gennem tre zoner: modtagelse, lager og afsendelse – frem for kaotiske frem-og-tilbage-bevægelser."
    },
    {
        level: 5,
        question: "Hvorfor frarådes det at placere næsten identiske varer lige ved siden af hinanden, hvis du ikke scanner?",
        answers: ["Det ser rodet ud for besøgende", "Det gør optælling umulig", "Det øger risikoen for plukfejl markant", "Det forstyrrer pakkemaskinen"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når næsten identiske varer står lige ved siden af hinanden, er det meget nemmere at tage den forkerte – især uden scanning – og pakkefejlene stiger.",
        proTip: "Med stregkodescanning eliminerer du denne fejlkilde helt — scanneren bekræfter at du har taget den rigtige vare, uanset hvor den står."
    },
    {
        level: 6,
        question: "Hvad er hovedpointen med batch-plukning fremfor at plukke én ordre ad gangen?",
        answers: ["At få pænere plukkelister", "At reducere antal ture til de samme hylder ved at plukke til flere ordrer ad gangen", "At kunne pakke langsommere men mere sikkert", "At gøre det lettere at finde returvarer"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Batch-plukning handler om at samle ens pluk, så du kun går til samme lokation få gange, mens du plukker til flere ordrer på én tur.",
        proTip: "Et WMS kan automatisk gruppere ordrer og generere optimerede batch-plukkelister — så slipper du for at sortere manuelt."
    },
    {
        level: 7,
        question: "Hvad kendetegner typisk en 'single-line' ordre i plukstrategien?",
        answers: ["En ordre med én kunde", "En ordre med én varelinje, fx én T-shirt", "En ordre med kun A-varer", "En ordre der sendes som brev"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Single-line ordrer er ordrer med kun én varelinje, og de egner sig godt til meget effektiv batch-plukning.",
        proTip: "Et WMS kan automatisk identificere single-line ordrer og samle dem til én effektiv batch — helt uden manuelt arbejde."
    },
    {
        level: 7,
        question: "Hvordan bruges plukkekasser typisk i arbejdet med multi-line ordrer?",
        answers: ["Én kasse til hele dagens ordrer", "Én kasse pr. hyldemeter", "Én kasse pr. ordre, hvor varer lægges direkte i ordenes kasser under plukkeruten", "Kun til returvarer"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer giver det mening, at hver kasse repræsenterer en ordre, så plukkeren kan lægge varer direkte i den rigtige ordre på ruten.",
        proTip: "Med en scanner og WMS kan systemet bekræfte hvert pluk og advare hvis du lægger en vare i den forkerte kasse — endnu færre fejl."
    },
    {
        level: 5,
        question: "Hvorfor kan det give mening at indføre farvekoder på plukkelister eller kasser?",
        answers: ["For at matche virksomhedens visuelle identitet", "For at gøre lageret mere Instagram-venligt", "For at vise prioritet, fx hasteordrer eller særlige ruter", "For at skelne mellem A-, B- og C-varer"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Farvekoder bruges praktisk til at indikere, hvilke ordrer eller ruter der har højeste prioritet (fx hasteordrer), så plukningen kan styres bedre.",
        proTip: "Et WMS kan automatisk prioritere og farvemarkere ordrer baseret på deadline, forsendelsesmetode eller kundegruppe."
    },
    {
        level: 4,
        question: "Hvad er et centralt argument i guiden for at investere i plukkevogne?",
        answers: ["De får lageret til at se mere professionelt ud for gæster", "De kan bruges som midlertidig opbevaring", "De reducerer antallet af ture og tunge løft og kan hurtigt tjene sig hjem i sparet tid", "De er nødvendige for at kunne bruge et WMS"],
        correct: 2,
        category: "Redskaber",
        explanation: "Plukkevogne gør det muligt at plukke til flere ordrer på én rute, reducere bæring og spare tid, så investeringen ofte er tjent hjem på få måneder.",
        proTip: "Næste skridt kan være en tablet eller scanner på vognen — så får plukkeren den optimale rute vist direkte."
    },
    {
        level: 6,
        question: "Hvad er en realistisk fremgangsmåde, når du vil teste om en ny vogn-type fungerer i praksis?",
        answers: ["Købe til hele lageret på én gang", "Bestille én vogn, teste den i nogle uger og tilpasse antal og model efter erfaring", "Leje vogne på dagsbasis", "Lade leverandøren beslutte for dig"],
        correct: 1,
        category: "Redskaber",
        explanation: "Guiden anbefaler at starte småt: test 1–2 vogne, se hvordan de bruges i praksis og tilpas derefter i stedet for at lave en stor forkert investering."
    },
    {
        level: 5,
        question: "Hvorfor kan et simpelt mekanisk rullefelt være en god investering ved høj ordrevolumen?",
        answers: ["Det giver bedre ergonomi ved varemodtagelse", "Det gør det lettere at fotografere pakker", "Det flytter færdigpakkede ordrer væk fra pakkebordet og minimerer afbrydelser for pakkeren", "Det gør det muligt at veje pakker automatisk"],
        correct: 2,
        category: "Redskaber",
        explanation: "Rullefeltet gør, at færdigpakkede ordrer glider væk fra pakkebordet, så pakkeren kan holde fokus og slippe for mange små afbrydelser og løft."
    },
    {
        level: 4,
        question: "Hvad er hovedideen med min/max-styring uden et lagersystem?",
        answers: ["At få styr på leverandørernes rabatter", "At minimere antal varenumre i sortimentet", "At definere et minimums- og maksimumsniveau og visualisere det på reolen", "At finde de varer, der kan sælges bedst på tilbud"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Min/max handler om at bestemme hvornår du skal bestille (minimum) og hvor meget du typisk vil have liggende (maksimum), og gøre det synligt fx med en rød streg.",
        proTip: "Et lagerstyringssystem kan automatisk overvåge niveauer og sende bestillingsforslag — så slipper du for at tjekke reolerne manuelt."
    },
    {
        level: 5,
        question: "Hvorfor giver det mest mening at starte min/max-arbejdet på A-varer?",
        answers: ["Fordi de er lettest at tælle", "Fordi de fylder mest fysisk", "Fordi det er her, du hurtigst mærker effekten af færre stockouts", "Fordi leverandørerne stiller krav om det"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "A-varer står for hovedparten af salget, så bedre styring af deres lagerniveauer giver hurtigst effekt på kundeservice og omsætning.",
        proTip: "Et lagersystem kan automatisk advare når A-varer nærmer sig minimum — så undgår du stockouts på dine vigtigste varer."
    },
    {
        level: 6,
        question: "Hvordan anbefales det i guiden at planlægge optælling uden lagersystem?",
        answers: ["Tælle hele lageret én gang om året", "Tælle C-varer hver uge og A-varer én gang om året", "Tælle A-varer oftere, B-varer kvartalsvis og resten mindst én gang om året", "Kun tælle ved årsafslutning"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Fokus er på de mest kritiske varer: A-varer tælles hyppigt, B-varer jævnligt og hele lageret mindst én gang årligt.",
        proTip: "Med en håndscanner kan optælling gå markant hurtigere — scan lokation, tæl, bekræft. Ingen papir og kuglepen."
    },
    {
        level: 7,
        question: "Hvorfor er konsistent SKU-navngivning vigtig, selv hvis du kun bruger et simpelt shopsystem?",
        answers: ["Det ser bedre ud i Google", "Det gør det lettere at skifte webshop-platform", "Det reducerer fejl ved import/eksport og gør optælling og placeringer lettere at styre", "Det får leverandørerne til at tage dig mere seriøst"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Konsistente og unikke SKU'er reducerer fejl i CSV-filer, gør placeringer og optælling mere styrbare og gør en fremtidig system-migrering enklere.",
        proTip: "God SKU-disciplin er det perfekte fundament for et fremtidigt WMS — når dine data allerede er rene, bliver overgangen meget lettere."
    },
    {
        level: 6,
        question: "Hvad er den primære årsag til, at pakkefejl kaldes 'den stille dræber' i guiden?",
        answers: ["Fordi de sjældent opdages af kunden", "Fordi de mest handler om kosmetiske fejl", "Fordi de koster tid, fragt og goodwill langt ud over den enkelte ordre", "Fordi de kun opstår ved meget store kampagner"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Pakkefejl akkumulerer omkostninger til retur, ny forsendelse, kundeservice og tabt loyalitet – og kan derfor blive meget dyre, selv ved lave fejlprocenter.",
        proTip: "En stregkodescanner ved pakkebordet kan fange de fleste pakkefejl automatisk — scan vare mod ordre, og systemet advarer hvis noget ikke matcher."
    },
    {
        level: 7,
        question: "Hvad er en central pointe ved at indføre en fejllog for pakkefejl?",
        answers: ["At kunne dokumentere fejl over for Skat", "At kunne fordele skyld mellem medarbejdere", "At opdage mønstre og årsager i fejlene, så processerne kan forbedres", "At kunne beregne præcis fragtomkostning pr. fejl"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Fejlloggen skal bruges til læring: den gør det muligt at se mønstre og adressere de underliggende årsager fremfor at håndtere fejl enkeltvis.",
        proTip: "Et WMS kan automatisk logge fejl og vise mønstre i dashboards — så slipper du for manuelle noter og får bedre data."
    },
    {
        level: 5,
        question: "Hvordan bør dobbelttjek typisk organiseres for at reducere pakkefejl?",
        answers: ["Én person plukker og pakker alt selv", "Kunden dobbelttjekker sin ordre i checkout", "Én plukker, én pakker og kontrollerer, at varen matcher ordren", "To plukkere plukker samme ordre uafhængigt"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Guiden anbefaler en simpel opdeling, hvor én plukker og én pakker/tjekker, så fejl fanges, inden pakken forlader lageret.",
        proTip: "Med en stregkodescanner kan pakke-tjekket automatiseres — scan vare mod ordre, og systemet bekræfter at det matcher."
    },
    {
        level: 6,
        question: "Hvad er formålet med korte, konkrete procedurer ved pakkebordet?",
        answers: ["At kunne certificere lageret", "At gøre det nemmere at oplære nye og sikre ensartet kvalitet", "At dokumentere arbejdsforhold til HR", "At kunne erstatte lagersystemer"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Små procedurer sikrer, at alle udfører de vigtigste trin ens, og at nye medarbejdere hurtigere bliver trygge og laver færre fejl.",
        proTip: "Et WMS kan guide medarbejderen trin-for-trin på en skærm — så bliver proceduren digital og endnu sværere at springe over."
    },
    {
        level: 5,
        question: "Hvad er idéen med et kort, ugentligt tavlemøde på lageret?",
        answers: ["At gennemgå alle ordrer én for én", "At planlægge kantineordning", "At tale om fejl, forbedringer og flaskehalse og vælge få konkrete ændringer", "At lave detaljerede budgetter"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Tavlemødet bruges til at dele erfaringer, fejl og irritationsmomenter og beslutte små, konkrete forbedringer fra uge til uge.",
        proTip: "Et dashboard fra dit lagersystem kan vise gårsdagens nøgletal direkte på tavlen — så starter mødet med fakta i stedet for fornemmelser."
    },
    {
        level: 6,
        question: "Hvad er den vigtigste fordel ved én samlet fysisk returzone?",
        answers: ["Det gør det lettere at gemme returvarer til senere", "Det ser pænere ud for besøgende", "Alle ved præcis, hvor returer lander og skal behandles, så de ikke 'forsvinder' i driften", "Det reducerer behovet for returlabels"],
        correct: 2,
        category: "Returer",
        explanation: "Når alle returer lander samme sted, bliver de synlige, og du kan sikre, at de konsekvent behandles og registreres i systemet.",
        proTip: "Med scanning i returzonen kan du automatisk opdatere lagerbeholdningen og logge returtypen — hurtigere og mere præcist end manuelt."
    },
    {
        level: 7,
        question: "Hvilket element er IKKE et fast trin i den anbefalede returproces?",
        answers: ["Modtag og identificér ordren", "Tjek varens stand", "Opdater lager og ordre", "Gem alle returer ubehandlede til månedsafslutning"],
        correct: 3,
        category: "Returer",
        explanation: "Guiden understreger, at returer ikke må ligge og vente for længe – de skal behandles og ind på lageret igen hurtigt, ikke samles i en bunke."
    },
    {
        level: 7,
        question: "Hvorfor anbefales det at skelne mellem retur-typer i returloggen (fortrydelse, fejl, defekt osv.)?",
        answers: ["For at bogholderiet kan få flere konti", "For at kunne justere markedsføring bedre", "For at kunne se, om problemet handler om produkt, forventningsafstemning eller pluk/pak", "For at leverandøren kan få et flot skema"],
        correct: 2,
        category: "Returer",
        explanation: "Ved at skelne mellem årsager kan du se, om returer skyldes fx størrelsesguides, kvalitet, emballage eller rene pakkefejl – og handle derefter.",
        proTip: "Et WMS kan automatisk koble returdata til produkter og vise dashboards over returmønstre — så slipper du for manuelt regneark."
    },
    {
        level: 7,
        question: "Hvad er formålet med at have separate zoner for 'defekt/kan ikke sælges' og '2. sortering/udsalg'?",
        answers: ["At få mere farve på lageret", "At kunne gemme varer længere uden beslutning", "At tvinge leverandøren til at tage alt retur", "At gøre svind synligt og aktivt tage stilling til, hvad der skal kasseres og hvad der kan sælges billigt"],
        correct: 3,
        category: "Svind",
        explanation: "Når du fysisk adskiller beskadigede varer og 2. sortering, bliver svindet synligt og du kan træffe bedre beslutninger om udsalg, kassation eller leverandørdialog.",
        proTip: "Et lagersystem kan automatisk registrere og kategorisere svind — så får du rapporter over tab fordelt på årsag og leverandør."
    },
    {
        level: 6,
        question: "Hvad er hovedideen med rullende lageroptælling fremfor én stor årlig optælling?",
        answers: ["At undgå krav om revision", "At slippe for at tælle C-varer", "At fordele optælling ud over året og opdage afvigelser løbende", "At kunne holde lageret åbent 24/7"],
        correct: 2,
        category: "Svind",
        explanation: "Rullende optælling gør, at du løbende får øje på afvigelser og ikke skal lukke alt ned for én stor, tung optælling.",
        proTip: "Med en håndscanner og lagersystem kan du lave cyklusoptælling på få minutter — scan lokation, tæl, bekræft. Færdig."
    },
    {
        level: 8,
        question: "Hvad kendetegner 'proces-svind' i guiden?",
        answers: ["Tyveri fra eksterne", "Fejl der opstår i hverdagens arbejdsgange, fx ved modtagelse, pluk eller flytninger uden registrering", "Naturligt spild ved udløb", "Skader under transport"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind handler om fejl i dine interne processer – ikke nødvendigvis tyveri – som fx korrekte registreringer ved modtagelse og pluk.",
        proTip: "Scanning ved modtagelse og pluk kan drastisk reducere proces-svind — systemet fanger afvigelser med det samme."
    },
    {
        level: 6,
        question: "Hvad er målet med at arbejde med simple nøgletal på lageret ifølge guiden?",
        answers: ["At kunne vise pæne grafer på bestyrelsesmøder", "At kunne sammenligne sig med store konkurrenter", "At få et praktisk kompas til at se, om ændringer faktisk forbedrer lageret over tid", "At overflødiggøre dialogen med medarbejderne"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Nøgletal skal fungere som et lille kompas, der viser, om dine tiltag forbedrer eller forværrer drift – ikke som pynt."
    },
    {
        level: 7,
        question: "Hvilket nøgletal er mest direkte knyttet til kundens oplevelse af korrekt levering?",
        answers: ["Pluk pr. time", "Returprocent", "Pakkefejlsprocent", "Lagerbinding i C-varer"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocenten siger direkte noget om, hvor ofte kunderne modtager noget andet, end de har bestilt.",
        proTip: "Med scanning ved pakkebordet kan du måle pakkefejlsprocenten automatisk — og se om nye tiltag faktisk virker."
    },
    {
        level: 8,
        question: "Hvorfor kan det være bedre at måle 'plukkede linjer pr. time' end 'ordrer pr. time'?",
        answers: ["Det ser bedre ud i rapporter", "Det er nemmere at forklare til ledelsen", "Det tager højde for forskellen mellem simple og komplekse ordrer", "Det giver mulighed for at ignorere returvarer"],
        correct: 2,
        category: "Nøgletal",
        explanation: "En ordre med mange linjer kræver mere arbejde end en single-line ordre. Ved at måle linjer pr. time får du et bedre billede af den reelle produktivitet.",
        proTip: "Et WMS måler automatisk linjer pr. time pr. medarbejder — så kan du se produktivitet i realtid uden manuelt regneark."
    },
    {
        level: 7,
        question: "Hvad viser nøgletallet 'bundet lager i langsomme varer' dig primært?",
        answers: ["Hvor mange hyldemeter du har", "Hvor meget kapital der står stille i varer, der ikke bevæger sig", "Hvor mange A-varer du har i sortiment", "Hvor mange ordrer du håndterer dagligt"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Det handler om at se, hvor meget kapital der står bundet i langsomt omsættende varer, så du kan frigøre plads og penge.",
        proTip: "Et lagersystem kan automatisk beregne bundet kapital og foreslå udsalg på varer der ikke har solgt i X dage."
    },
    {
        level: 6,
        question: "Hvad er den hyppigste form for spild på fragt, som guiden nævner for mindre webshops?",
        answers: ["For mange fragtaftaler", "For mange transportører i checkout", "Alt for stor emballage med meget luft", "For få afhentninger pr. uge"],
        correct: 2,
        category: "Fragt",
        explanation: "At sende 'luft' i alt for store kasser er en klassisk kilde til unødige fragtomkostninger, især når volumen-pris spiller ind.",
        proTip: "Nogle WMS-systemer kan foreslå den optimale kassestørrelse baseret på varens dimensioner — så undgår du at sende luft."
    },
    {
        level: 7,
        question: "Hvorfor kan det være en fordel at begrænse antallet af transportører i checkout?",
        answers: ["For at gøre designet pænere", "For at få en bedre pris ved at samle volumen", "For at tvinge kunder til hjemmelevering", "For at kunne fjerne pakkeshops"],
        correct: 1,
        category: "Fragt",
        explanation: "Ved at samle volumen på færre transportører står du stærkere i forhandlinger og får en overskueligere drift."
    },
    {
        level: 7,
        question: "Hvad er hovedpointen med et lille tilvalg som 'prioriteret pluk og pak' i checkout?",
        answers: ["At højere pris automatisk giver hurtigere fragt fra transportøren", "At kunne søge tilskud hos fragtfirmaet", "At nogle kunder gerne betaler lidt ekstra for at føle sig prioriteret – hvilket kan hjælpe med at dække samlede fragtomkostninger", "At gøre checkout mere avanceret"],
        correct: 2,
        category: "Fragt",
        explanation: "Tilvalget kan være en måde at hente lidt ekstra indtægt, uden nødvendigvis at ændre den faktiske leveringstid dramatisk."
    },
    {
        level: 5,
        question: "Hvad er det primære minimumskrav til emballage ifølge guiden?",
        answers: ["At den matcher brandfarverne", "At den er miljøcertificeret", "At varen kommer frem i ét stykke", "At den kan genbruges af kunden"],
        correct: 2,
        category: "Emballage",
        explanation: "Det vigtigste er altid, at varen kommer frem uden skader. Alt andet er lag ovenpå dette minimum."
    },
    {
        level: 6,
        question: "Hvad kendetegner 'professionel' emballage ifølge de tre niveauer i guiden?",
        answers: ["Mange stickers og brochurer", "En kæmpe kasse uanset varetype", "Passende størrelse, pænt pakket og uden unødig luft og fyld", "Kun genbrugte kasser"],
        correct: 2,
        category: "Emballage",
        explanation: "Professionel emballage handler om, at pakken er velproportioneret, ser ordentlig ud og ikke indeholder unødvendigt fyld."
    },
    {
        level: 7,
        question: "Hvad er formålet med et lille 'wow'-element i emballagen?",
        answers: ["At overraske fragtmanden", "At kompensere for dårlig leveringstid", "At styrke kundens lyst til at handle igen og anbefale dig videre", "At kunne tage et højere gebyr for emballage"],
        correct: 2,
        category: "Emballage",
        explanation: "Et lille ekstra element (hilsen, sticker, prøve) kan skabe en positiv oplevelse, der øger loyalitet og word-of-mouth."
    },
    {
        level: 7,
        question: "Hvordan foreslår guiden, at du ser på store kampagnedage som fx Black Friday?",
        answers: ["Som noget der bare skal overleves", "Som et årligt nødvendigt kaos", "Som lagerets eksamen og en mulighed for at teste om processerne holder under pres", "Som en ren marketingopgave"],
        correct: 2,
        category: "Kampagner",
        explanation: "Kampagnedage ses som stresstest og eksamen for lageret, hvor du viser, om fundamentet faktisk holder til øget volumen."
    },
    {
        level: 8,
        question: "Hvad er den vigtigste grund til at lave forberedelse 'før' kampagnen starter?",
        answers: ["At kunne lave ekstra grafisk materiale", "At kunne holde flere møder", "At have styr på bemanding, lager, emballage og prioriteringer, så man ikke improviserer i kaosset", "At kunne invitere leverandøren på besøg"],
        correct: 2,
        category: "Kampagner",
        explanation: "Forarbejdet sikrer, at driften kan følge med, så du ikke skal opfinde løsninger, mens det brænder."
    },
    {
        level: 8,
        question: "Hvilke tre faser anbefales det at se kampagner igennem?",
        answers: ["Planlægning, HR og økonomi", "Før, under og efter", "Marketing, lager og kundeservice", "Indkøb, lager og bogholderi"],
        correct: 1,
        category: "Kampagner",
        explanation: "En kampagne bør ses som et forløb: forberedelse før, eksekvering under og oprydning/læring efter."
    },
    {
        level: 7,
        question: "Hvad er det vigtigste ved en kort 'krigsplan' på én A4 til en kampagne?",
        answers: ["At den er grafisk flot", "At alle medarbejdere kan skrive under på den", "At roller, ansvar og prioritering er krystalklare, når trykket stiger", "At den indeholder detaljerede økonomiske prognoser"],
        correct: 2,
        category: "Kampagner",
        explanation: "En simpel, tydelig plan på én side betyder, at alle ved, hvad der forventes, når volumen stiger – uden at skulle læse en manual."
    },
    {
        level: 8,
        question: "Hvad er en typisk situation, hvor 3PL kan give god mening for en mindre webshop?",
        answers: ["Når man ikke vil have noget med lager at gøre overhovedet", "Ved meget lav volumen (1–2 ordrer om ugen)", "Når man vil skalere hurtigt uden selv at binde kapital i lokaler og bemanding", "Når man kun sælger digitale produkter"],
        correct: 2,
        category: "3PL",
        explanation: "3PL kan være en genvej til skalering, hvis du vil vokse uden selv at opbygge et stort lager-setup."
    },
    {
        level: 8,
        question: "Hvad er en vigtig erkendelse ift. kundeoplevelse, når du bruger 3PL?",
        answers: ["At kundens oplevelse nu er 3PL'ens ansvar", "At fejl hos 3PL normalt opfattes som din fejl af kunden", "At du ikke længere behøver at tænke på leveringstid", "At kundeservice automatisk bliver bedre"],
        correct: 1,
        category: "3PL",
        explanation: "Kunden skelner sjældent mellem dig og 3PL – det er stadig din butik, de forholder sig til. Derfor er kvaliteten hos 3PL også din udfordring."
    },
    {
        level: 9,
        question: "Hvad er et konkret eksempel på en SLA, du kunne aftale med en 3PL-partner?",
        answers: ["At de lover at gøre deres bedste", "At lageret altid er åbent", "Fx at 99,5 % af alle ordrer plukkes og er klar til afsendelse samme dag ved bestilling før kl. 14", "At de svarer på e-mails inden for en uge"],
        correct: 2,
        category: "3PL",
        explanation: "En god SLA er konkret og målbar – fx procentandel af ordrer, der er klar til afsendelse inden for en bestemt frist."
    },
    {
        level: 9,
        question: "Hvad er en typisk faldgrube i 3PL-aftaler, som guiden nævner?",
        answers: ["For mange forskellige lagersystemer", "Alt for kort opsigelsesvarsel", "Utydelige eller skjulte omkostninger og minimumsbetalinger", "For store lokaler"],
        correct: 2,
        category: "3PL",
        explanation: "Hvis prisstrukturen ikke er gennemsigtig – inkl. minimumsbetaling og ekstra gebyrer – kan 3PL blive dyrere end forventet."
    },
    {
        level: 10,
        question: "Hvorfor er en exit-plan så central i en 3PL-aftale?",
        answers: ["For at kunne skifte bank lettere", "For at kunne ændre sortimentet hurtigere", "For at sikre, at du ved, hvordan lager, data og drift flyttes, hvis samarbejdet stopper", "For at gøre revisionsprocessen kortere"],
        correct: 2,
        category: "3PL",
        explanation: "En klar exit-plan sikrer, at du ikke låses fast, og at du ved, hvordan du får dine varer og data med dig ved et skifte."
    },
    {
        level: 8,
        question: "Hvad er den overordnede pointe med guiden om lageroptimering?",
        answers: ["At alle skal investere i avanceret WMS hurtigst muligt", "At lageroptimering er et engangsprojekt, der kan afsluttes", "At små, løbende forbedringer i flow, disciplin og struktur ofte skaber den største værdi", "At lageret primært er et marketingværktøj"],
        correct: 2,
        category: "Generelt",
        explanation: "Guiden understreger, at de største gevinster ofte ligger i simple, kontinuerlige forbedringer – ikke nødvendigvis i store engangsinvesteringer.",
        proTip: "Når de manuelle forbedringer er på plads, er du klar til næste skridt: et simpelt WMS eller lagersystem der bygger videre på det fundament du allerede har skabt."
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
