// Warehouse Warrior - Spørgsmålsdatabase
// Baseret på "Lagerhåndbog for den voksende webshop" af Martin René Mortensen, SmartPack

const questionBank = [
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
        question: "Hvad er den SIDSTE zone i et ensrettet lagerflow?",
        answers: ["Modtagelse", "Afsendelse", "Lager", "Pakkeområde"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Afsendelse er den sidste zone. Flowet går: Modtagelse → Lager → Afsendelse. Mange svarer for hurtigt 'Modtagelse' fordi de husker det fra det lette spørgsmål om første zone, men her spørges der til den SIDSTE."
    },
    {
        level: 2,
        question: "Hvor skal pakkebordet placeres?",
        answers: ["I et hjørne", "Centralt, ikke gemt væk", "Ved indgangen, men det er ikke optimalt", "Ved udgangen"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pakkebordet er dit vigtigste arbejdssted og skal placeres centralt, ikke gemt væk i et hjørne. Det skal ikke være klemt op ad en væg, så der er plads til at bevæge sig. De mest brugte materialer skal være inden for rækkevidde."
    },
    {
        level: 2,
        question: "Hvad er fordelen ved et mekanisk rullefelt ved pakkebordet?",
        answers: ["Det ser professionelt ud, som mange virksomheder gør", "Det kan fordoble pakkehastigheden", "Det er billigt", "Det kræver mindre plads"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Et mekanisk rullefelt kan fordoble din pakkehastighed! Når pakken er færdig, skubber du den bare væk på rullefeltet, og den næste ordre kan startes med det samme. Ingen tid spildt på at løfte og flytte pakker."
    },
    {
        level: 3,
        question: "Hvad skal du gøre FØRST, før du begynder at flytte reoler?",
        answers: ["Købe nye reoler", "Gå en tur på lageret", "Ansætte flere folk, ifølge standardpraksis", "Købe et WMS"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Før du gør NOGET, skal du gå en tur på lageret og observere flowet. Følg en ordre fra start til slut. Hvor går medarbejderne? Hvor er flaskehalsene? Først når du forstår det nuværende flow, kan du forbedre det."
    },
    {
        level: 3,
        question: "Hvorfor skal du adskille ens varer fysisk på lageret?",
        answers: ["Det ser pænere ud", "Det mindsker risikoen for plukfejl", "Det fylder mindre", "Det er lovpligtigt, men det er ikke det vigtigste"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Hvis du har to næsten ens produkter (f.eks. samme T-shirt i to farver) ved siden af hinanden, er risikoen for plukfejl enorm. Adskil dem fysisk - gerne med andre produkter imellem. Det reducerer fejl markant."
    },
    {
        level: 4,
        question: "Hvad er hovedprincippet i ABC-analysen?",
        answers: ["Alfabetisk sortering", "80% af salget kommer fra 20% af produkterne", "Alle varer er lige vigtige, men det er ikke hele billedet", "Dyre varer først"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen bygger på Pareto-princippet: 80% af dit salg kommer fra 20% af dine produkter. Disse 20% er dine A-varer. Ved at placere dem tættest på pakkebordet, sparer du enorme mængder tid hver dag."
    },
    {
        level: 4,
        question: "Hvor skal A-varer placeres?",
        answers: ["Bagerst på lageret, ifølge standardpraksis", "Tættest på pakkebordet", "På øverste hylde", "I kælderen"],
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
        answers: ["At plukke én ordre ad gangen, hvilket kan virke oplagt", "At plukke samme varer til flere ordrer på én tur", "At plukke tilfældigt", "At plukke alfabetisk"],
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
        answers: ["Pris", "Antal forskellige varer i ordren", "Leveringstid", "Kundens alder, hvilket er en typisk fejl"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Single-line ordrer indeholder kun én type vare (f.eks. 3 ens T-shirts). Multi-line ordrer har flere forskellige varer (T-shirt + bukser + sko). Single-line ordrer er perfekte til batch-plukning!"
    },
    {
        level: 7,
        question: "Hvad er den vigtigste fordel ved plukkevogne?",
        answers: ["De ser professionelle ud, selvom det lyder logisk", "De kan plukke til flere ordrer på én rute", "De er billige", "De fylder lidt"],
        correct: 1,
        category: "Redskaber",
        explanation: "Plukkevogne med flere hylder/rum lader dig plukke til 5-10 ordrer på én rute gennem lageret. I stedet for at gå samme rute 10 gange, går du den én gang. Det er forskellen mellem 100 meter og 1 kilometer!"
    },
    {
        level: 7,
        question: "Hvor mange plukkevogne bør der minimum være?",
        answers: ["Én til hele lageret", "Én pr. aktiv plukker + 1-2 ekstra", "Ti stykker", "Ingen, de er unødvendige, men det overser kerneproblemet"],
        correct: 1,
        category: "Redskaber",
        explanation: "Hver aktiv plukker skal have sin egen vogn, plus 1-2 ekstra til pakkebordet. Hvis plukkere skal vente på en vogn, spildes der dyr arbejdstid. Plukkevogne er billige - ventetid er dyrt!"
    },
    {
        level: 8,
        question: "Hvad betyder 'min/max' i lagerstyring?",
        answers: ["Minimum pris og maksimum pris", "Minimum lagerniveau og maksimum lagerniveau", "Minimum størrelse og maksimum størrelse, hvilket er en udbredt misforståelse", "Minimum ansatte og maksimum ansatte"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Min/max er simple grænser: Når lageret når minimum (f.eks. 10 stk), bestiller du op til maximum (f.eks. 50 stk). Det forhindrer at du løber tør, men også at du overbestiller og binder penge i lager."
    },
    {
        level: 8,
        question: "Hvad er 'den røde streg' metode?",
        answers: ["Grundlæggende set en advarsel til medarbejdere, selvom det lyder logisk", "En visuel markering på reolen for minimum lagerniveau", "En farlig zone", "En fejlmarkering"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Den røde streg er en simpel, visuel metode: Marker med rød tape hvor minimum-niveauet er på reolen. Når varerne når den røde streg, er det tid til at genbestille. Alle kan se det - intet system nødvendigt!"
    },
    {
        level: 9,
        question: "Hvor ofte skal A-varer tælles ved lageroptælling?",
        answers: ["En gang om året, men det er ikke det vigtigste", "Cirka en gang om måneden", "Hver dag", "Aldrig"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "A-varer bevæger sig hurtigt og skal tælles oftere - cirka månedligt. B-varer kvartalsvis, C-varer årligt. Fokusér optællingen hvor det betyder mest: på de varer der sælges mest."
    },
    {
        level: 9,
        question: "Hvad er vigtigst ved SKU-navngivning?",
        answers: ["At det er langt", "At det er konsistent og unikt", "At det er på engelsk, som mange virksomheder gør", "At det har mange tal"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "SKU-numre skal være konsistente (samme system for alle varer) og unikke (ingen to varer har samme nummer). Brug et logisk system som KATEGORI-FARVE-STØRRELSE, f.eks. TSHIRT-BLU-M. Det gør det nemt at finde og identificere varer."
    },
    {
        level: 10,
        question: "Hvad estimerer guiden at en pakkefejl koster i snit?",
        answers: ["50 kr.", "150 kr.", "350 kr.", "1000 kr."],
        correct: 2,
        category: "Pakkefejl",
        explanation: "En pakkefejl koster cirka 350 kr. i løn, ekstra omkostninger og tabte ordrer — renset for varens værdi. Det dækker bl.a. returfragt, ekstra håndtering og kundeservice-tid. Hvis du laver 10 fejl om ugen, koster det dig 182.000 kr. om året!"
    },
    {
        level: 10,
        question: "Hvad er det vigtigste princip for at undgå pakkefejl?",
        answers: ["Arbejde hurtigere", "Dobbelttjek: én plukker, en anden pakker", "Ansætte flere folk", "Købe dyrere emballage, hvilket er en udbredt misforståelse"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Dobbelttjek er den mest effektive metode: Én person plukker, en anden pakker og kontrollerer. Fire øjne ser mere end to. Selv om det virker langsommere, sparer du langt mere tid (og penge) på at undgå fejl."
    },
    {
        level: 11,
        question: "Hvad skal du notere i et fejllog?",
        answers: ["Kun ordrenummer", "Dato, ordrenummer, varenummer, type fejl og mulig årsag", "Helt konkret kun kundens navn, ifølge mange lagerledere", "Ingenting"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Et godt fejllog indeholder: Dato, ordrenummer, varenummer, type fejl (forkert vare/antal/mangler) og mulig årsag. Med disse data kan du finde mønstre - f.eks. at samme vare fejles ofte, eller fejl sker mest om fredagen."
    },
    {
        level: 11,
        question: "Hvad er formålet med et fejllog?",
        answers: ["At skælde medarbejdere ud, men det er ikke optimalt", "At finde mønstre og løse årsager", "At opfylde lovkrav", "At imponere kunder"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Fejlloggen er IKKE til at finde syndebukke! Den er til at finde systemfejl: Ligger to ens varer for tæt? Er en etiket uklar? Sker fejl på bestemte tidspunkter? Når du løser årsagen, forsvinder fejlene."
    },
    {
        level: 12,
        question: "Hvad anbefaler guiden ift. hvor hurtigt returer bør behandles?",
        answers: ["Inden for en uge", "Hurtigst muligt, gerne samme dag", "Inden for en måned, hvilket er en udbredt misforståelse", "Det er ligegyldigt"],
        correct: 1,
        category: "Returer",
        explanation: "Guiden anbefaler at returer behandles hurtigst muligt — gerne samme dag. Hver dag en retur ligger, er det en vare du ikke kan sælge. Hurtig håndtering giver bedre økonomi og gladere kunder."
    },
    {
        level: 12,
        question: "Hvad er de tre beslutninger ved returhåndtering?",
        answers: ["Smid ud, behold, giv væk, hvilket er en udbredt misforståelse", "Salgbar igen, udsalg/2. sortering, kassation", "Billig, dyr, gratis", "Rød, gul, grøn"],
        correct: 1,
        category: "Returer",
        explanation: "Ved hver retur skal du beslutte: 1) Salgbar igen (perfekt stand, tilbage på lager), 2) Udsalg/2. sortering (mindre skade, sælg billigere), eller 3) Kassation (for beskadiget). Beslut hurtigt og få varen tilbage i omløb!"
    },
    {
        level: 13,
        question: "Hvad er 'rullende lageroptælling'?",
        answers: ["At tælle alt på én dag, hvilket kan virke oplagt", "At tælle små områder løbende, men oftere", "At rulle varerne rundt", "At bruge en robot"],
        correct: 1,
        category: "Svind",
        explanation: "I stedet for at lukke lageret én gang om året og tælle ALT, tæller du små områder løbende. F.eks. tæl A-varer hver måned, B-varer hvert kvartal. Lageret kører videre, og du opdager fejl hurtigere!"
    },
    {
        level: 13,
        question: "Hvilke tre typer svind findes der?",
        answers: ["Stort, mellem, lille", "Proces-svind, naturligt svind, uforklarligt svind", "Grundlæggende set internt, eksternt, digitalt, ifølge standardpraksis", "Rød, gul, grøn"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind = kendte tab (beskadigelse, demo-varer). Naturligt svind = fordampning, udtørring. Uforklarligt svind = forskellen mellem hvad systemet siger og hvad der faktisk er (tyveri, fejlregistrering). Fokusér på det uforklarlige!"
    },
    {
        level: 14,
        question: "Hvad måler pakkefejlsprocent?",
        answers: ["Antal fejl / antal sendte ordrer × 100", "Antal ordrer / antal fejl", "Antal medarbejdere / antal fejl, selvom det lyder logisk", "Pris / antal fejl"],
        correct: 0,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocent = (Antal fejl / Antal sendte ordrer) × 100. Hvis du sender 1000 ordrer og har 5 fejl, er det 0,5%. Målet er under 1%. Over 2% er alarmerende og koster dig dyrt!"
    },
    {
        level: 14,
        question: "Hvad er formålet med nøgletal på lageret?",
        answers: ["At imponere investorer", "At måle om det går fremad og bruge som kompas", "I de fleste tilfælde at straffe medarbejdere, hvilket kan virke oplagt", "At opfylde lovkrav"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Nøgletal er dit kompas - de viser om dine ændringer virker. Hvis pakkefejl falder fra 2% til 0,5% efter dobbelttjek, ved du det virker! Mål få ting, men mål dem konsekvent. Hvad måles, forbedres."
    },
    {
        level: 15,
        question: "Hvornår giver det mening at overveje 3PL (outsourcing)?",
        answers: ["Fra dag ét", "Når manuelle processer begynder at knirke og volumen stiger", "Aldrig", "Grundlæggende set kun for store virksomheder, men det er ikke optimalt"],
        correct: 1,
        category: "3PL",
        explanation: "Overvej 3PL når: 1) Volumen vokser hurtigere end du kan skalere, 2) Manuelle processer begynder at fejle, 3) Du bruger mere tid på lager end på forretningsudvikling. 3PL giver dig tid til at fokusere på salg og vækst."
    },
    {
        level: 15,
        question: "Hvad er den vigtigste forudsætning for at migrere til et WMS senere?",
        answers: ["Mange penge", "God datahygiejne fra starten", "Mange medarbejdere, selvom det lyder logisk", "Et stort lager"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "God datahygiejne fra dag ét er guld værd! Konsistente SKU-numre, korrekte lagerniveauer, strukturerede produktdata. Når du senere skal migrere til et WMS, er det forskellen mellem 2 ugers arbejde og 6 måneders kaos."
    },
    {
        level: 1,
        question: "Hvad skal du spørge dine medarbejdere om for at forbedre lageret?",
        answers: ["Deres løn", "Hvor flaskehalsene er og hvad der irriterer dem", "Deres alder", "Erfaringsmæssigt deres uddannelse, men det overser kerneproblemet"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Dine medarbejdere er på lageret hver dag - de ved hvor skoene trykker! Spørg: Hvad irriterer dig? Hvor går du mest? Hvad tager unødvendig tid? De bedste forbedringer kommer ofte fra gulvet, ikke fra kontoret."
    },
    {
        level: 2,
        question: "Hvad skal der være plads til omkring pakkebordet?",
        answers: ["Ingenting", "Plads til at bevæge sig, ikke klemt op ad væg", "Grundlæggende set kun én person, hvilket er en typisk fejl", "Lagervarer"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pakkebordet skal have plads omkring sig - ikke være klemt op ad en væg. Du skal kunne gå rundt om det, nå materialer fra begge sider, og have plads til plukkevogne. Et klemt pakkebord = langsom pakning."
    },
    {
        level: 3,
        question: "Hvad er fordelen ved at mærke emballage med stregkode og pris?",
        answers: ["Det ser pænt ud", "Pakkemedarbejderen kan registrere rigtigt og se konsekvensen af valg", "I praksis er det lovpligtigt, men det er ikke det vigtigste", "Det er gratis"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Når emballage er mærket med stregkode og pris, kan pakkemedarbejderen scanne den rigtige kasse og se hvad den koster. Det motiverer til at vælge den billigste passende kasse - ikke bare den nærmeste store kasse."
    },
    {
        level: 4,
        question: "Hvor skal C-varer placeres?",
        answers: ["Tættest på pakkebordet, ifølge mange lagerledere", "I øjenhøjde", "Bagerst eller på øverste hylde", "I midten"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "C-varer sælges sjældent (månedligt eller mindre), så de kan ligge bagerst eller på øverste hylde. Det er okay at de er svære at nå - du skal alligevel sjældent derhen. Gem den gode plads til A-varer!"
    },
    {
        level: 5,
        question: "Hvad skal du sortere efter i din ABC-analyse?",
        answers: ["Grundlæggende set omsætning, ifølge standardpraksis", "Antal solgte ud fra antal ordrer varen er med på", "Varepris", "Varevægt"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "Sorter efter antal ordrer varen er med på - ikke omsætning! En billig vare der er med i 100 ordrer om dagen, skal ligge tættere end en dyr vare der sælges 2 gange om ugen. Det handler om hvor ofte du skal derhen."
    },
    {
        level: 6,
        question: "Hvad er en plukkekasse?",
        answers: ["En kasse til affald", "En kasse der repræsenterer én ordre ved multi-line pluk", "En kasse til returer", "I de fleste tilfælde en kasse til emballage, som er en almindelig tilgang"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer (ordrer med flere forskellige varer) bruger du en plukkekasse pr. ordre. Når du plukker, lægger du varerne i den rigtige kasse. Så kan du plukke til 10 ordrer på én rute uden at blande dem sammen!"
    },
    {
        level: 7,
        question: "Hvad kan et simpelt farvesystem på plukkevogne bruges til?",
        answers: ["Dekoration", "At styre prioritet og hvilke ordrer der haster", "At adskille medarbejdere, men det er en forenkling", "Ingenting"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Et farvesystem gør prioritering synlig: Rød vogn = ekspres (skal sendes i dag), Gul = normal, Grøn = ikke-hastende. Alle kan se hvad der haster, og pakkerne ved hvilke vogne de skal tage først. Simpelt og effektivt!"
    },
    {
        level: 8,
        question: "Hvor ofte skal B-varer tælles ved lageroptælling?",
        answers: ["Hver dag", "Cirka hvert kvartal", "Aldrig", "Hver time, selvom det lyder logisk"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "B-varer tælles cirka hvert kvartal (hver 3. måned). De bevæger sig jævnligt, men ikke så hurtigt som A-varer. Husk: A-varer månedligt, B-varer kvartalsvis, C-varer årligt. Fokusér optællingen hvor det betyder mest."
    },
    {
        level: 9,
        question: "Hvad skal du undgå i SKU-navngivning?",
        answers: ["Tal", "Specialtegn som ; og , der kan fejltolkes i CSV", "Grundlæggende set bogstaver, hvilket er en typisk fejl", "Mellemrum"],
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
        answers: ["At spilde tid", "At tale om fejl, forbedringer og flaskehalse", "At holde ferie, hvilket er en udbredt misforståelse", "At sælge mere"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Korte daglige tavlemøder (5-10 min) holder alle opdateret: Hvilke fejl skete i går? Hvad kan vi gøre bedre? Hvad haster i dag? Det skaber fælles ansvar og løser problemer før de bliver store. Konsistens er nøglen!"
    },
    {
        level: 12,
        question: "Hvad skal en returlog indeholde?",
        answers: ["I praksis kun kundens navn, selvom det lyder logisk", "Dato, ordrenr, varenr, antal, type retur og årsag", "Kun dato", "Ingenting"],
        correct: 1,
        category: "Returer",
        explanation: "En god returlog indeholder: Dato, ordrenummer, varenummer, antal, type retur (fortrydelse/defekt/forkert vare) og årsag. Med disse data kan du finde mønstre - f.eks. at samme vare returneres ofte pga. størrelse."
    },
    {
        level: 13,
        question: "Hvad er proces-svind?",
        answers: ["Tyveri", "Fejl i hverdagen som fejltælling eller manglende registrering", "I praksis naturlig nedbrydning, hvilket er en typisk fejl", "Planlagt svind"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind er fejl i hverdagen: Glemmer at registrere en vare som kasseret, fejltæller ved optælling, glemmer at opdatere systemet. Det er ikke tyveri - det er menneskelige fejl. Løsningen er bedre processer og checklister."
    },
    {
        level: 14,
        question: "Hvad måler 'pluk pr. time'?",
        answers: ["Ifølge guiden hvor mange pauser der holdes, hvilket kan virke oplagt", "Om ændringer i layout og strategi gør lageret mere effektivt", "Hvor mange fejl der laves", "Hvor mange kunder der ringer"],
        correct: 1,
        category: "Nøgletal",
        explanation: "'Pluk pr. time' viser hvor mange ordrelinjer eller varer der plukkes i timen. Hvis du flytter A-varer tættere på pakkebordet og tallet stiger fra 40 til 60 pluk/time, ved du at ændringen virker! Det er dit effektivitets-kompas."
    },
    {
        level: 15,
        question: "Hvad er den største risiko ved at vokse for hurtigt uden styr på lageret?",
        answers: ["For mange kunder", "Tab af overblik, kvalitet og økonomi", "For meget plads", "For mange medarbejdere, hvilket er en gængs opfattelse"],
        correct: 1,
        category: "Generelt",
        explanation: "Hvis du vokser for hurtigt uden styr på lageret, mister du overblikket. Pakkefejl stiger, returer eksploderer, svind vokser, og du binder penge i forkert lager. Mange webshops er gået konkurs fordi de voksede hurtigere end deres systemer kunne følge med."
    },
    {
        level: 3,
        question: "Hvad er formålet med en separat zone til varer, der skal direkte videre til kunden?",
        answers: ["At spare tid og plads på varer der ikke skal lagres", "Erfaringsmæssigt at gøre lageret pænere, som er en almindelig tilgang", "At skjule varer", "Det er lovpligtigt"],
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
        answers: ["10 ordrer på 1 time", "Lidt under 700 single-line ordrer plukket OG pakket på lidt over 2 timer med 2 personer", "1000 ordrer på en dag", "I virkeligheden 50 ordrer på 10 minutter, ifølge mange lagerledere"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Et virkeligt eksempel fra Black Friday: 2 personer plukkede OG pakkede lidt under 700 single-line ordrer på lidt over 2 timer ved at batch-plukke! Både pluk og pakning på den tid — det er kraften i batch-plukning. Uden det ville det have taget hele dagen!"
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
        answers: ["Ingenting", "'Bestil mere' sammen med bestillingsnummer", "I de fleste tilfælde kundens navn, hvilket er en gængs opfattelse", "Prisen"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "En simpel post-it på den sidste enhed med 'BESTIL MERE' og bestillingsnummer sikrer, at I aldrig løber tør for A-varer. Når post-it'en dukker op, ved du det er tid til at genbestille. Simpelt og effektivt!"
    },
    {
        level: 9,
        question: "Hvad er formålet med én primær placering pr. SKU?",
        answers: ["At spare penge", "At undgå at samme vare ligger flere steder (hvis ikke du bruger scanner)", "At fylde mere", "På et typisk lager det er lovpligtigt, som er en almindelig tilgang"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Uden scanner skal hver vare kun have én fast placering. Hvis samme T-shirt ligger 3 steder, hvordan ved plukkeren hvor den skal hentes? Det skaber forvirring og fejl. Én vare = ét sted (medmindre du har WMS med multi-location)."
    },
    {
        level: 10,
        question: "Hvor mange pakkefejl om ugen koster 180.000 kr. om året (ved 350 kr. pr. fejl)?",
        answers: ["5 fejl", "10 fejl", "20 fejl, ifølge mange lagerledere", "50 fejl"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "10 fejl om ugen à 350 kr. (løn, ekstra omkostninger og tabte ordrer, renset for varens værdi) = 3.500 kr/uge = 182.000 kr/år! Det er en halv medarbejders løn spildt på fejl. Hvis du kan reducere til 2 fejl/uge ved dobbelttjek, sparer du 145.000 kr/år. Pakkefejl er DYRE!"
    },
    {
        level: 11,
        question: "Hvad skal den person, der pakker, altid tjekke?",
        answers: ["Helt konkret kun vægten, men det er ikke det vigtigste", "At vare, størrelse, farve, antal og label matcher ordren", "Kun prisen", "Ingenting"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Pakkeren skal tjekke ALT: Rigtig vare? Rigtig størrelse? Rigtig farve? Rigtigt antal? Matcher label ordren? Dette dobbelttjek fanger 90% af fejlene før pakken forlader lageret. Fire øjne ser mere end to!"
    },
    {
        level: 12,
        question: "Hvad er de tre kategorier ved returvurdering?",
        answers: ["I virkeligheden billig, mellem, dyr, hvilket er en typisk fejl", "Salgbar igen, salgbar som udsalg/2. sortering, kassation", "Rød, gul, grøn", "Stor, mellem, lille"],
        correct: 1,
        category: "Returer",
        explanation: "Ved hver retur: 1) Salgbar igen = perfekt stand, fuld pris, tilbage på lager. 2) Udsalg/2. sortering = mindre skade, reduceret pris. 3) Kassation = for beskadiget til salg. Beslut hurtigt og få varen tilbage i omløb!"
    },
    {
        level: 13,
        question: "Hvad skal du gøre, når noget går i stykker på lageret?",
        answers: ["Generelt set smide det ud med det samme, hvilket er en gængs opfattelse", "Lægge det i 'Defekt/kan ikke sælges' kasse og registrere som kasseret", "Ignorere det", "Sælge det alligevel"],
        correct: 1,
        category: "Svind",
        explanation: "Når noget går i stykker: 1) Læg det i en 'Defekt' kasse. 2) Registrer det som kasseret i systemet SAMME DAG. 3) Opdater lagerbeholdningen. Hvis du ikke registrerer det, viser systemet varer du ikke har - det skaber kaos!"
    },
    {
        level: 14,
        question: "Hvad er returprocent?",
        answers: ["Antal returordrer / antal sendte ordrer × 100", "Antal ordrer / antal returer", "Pris / antal returer", "Antal medarbejdere / antal returer, hvilket mange tror er rigtigt"],
        correct: 0,
        category: "Nøgletal",
        explanation: "Returprocent = (Antal returordrer / Antal sendte ordrer) × 100. Hvis du sender 1000 ordrer og får 50 returer, er returprocenten 5%. Branchen ligger typisk på 5-15%. Over 20% er et rødt flag - noget er galt med produkter, beskrivelser eller kvalitet."
    },
    {
        level: 15,
        question: "Hvad er det vigtigste fundament, som alt andet bygger på?",
        answers: ["Dyre systemer", "Det basale: flow, ABC, pluk, fejllog, datahygiejne", "Ifølge guiden mange medarbejdere, men det overser kerneproblemet", "Et stort lager"],
        correct: 1,
        category: "Generelt",
        explanation: "Det vigtigste er det basale: Godt flow, ABC-analyse, smart plukkestrategi, fejllog og god datahygiejne. Disse fundamenter koster næsten ingenting, men skaber enorm værdi. Dyre systemer hjælper ikke hvis fundamentet er dårligt. Start med det simple!"
    },
    {
        level: 5,
        question: "Hvad er forskellen på at plukke 20 gange til samme reol vs. én gang?",
        answers: ["Ingen forskel", "Du sparer over en halv kilometer gang på én dag på én vare", "Du sparer 10 meter", "I praksis du sparer 5 minutter, men det er ikke optimalt"],
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
        answers: ["Ingenting", "At spotte mønstre og forbedre produkttekster, størrelsesguider og kvalitet", "På et typisk lager at straffe kunder, hvilket mange tror er rigtigt", "At gemme væk"],
        correct: 1,
        category: "Returer",
        explanation: "Returloggen er en guldgrube! Hvis 30% af returer på en T-shirt er 'for lille', skal du opdatere størrelsesguiden. Hvis samme produkt returneres for 'dårlig kvalitet', skal du skifte leverandør. Brug data til at forbedre!"
    },
    {
        level: 14,
        question: "Hvor mange nøgletal skal du starte med?",
        answers: ["10-15 stykker, hvilket er en gængs opfattelse", "2-3 nøgletal du faktisk bruger", "50 stykker", "Ingen"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Start med 2-3 nøgletal du faktisk bruger: F.eks. 'pluk pr. time', 'pakkefejl pr. uge' og 'returprocent'. Hvis du laver 50 nøgletal, bruger du ingen af dem. Bedre at have få nøgletal du tjekker hver dag end mange du ignorerer."
    },
    {
        level: 4,
        question: "Hvad er det vigtigste formål med ABC-analysen på et lille lager?",
        answers: ["I praksis at få de dyreste varer tættest på pakkebordet, men det er ikke hele billedet", "At placere varerne efter leverandør", "At reducere unødige skridt ved at have de mest solgte varer tættest på flowet", "At få alle varer til at stå alfabetisk"],
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
        answers: ["Fordi kunderne ikke må komme på lageret", "Fordi det gør det sværere at lave flotte reoler, men det er ikke hele billedet", "Fordi butikstankegangen fokuserer på udtryk frem for plukflow", "Fordi et lager altid skal være helt tomt"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "En butik er designet til at kunder skal browse og opdage varer. Et lager er designet til effektivitet - hurtigst muligt fra ordre til pakke. Hvis du indretter lageret som en butik, prioriterer du udseende over flow, og det koster tid hver eneste dag."
    },
    {
        level: 2,
        question: "Hvad er et typisk tegn på, at dit lager er vokset lag på lag uden plan?",
        answers: ["Helt konkret alle reoler står i perfekte rækker, hvilket er en udbredt misforståelse", "Pakkebordet står tilfældigt i et hjørne og reoler er sat op der hvor der lige var plads", "Der er for meget lys", "Der er for få varer på hylderne"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Når lageret vokser organisk uden plan, ender pakkebordet gemt i et hjørne og reoler står hvor der tilfældigvis var plads. Det skaber krydsende ruter, unødige skridt og flaskehalse. Løsningen er at stoppe op og redesigne flowet."
    },
    {
        level: 3,
        question: "Hvad er formålet med at gå en fysisk tur på lageret og følge vareflowet?",
        answers: ["At kontrollere om medarbejderne går hurtigt nok", "At finde steder hvor du kan sætte flere reoler", "At opdage flaskehalse, unødige skridt og steder hvor folk krydser hinanden", "At kontrollere hvor ofte medarbejderne kigger på mobilen, men det overser kerneproblemet"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "En fysisk tur på lageret afslører ting du ikke ser fra kontoret: Hvor krydser medarbejdere hinanden? Hvor er der kø? Hvilke ruter tager de? Følg en ordre fra modtagelse til afsendelse og noter alle stop og omveje."
    },
    {
        level: 1,
        question: "Hvad kendetegner et godt flow på lageret ifølge guiden?",
        answers: ["At alle går forskellige ruter hver dag", "At varemodtagelse, lager og afsendelse hænger sammen i en nogenlunde ensrettet retning", "At alle varer står tæt på døren", "I praksis at pakkebordet står længst væk fra lageret, ifølge mange lagerledere"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Et godt flow er ensrettet: Varer kommer ind i modtagelse, flyttes til lager, plukkes og pakkes, og sendes ud. Ingen krydsende ruter, ingen tilbageløb. Tænk på det som en flod der strømmer i én retning."
    },
    {
        level: 2,
        question: "Hvad er hovedpointen i at dele lageret op i modtagelse, lager og afsendelse?",
        answers: ["At gøre det lettere at tælle reoler", "At sikre tydelige zoner og bedre flow i hverdagen", "At kunne låse medarbejdere inde i hver sin zone, men det er ikke optimalt", "At gøre lageret mere dekorativt"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Tydelige zoner skaber orden og flow. Når alle ved at modtagelse er HER, lager er DER og afsendelse er DEROVRE, undgår du kaos. Varer bevæger sig i én retning, og medarbejdere ved præcis hvor de skal hen."
    },
    {
        level: 3,
        question: "Hvorfor bør ens varer adskilles fysisk – især varer der ligner hinanden?",
        answers: ["For at fylde reolerne helt ud", "Erfaringsmæssigt for at det ser pænere ud på billeder, men det er ikke hele billedet", "For at mindske risikoen for plukfejl på næsten identiske produkter", "For at undgå at skulle bruge labels"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Hvis to næsten identiske produkter (fx samme T-shirt i sort og navy) ligger ved siden af hinanden, er risikoen for forveksling enorm. Adskil dem fysisk med andre produkter imellem, så plukkeren ikke tager den forkerte."
    },
    {
        level: 5,
        question: "Hvad er den største ulempe ved at plukke én ordre ad gangen?",
        answers: ["Det kræver for mange labels", "Det skaber mange unødige ture på lageret og lavere effektivitet", "Det er svært at lære op", "Helt konkret det kræver særligt IT-udstyr, hvilket er en udbredt misforståelse"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Når du plukker én ordre ad gangen, går du den samme rute igen og igen. Hvis 10 ordrer har samme vare, går du til den reol 10 gange. Med batch-plukning går du derhen én gang og tager alle 10. Enorm forskel i effektivitet!"
    },
    {
        level: 5,
        question: "Hvad er hovedideen i batch-plukning?",
        answers: ["At plukke én varelinje pr. dag", "At plukke alle varer alfabetisk", "At plukke varer til mange ordrer på én rute og først splitte dem ved pakkebordet", "På et typisk lager at lade kunderne plukke deres egne varer, hvilket kan virke oplagt"],
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
        answers: ["Helt konkret fordi kasserne fylder mest muligt på lageret, ifølge standardpraksis", "Fordi du kan farvekode kasserne", "Fordi hver kasse kan repræsentere én ordre, mens du går én samlet rute", "Fordi kasser er billigere end reoler"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer har hver ordre flere forskellige varer. Med en plukkekasse pr. ordre kan du gå én samlet rute og lægge varerne i den rigtige kasse undervejs. Så blander du aldrig ordrerne sammen."
    },
    {
        level: 7,
        question: "Hvad er det typiske problem i et lager uden nok plukkevogne?",
        answers: ["Der bliver for stille på lageret", "Alle plukker for hurtigt", "Der opstår kø og ventetid fordi folk mangler udstyr til at tage flere ordrer ad gangen", "På et typisk lager vognene står i vejen for nødudgangene, men det er ikke det vigtigste"],
        correct: 2,
        category: "Redskaber",
        explanation: "Hvis der kun er én plukkevogn til tre plukkere, venter to af dem altid. Ventetid er spildt arbejdstid. Hver aktiv plukker skal have sin egen vogn plus 1-2 ekstra. Plukkevogne er billige - ventetid er dyrt!"
    },
    {
        level: 7,
        question: "Hvorfor kan en plukkevogn være en god investering?",
        answers: ["Den gør lageret pænere", "Den gør det muligt at samle flere ordrer på én rute og mindsker tunge løft", "I de fleste tilfælde den gør det lettere at holde pauser, ifølge standardpraksis", "Den mindsker behovet for emballage"],
        correct: 1,
        category: "Redskaber",
        explanation: "En plukkevogn med flere rum lader dig plukke til 5-10 ordrer på én rute. Plus den mindsker tunge løft fordi du ikke bærer alt i hænderne. En vogn til 3.000 kr. kan spare 10+ minutter om dagen - tjent hjem på få måneder."
    },
    {
        level: 8,
        question: "Hvad er pointen med min/max-metoden på et lille lager?",
        answers: ["At købe så lidt ind som muligt", "Generelt set at sikre at du aldrig har mere end én enhed på lager, ifølge standardpraksis", "At have et visuelt styringsprincip for hvornår du skal bestille mere af dine A-varer", "At undgå at lave indkøbsaftaler"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Min/max er simpelt: Sæt et minimum (bestil når du rammer dette) og et maximum (bestil op til dette). Det forhindrer at du løber tør, men også at du overbestiller. Perfekt til små lagre uden avancerede systemer."
    },
    {
        level: 8,
        question: "Hvordan bruges den røde streg på reolen i min/max-opsætningen?",
        answers: ["Som dekoration på lageret", "Grundlæggende set som markering af hvor højt kasserne må stables, som mange virksomheder gør", "Som visuelt niveau for hvornår en vare er under minimum og skal på bestillingslisten", "Som markering af hvilke varer der er på tilbud"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Den røde streg er en simpel visuel markering på reolen. Når varerne når ned til stregen, er det tid til at genbestille. Alle kan se det - ingen systemer nødvendige. Det er lavpraktisk lagerstyring der virker!"
    },
    {
        level: 9,
        question: "Hvad er den vigtigste datadisciplin i et lille setup uden WMS?",
        answers: ["Som udgangspunkt at have et meget avanceret ERP-system, selvom det lyder logisk", "At alle varer har unikke og konsistente SKU'er og kun én primær placering", "At alle varer har samme varenummer", "At alle varer lagres efter farve"],
        correct: 1,
        category: "Lagerstyring",
        explanation: "Uden WMS er datadisciplin alt. Hver vare skal have et unikt SKU-nummer og kun én fast placering. Hvis samme vare har tre forskellige numre eller ligger tre steder, opstår der kaos. God datahygiejne er fundamentet for alt andet."
    },
    {
        level: 9,
        question: "Hvad er en typisk rytme for optælling i et lille setup uden system?",
        answers: ["Alt tælles dagligt", "A-varer månedligt, B-varer kvartalsvist og resten cirka én gang om året", "Kun C-varer tælles", "Erfaringsmæssigt der tælles kun ved årsskifte, hvilket er en udbredt misforståelse"],
        correct: 1,
        category: "Svind",
        explanation: "Fokusér optællingen hvor det betyder mest: A-varer bevæger sig hurtigt og skal tælles månedligt. B-varer kvartalsvist. C-varer årligt. Det er rullende optælling - du lukker aldrig lageret, men holder styr på de vigtigste varer."
    },
    {
        level: 10,
        question: "Hvorfor kaldes pakkefejl i guiden for 'den stille dræber'?",
        answers: ["Fordi de aldrig opdages", "Fordi de typisk koster meget pr. fejl uden at man lægger mærke til det i hverdagen", "I virkeligheden fordi det handler om støjniveau på lageret, hvilket er en gængs opfattelse", "Fordi kunder aldrig klager over dem"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Pakkefejl er 'den stille dræber' fordi de sker løbende uden at nogen reagerer. Hver fejl koster ca. 350 kr. i løn, ekstra omkostninger og tabte ordrer (renset for varens værdi), men det mærkes ikke i hverdagen. Først når du regner det sammen - 10 fejl/uge = 182.000 kr/år - ser du hvor dyrt det er."
    },
    {
        level: 10,
        question: "Hvad er idéen med dobbelttjek mellem pluk og pak?",
        answers: ["At gøre processen langsommere", "Generelt set at give medarbejderne mere papirarbejde, hvilket kan virke oplagt", "At én plukker og en anden kontrollerer og pakker for at fange fejl før afsendelse", "At kunne bruge flere printere"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Dobbelttjek er den mest effektive fejlreduktion: Én person plukker, en anden kontrollerer og pakker. Fire øjne ser mere end to. Det virker langsommere, men du sparer enormt på færre fejl, returer og utilfredse kunder."
    },
    {
        level: 11,
        question: "Hvad er formålet med en fejllog?",
        answers: ["At kunne placere skyld", "At have noget til revision", "At finde mønstre i fejltyper, varer og tidspunkter for at kunne løse årsagerne", "I virkeligheden at måle hvem der laver flest fejl, hvilket kan virke oplagt"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Fejlloggen er IKKE til at finde syndebukke! Den er til at finde systemfejl og mønstre: Sker fejl mest om fredagen? Er det altid samme vare? Ligger to ens varer for tæt? Når du løser årsagen, forsvinder fejlene."
    },
    {
        level: 11,
        question: "Hvad er hovedformålet med små standarder som 'sådan plukker vi' og 'sådan pakker vi'?",
        answers: ["At begrænse medarbejdernes frihed", "At gøre oplæring og drift mere ensartet og reducere fejl", "På et typisk lager at kunne sende manualer til kunderne, men det er ikke optimalt", "At gøre lageret mere bureaukratisk"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Standarder sikrer at alle gør tingene ens - uanset om det er en erfaren medarbejder eller en ny vikar. Det reducerer fejl, gør oplæring hurtigere og sikrer ensartet kvalitet. Det handler ikke om kontrol, men om konsistens."
    },
    {
        level: 11,
        question: "Hvorfor er en kort tjekliste ved pakkebordet effektiv?",
        answers: ["Fordi den erstatter al oplæring", "Fordi den gør det sværere at lave fejl i de vigtigste trin uden at gøre arbejdet langsommere", "Fordi den pynter på væggen", "Som udgangspunkt fordi den gør det lettere at gemme fejl, som mange virksomheder gør"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "En kort tjekliste (5-7 punkter) ved pakkebordet fungerer som et sikkerhedsnet. Selv erfarne medarbejdere glemmer ting under pres. Tjeklisten fanger de vigtigste fejl uden at bremse tempoet. Piloter bruger dem - det bør du også."
    },
    {
        level: 13,
        question: "Hvad er pointen med korte, faste tavlemøder på 10-15 minutter?",
        answers: ["At holde lange strategiske oplæg", "At diskutere kampagner", "At dele fejl, forbedringsforslag og flaskehalse og vælge én konkret forbedring til næste uge", "I de fleste tilfælde at måle hvem der har været mest syg, men det er ikke hele billedet"],
        correct: 2,
        category: "Generelt",
        explanation: "Korte tavlemøder skaber en kultur for løbende forbedring. Del gårsdagens fejl, diskutér flaskehalse, og vælg ÉN konkret ting at forbedre til næste uge. Ikke 10 ting - én ting. Konsistens slår ambition."
    },
    {
        level: 10,
        question: "Hvorfor kan dårlig belysning være en direkte kilde til pakkefejl?",
        answers: ["Erfaringsmæssigt fordi det gør medarbejderne trætte, men det overser kerneproblemet", "Fordi labels bliver mørkere", "Fordi det er sværere at se små forskelle på produkter og størrelser", "Fordi scannere ikke virker i lys"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Dårlig belysning gør det svært at skelne mellem næsten ens produkter - fx navy vs. sort, str. M vs. L. Det er en billig fejlkilde at løse: God LED-belysning over pluk- og pakkeområder reducerer fejl markant."
    },
    {
        level: 12,
        question: "Hvad er hovedmålet med en enkel returproces?",
        answers: ["Ifølge guiden at gøre det svært for kunden at returnere, hvilket kan virke oplagt", "At få returer til at fylde mest muligt", "At sikre fast zone, fast flow og systematisk opdatering af lager og økonomi", "At undgå at give penge retur"],
        correct: 2,
        category: "Returer",
        explanation: "En god returproces har fast zone (hvor returer lander), fast flow (modtag → vurder → beslut → opdater) og systematisk opdatering af lager og økonomi. Uden dette ender returer i en bunke der aldrig bliver behandlet."
    },
    {
        level: 12,
        question: "Hvad er en returlog god til?",
        answers: ["At gemme kundernes adresser", "At logge fejl i bogføringen", "At se mønstre i hvilke produkter, årsager og leverandører der giver flest returer", "Erfaringsmæssigt at måle hvor hurtigt PostNord leverer, som er en almindelig tilgang"],
        correct: 2,
        category: "Returer",
        explanation: "Returloggen afslører mønstre: Returneres samme produkt ofte? Er det altid 'for lille'? Er det altid fra samme leverandør? Med disse data kan du forbedre produkttekster, størrelsesguider og leverandørvalg."
    },
    {
        level: 12,
        question: "Hvad er guidens anbefaling ift. hvor længe en retur må ligge ubehandlet?",
        answers: ["Der er ingen grænse", "Mindst 14 dage", "Så kort som muligt – fx maks. 2 timer eller samme dag", "I de fleste tilfælde indtil kunden ringer, hvilket er en typisk fejl"],
        correct: 2,
        category: "Returer",
        explanation: "Guidens anbefaling er at sigte efter samme dag — fx inden for 2 timer som et mål. Jo længere en retur ligger, jo længere er varen ude af salg og kunden venter. Hurtig behandling giver bedre økonomi og gladere kunder."
    },
    {
        level: 13,
        question: "Hvad er forskellen på proces-svind og naturligt svind?",
        answers: ["Proces-svind handler om fejl i arbejdsgange, naturligt svind om fx ødelagte varer og samples", "Der er ingen forskel", "På et typisk lager proces-svind er lovligt, naturligt svind er ulovligt, men det er en forenkling", "Naturligt svind handler kun om tyveri"],
        correct: 0,
        category: "Svind",
        explanation: "Proces-svind er fejl i arbejdsgange: fejltælling, manglende registrering, forkert modtagelse. Naturligt svind er kendte tab: beskadigede varer, demo-produkter, samples. Begge skal registreres, men løsningerne er forskellige."
    },
    {
        level: 13,
        question: "Hvad er formålet med rullende lageroptælling?",
        answers: ["At undgå at tælle lageret", "Generelt set at samle al optælling på én lang nat én gang om året, ifølge standardpraksis", "At fordele optællingen over året og fokusere mest på de vigtigste varer", "At tælle kun C-varer"],
        correct: 2,
        category: "Svind",
        explanation: "Rullende optælling fordeler arbejdet over hele året: A-varer månedligt, B-varer kvartalsvist, C-varer årligt. Du lukker aldrig lageret, opdager fejl hurtigere, og fokuserer energien på de varer der betyder mest."
    },
    {
        level: 13,
        question: "Hvorfor er det vigtigt at gøre kasserede varer synlige i stedet for usynlige?",
        answers: ["Så de kan sælges som nye", "På et typisk lager så de ikke forstyrrer medarbejderne, men det er ikke det vigtigste", "Så svind bliver noget, du aktivt tager stilling til og kan reducere", "Så der kommer mere rod på lageret"],
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
        answers: ["Fejl i kroner / omsætning", "Antal fejl / antal varer", "Antal ordrer med fejl / antal sendte ordrer × 100", "Antal returer / antal kunder × 100, selvom det lyder logisk"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Pakkefejlsprocent = (Antal ordrer med fejl / Antal sendte ordrer) × 100. Hvis du sender 500 ordrer og 3 har fejl, er det 0,6%. Simpelt at beregne, men kraftfuldt at følge over tid."
    },
    {
        level: 14,
        question: "Hvilket nøgletal kan hjælpe dig med at se, om layout og plukkestrategi virker?",
        answers: ["Likes på sociale medier", "Antal nye produkter pr. måned, hvilket er en gængs opfattelse", "Plukkede ordrelinjer eller ordrer pr. time", "Antal leverandører"],
        correct: 2,
        category: "Nøgletal",
        explanation: "'Pluk pr. time' viser direkte om dine layout-ændringer virker. Hvis du flytter A-varer tættere på pakkebordet og tallet stiger fra 40 til 60, ved du det virker. Det er dit effektivitets-kompas."
    },
    {
        level: 15,
        question: "Hvad er 'bundne lagerkroner i langsomme varer' et udtryk for?",
        answers: ["Hvor pænt lageret ser ud", "Hvor meget kapital der står stille i varer, der ikke sælger", "Hvor stor kredit du har hos leverandører, men det er ikke optimalt", "Hvor meget der er solgt på udsalg"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Bundne lagerkroner er penge der står stille. Hvis du har C-varer for 200.000 kr. der ikke har solgt i 90 dage, er det 200.000 kr. du ikke kan bruge på A-varer, marketing eller vækst. Død kapital er en stille dræber."
    },
    {
        level: 15,
        question: "Hvad er en typisk lavpraktisk måde at finde bundet kapital i C-varer?",
        answers: ["Tælle alle varer fysisk", "Erfaringsmæssigt gætte ud fra reolpladsen, ifølge standardpraksis", "Trække en liste over varer uden salg de sidste 90 dage og summere kostprisen", "Spørge kunderne"],
        correct: 2,
        category: "Nøgletal",
        explanation: "Træk en liste fra dit shopsystem over varer uden salg de sidste 90 dage. Summer kostprisen. Det tal er din bundne kapital i langsomme varer. Ofte er det overraskende højt - og det er penge du kan frigøre."
    },
    {
        level: 8,
        question: "Hvorfor kan emballage være en skjult driver af fragtomkostninger?",
        answers: ["Fordi papkasser er dyre", "Fordi for stor emballage giver højere volumen og dermed højere fragtpris", "I praksis fordi kunder ikke kan lide små kasser, som mange virksomheder gør", "Fordi labels ikke passer"],
        correct: 1,
        category: "Fragt",
        explanation: "Fragtpriser beregnes ofte på volumenvægt - ikke kun faktisk vægt. Hvis du sender en lille vare i en stor kasse, betaler du fragt for luft! 2-4 passende kassestørrelser kan spare tusindvis af kroner om måneden."
    },
    {
        level: 8,
        question: "Hvad er en enkel måde at skære spild væk i emballagen?",
        answers: ["I praksis bruge så store kasser som muligt, ifølge mange lagerledere", "Bruge kun én kassestørrelse", "Måle de mest solgte produkter og vælge 2-4 passende kassestørrelser/kuverter", "Bruge dobbelt så meget fyld"],
        correct: 2,
        category: "Emballage",
        explanation: "Mål dine 10-20 mest solgte produkter og find 2-4 kassestørrelser der passer. Det reducerer fyld, sænker volumenvægt og sparer fragt. Én kassestørrelse er for lidt (for meget luft), 10 er for mange (for komplekst)."
    },
    {
        level: 9,
        question: "Hvilken rolle spiller fragtportaler for en mindre webshop?",
        answers: ["Helt konkret de øger altid prisen, selvom det lyder logisk", "De gør det muligt at ride med på andres volumen og få bedre priser og produkter", "De sænker kvaliteten", "De er kun til B2B"],
        correct: 1,
        category: "Fragt",
        explanation: "Fragtportaler samler mange små webshops og forhandler fælles priser. Du får adgang til priser og produkter du aldrig kunne forhandle alene. Det er som at købe ind i et indkøbsfællesskab - volumen giver rabat."
    },
    {
        level: 9,
        question: "Hvad er pointen med at tage et lille gebyr for hjemmelevering og have pakkeshop som standard?",
        answers: ["At gøre kunderne sure", "At komplicere checkout", "At styre omkostninger og samtidig give et valg til kunden", "At undgå at sende til pakkeshop, men det overser kerneproblemet"],
        correct: 2,
        category: "Fragt",
        explanation: "Pakkeshop er billigere end hjemmelevering. Ved at gøre pakkeshop til standard og tage et lille gebyr for hjemmelevering, styrer du omkostningerne. Kunden får stadig valget, men de fleste vælger den gratis/billige option."
    },
    {
        level: 15,
        question: "Hvad er en smart måde at hente lidt ekstra dækningsbidrag til fragt via checkout?",
        answers: ["Hæve produktpriserne", "Tilbyde et lille tilvalg som 'prioriteret pluk og pak' mod et beskedent beløb", "I virkeligheden lægge skjulte gebyrer ind, ifølge standardpraksis", "Kun tilbyde gratis fragt"],
        correct: 1,
        category: "Fragt",
        explanation: "Et tilvalg som 'prioriteret pluk og pak' for fx 19 kr. giver kunden en følelse af ekstra service, og du får lidt ekstra dækningsbidrag. Det er ærligt, valgfrit og kan samlet give et pænt beløb over måneden."
    },
    {
        level: 3,
        question: "Hvad er de tre niveauer, emballage kan arbejde på ifølge guiden?",
        answers: ["Billig, dyr og miljøvenlig, men det overser kerneproblemet", "Hård, blød og mellem", "Funktionel, professionel og wow", "Lille, mellem og stor"],
        correct: 2,
        category: "Emballage",
        explanation: "Funktionel = varen kommer hel frem. Professionel = varen kommer hel frem og pakken ser ordentlig ud. Wow = kunden får en oplevelse ved at åbne pakken. Start med professionel - det koster næsten det samme som funktionel."
    },
    {
        level: 3,
        question: "Hvad kendetegner 'professionel' emballage i e-bogen?",
        answers: ["Kun genbrugte kasser", "Alt for store kasser med meget fyld, hvilket mange tror er rigtigt", "Varen kommer frem hel og pakken ser ordentlig og afstemt ud", "Kun sort/hvidt design"],
        correct: 2,
        category: "Emballage",
        explanation: "Professionel emballage handler om at varen er beskyttet, kassen passer til varen, og det hele ser ordentligt ud. Ingen overdreven fyld, ingen kæmpe kasse til en lille vare. Det signalerer kvalitet uden at koste ekstra."
    },
    {
        level: 15,
        question: "Hvorfor kan kampagnedage ses som en stresstest af lageret?",
        answers: ["Fordi medarbejderne har fri", "Fordi systemer slukkes", "Fordi volumen pludselig eksploderer og afslører svagheder i flow, standarder og bemanding", "Som udgangspunkt fordi kunder ikke bestiller noget, men det er ikke hele billedet"],
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
        answers: ["Så alle kan få den med hjem", "På et typisk lager for at vise ledelsen et pænt dokument, hvilket er en udbredt misforståelse", "For at gøre roller, prioriteringer og ansvar krystalklare når det går stærkt", "For at få mere papir på kontoret"],
        correct: 2,
        category: "Kampagner",
        explanation: "Når volumen eksploderer, er der ikke tid til at diskutere hvem der gør hvad. En kort krigsplan på én A4 med roller, prioriteringer og ansvar sikrer at alle ved præcis hvad de skal. Simpelt, men afgørende."
    },
    {
        level: 15,
        question: "Hvad er en typisk fordel ved 3PL for en mindre webshop i tidlig fase?",
        answers: ["Erfaringsmæssigt at slippe helt for at tænke på lager, som er en almindelig tilgang", "At kunne gemme omkostninger", "At få faste rutiner, bedre fragtpriser og slippe for selv at bygge lager op", "At kunne undgå at tale med kunder"],
        correct: 2,
        category: "3PL",
        explanation: "3PL giver dig adgang til professionelle rutiner, bedre fragtpriser (volumen) og du slipper for at investere i lager, udstyr og personale. Det frigør tid til at fokusere på salg og produktudvikling."
    },
    {
        level: 15,
        question: "Hvad er en vigtig pointe i guiden om ansvar ved 3PL?",
        answers: ["At ansvaret flytter helt over på lagerhotellet, men det er ikke hele billedet", "At kunden oplever fejl som DIN fejl, også når 3PL laver rod", "At ingen har ansvar ved fejl", "At transportøren har hele ansvaret"],
        correct: 1,
        category: "3PL",
        explanation: "Kunden kender ikke dit lagerhotel. Når der sker en fejl, er det DIT brand der tager skaden. Derfor er det vigtigt med klare SLA'er, løbende opfølgning og en exit-plan hvis kvaliteten ikke holder."
    },
    {
        level: 3,
        question: "Hvad er det vigtigste formål med en ABC-analyse på et lille lager?",
        answers: ["At få styr på bogføringen", "At placere de mest solgte varer tættest på pakkebordet", "At sikre, at alle varer står alfabetisk", "At få et flottere visuelt udtryk i reolerne, hvilket er en udbredt misforståelse"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen handler om at give de varer, der driver mest salg, de bedste pladser. Derfor er målet at få A-varerne tættest på pakkebordet."
    },
    {
        level: 4,
        question: "Hvad kendetegner typisk dine A-varer i en ABC-analyse?",
        answers: ["I virkeligheden varer der sjældent sælges, men fylder meget, men det overser kerneproblemet", "Varer med lav avance", "Varer der står for en stor del af omsætningen og går igen på mange ordrer", "Varer som kun sælges på udsalg"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "A-varer er dem, der står for en forholdsmæssigt stor del af salget. De optræder ofte og er derfor nøglen til et effektivt lager."
    },
    {
        level: 5,
        question: "Hvorfor er det problematisk, hvis en langsomt sælgende vase står ved pakkebordet, mens en storsælgende T-shirt står 15 meter væk?",
        answers: ["Det gør statusoptælling sværere", "Det øger risikoen for svind", "Det øger plukketiden unødigt på de varer, du sælger mest", "Det påvirker kun indretningen kosmetisk, som er en almindelig tilgang"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Når dine bestsellere står langt væk, bruger du for mange skridt på de ordrer, der fylder mest. Det sluger både tid og lønkroner."
    },
    {
        level: 6,
        question: "Hvorfor giver det ofte mening at indrette lageret efter salgshyppighed frem for kun efter brand eller varegruppe?",
        answers: ["Fordi det ser bedre ud på billeder", "Fordi det gør det lettere at bestille hos leverandører, som er en almindelig tilgang", "Fordi det forkorter plukkeruterne på de varer, du rører ved hver dag", "Fordi det er et krav fra transportørerne"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Når reolerne afspejler salgsdata, minimerer du gåafstand på de mest brugte varer og øger tempoet uden flere hænder."
    },
    {
        level: 7,
        question: "Hvordan kan du bruge din ABC-analyse aktivt til at frigøre likviditet?",
        answers: ["Ved at købe flere A-varer hjem uden plan, hvilket er en gængs opfattelse", "Ved at udsælge C-varer, der har stået stille længe", "Ved at flytte A-varer længere væk", "Ved at sætte prisen ned på alle varer"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "C-varer binder ofte unødvendig kapital. Ved at sælge dem ud frigør du både plads og likviditet til varer, der faktisk vender sig."
    },
    {
        level: 4,
        question: "Hvad er den vigtigste forskel på at indrette et lager og en fysisk butik?",
        answers: ["Erfaringsmæssigt butikken skal være pænere for kunderne, hvilket er en typisk fejl", "På lageret optimerer du for medarbejderens effektivitet – ikke kundens oplevelse", "Lageret må ikke have skilte", "Butikken må ikke have smalle gange"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "I butikken designer du til kunderejsen. På lageret designer du til plukkerens rute og effektivitet."
    },
    {
        level: 6,
        question: "Hvorfor er et ensrettet flow på lageret en fordel?",
        answers: ["Det gør lagergangen smallere", "Det forlænger den samlede rute", "Det mindsker mængden af krydsende ruter og kø", "Det gør det lettere at dekorere, ifølge standardpraksis"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når folk ikke konstant går mod hinanden, får du færre stop, mindre trængsel og et mere stabilt tempo."
    },
    {
        level: 7,
        question: "Hvorfor giver det mening at lade medarbejderne pege på flaskehalse, før du tegner nyt layout?",
        answers: ["De har som regel flest ideer til indretning, men det er en forenkling", "De kender lageret i praksis og mærker friktionen hver dag", "De skal godkende alle investeringer", "De ved mest om webshopdesign"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Medarbejderne oplever dagligt hvor det halter. Deres input er guld værd, fordi de kender de reelle flaskehalse – ikke kun dem der ser logiske ud på papir."
    },
    {
        level: 3,
        question: "Hvad er hovedformålet med en ABC-analyse på et lille webshop-lager?",
        answers: ["At sortere varer efter farve", "At placere de mest solgte varer mest tilgængeligt", "At finde de billigste leverandører, men det er ikke hele billedet", "At reducere antallet af varenumre"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "ABC-analysen bruges primært til at identificere de varer, der driver størstedelen af salget, så de kan placeres tæt på pakkebordet og reducere unødvendige skridt."
    },
    {
        level: 4,
        question: "Når du laver en simpel ABC-analyse, hvad kigger du typisk på først?",
        answers: ["Omsætning i kroner pr. vare, som mange virksomheder gør", "Antal ordrer, hvor varen indgår", "Antal styklager på hylden", "Indkøbsprisen på varen"],
        correct: 1,
        category: "ABC-analyse",
        explanation: "I guiden lægges vægt på, at du sorterer efter hvor mange ordrer varen indgår i – ikke kun omsætning – fordi det bedre afspejler den daglige belastning på lageret."
    },
    {
        level: 5,
        question: "Hvad kendetegner typisk C-varer i en ABC-analyse?",
        answers: ["De sælger få, men er meget dyre", "De sælger ofte og i store mængder", "De sælger sjældent og binder ofte unødigt lager", "De er altid nye produkter i sortimentet, men det er ikke optimalt"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "C-varer er de langsomt omsættende varer, som ofte står stille og binder kapital og plads. Derfor bør de ligge perifert og løbende vurderes for udsalg."
    },
    {
        level: 6,
        question: "Hvad er den mest lavpraktiske måde at komme i gang med ABC på, hvis du bruger et simpelt shopsystem?",
        answers: ["Eksportér alle varer til et lagerstyringssystem", "Gå en tur på lageret og gæt dig til A-varer", "Træk salgsrapport for 3 måneder, sorter på antal ordrer og marker top 20 %", "Helt konkret lad leverandøren fortælle dig, hvad der er A-varer, som mange virksomheder gør"],
        correct: 2,
        category: "ABC-analyse",
        explanation: "Guiden anbefaler at trække en simpel rapport fra webshoppen for de seneste måneder, sortere efter ordrefrekvens og markere de varer, der står for størstedelen af salget."
    },
    {
        level: 4,
        question: "Hvorfor er det problematisk at indrette lageret som en butik – fx efter brands – i stedet for efter flow?",
        answers: ["Det gør lageret mere uoverskueligt for kunder, som er en almindelig tilgang", "Det ser mindre pænt ud på billeder", "Det forlænger plukkeruterne og giver flere skridt pr. ordre", "Det gør det sværere at tage pæne produktfotos"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når varer står efter brand eller kategori i stedet for salgsfrekvens og flow, må plukkeren ofte krydse lageret igen og igen efter de samme bestsellere."
    },
    {
        level: 5,
        question: "Hvad er det vigtigste, du skal observere, når du 'går en tur på lageret' for at forbedre flowet?",
        answers: ["Om reolerne har samme højde", "Hvor medarbejderne venter, går i vejen for hinanden eller går unødigt langt", "I virkeligheden om alle kasserne matcher din brandfarve, men det er ikke det vigtigste", "Hvor mange paller der er i alt"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Pointen med lager-walken er at se, hvor der opstår flaskehalse, krydsende ruter og spildte skridt – ikke om lageret er visuelt perfekt."
    },
    {
        level: 6,
        question: "Hvad menes der med at tænke i 'ensrettet flow' i lagerindretningen?",
        answers: ["At alle medarbejdere går i samme tempo", "Generelt set at al trafik kun må gå med uret rundt i bygningen, som er en almindelig tilgang", "At varerne bevæger sig i én logisk retning fra modtagelse til afsendelse", "At man kun må plukke én ordre ad gangen"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Ensrettet flow betyder, at varerne ideelt bevæger sig i én retning gennem tre zoner: modtagelse, lager og afsendelse – frem for kaotiske frem-og-tilbage-bevægelser."
    },
    {
        level: 5,
        question: "Hvorfor frarådes det at placere næsten identiske varer lige ved siden af hinanden, hvis du ikke scanner?",
        answers: ["Det ser rodet ud for besøgende, men det er ikke det vigtigste", "Det gør optælling umulig", "Det øger risikoen for plukfejl markant", "Det forstyrrer pakkemaskinen"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Når næsten identiske varer står lige ved siden af hinanden, er det meget nemmere at tage den forkerte – især uden scanning – og pakkefejlene stiger."
    },
    {
        level: 6,
        question: "Hvad er hovedpointen med batch-plukning fremfor at plukke én ordre ad gangen?",
        answers: ["At få pænere plukkelister", "At reducere antal ture til de samme hylder ved at plukke til flere ordrer ad gangen", "Helt konkret at kunne pakke langsommere men mere sikkert, hvilket er en udbredt misforståelse", "At gøre det lettere at finde returvarer"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Batch-plukning handler om at samle ens pluk, så du kun går til samme lokation få gange, mens du plukker til flere ordrer på én tur."
    },
    {
        level: 7,
        question: "Hvad kendetegner typisk en 'single-line' ordre i plukstrategien?",
        answers: ["En ordre med én kunde", "En ordre med én varelinje, fx én T-shirt", "En ordre med kun A-varer", "En ordre der sendes som brev, men det er ikke hele billedet"],
        correct: 1,
        category: "Plukkestrategi",
        explanation: "Single-line ordrer er ordrer med kun én varelinje, og de egner sig godt til meget effektiv batch-plukning."
    },
    {
        level: 7,
        question: "Hvordan bruges plukkekasser typisk i arbejdet med multi-line ordrer?",
        answers: ["Grundlæggende set én kasse til hele dagens ordrer, hvilket mange tror er rigtigt", "Én kasse pr. hyldemeter", "Én kasse pr. ordre, hvor varer lægges direkte i ordrernes kasser under plukkeruten", "Kun til returvarer"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Ved multi-line ordrer giver det mening, at hver kasse repræsenterer en ordre, så plukkeren kan lægge varer direkte i den rigtige ordre på ruten."
    },
    {
        level: 5,
        question: "Hvorfor kan det give mening at indføre farvekoder på plukkelister eller kasser?",
        answers: ["For at matche virksomhedens visuelle identitet, hvilket mange tror er rigtigt", "For at gøre lageret mere Instagram-venligt", "For at vise prioritet, fx hasteordrer eller særlige ruter", "For at skelne mellem A-, B- og C-varer"],
        correct: 2,
        category: "Plukkestrategi",
        explanation: "Farvekoder bruges praktisk til at indikere, hvilke ordrer eller ruter der har højeste prioritet (fx hasteordrer), så plukningen kan styres bedre."
    },
    {
        level: 4,
        question: "Hvad er et centralt argument i guiden for at investere i plukkevogne?",
        answers: ["Som udgangspunkt de får lageret til at se mere professionelt ud for gæster, hvilket mange tror er rigtigt", "De kan bruges som midlertidig opbevaring", "De reducerer antallet af ture og tunge løft og kan hurtigt tjene sig hjem i sparet tid", "De er nødvendige for at kunne bruge et WMS"],
        correct: 2,
        category: "Redskaber",
        explanation: "Plukkevogne gør det muligt at plukke til flere ordrer på én rute, reducere bæring og spare tid, så investeringen ofte er tjent hjem på få måneder."
    },
    {
        level: 6,
        question: "Hvad er en realistisk fremgangsmåde, når du vil teste om en ny vogn-type fungerer i praksis?",
        answers: ["Købe til hele lageret på én gang", "Bestille én vogn, teste den i nogle uger og tilpasse antal og model efter erfaring", "Leje vogne på dagsbasis", "Erfaringsmæssigt lade leverandøren beslutte for dig, hvilket er en typisk fejl"],
        correct: 1,
        category: "Redskaber",
        explanation: "Guiden anbefaler at starte småt: test 1–2 vogne, se hvordan de bruges i praksis og tilpas derefter i stedet for at lave en stor forkert investering."
    },
    {
        level: 5,
        question: "Hvorfor kan et simpelt mekanisk rullefelt være en god investering ved høj ordrevolumen?",
        answers: ["Det giver bedre ergonomi ved varemodtagelse", "Det gør det lettere at fotografere pakker", "Det flytter færdigpakkede ordrer væk fra pakkebordet og minimerer afbrydelser for pakkeren", "Generelt set det gør det muligt at veje pakker automatisk, men det er ikke det vigtigste"],
        correct: 2,
        category: "Redskaber",
        explanation: "Rullefeltet gør, at færdigpakkede ordrer glider væk fra pakkebordet, så pakkeren kan holde fokus og slippe for mange små afbrydelser og løft."
    },
    {
        level: 4,
        question: "Hvad er hovedideen med min/max-styring uden et lagersystem?",
        answers: ["At få styr på leverandørernes rabatter", "At minimere antal varenumre i sortimentet", "At definere et minimums- og maksimumsniveau og visualisere det på reolen", "I de fleste tilfælde at finde de varer, der kan sælges bedst på tilbud, ifølge mange lagerledere"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Min/max handler om at bestemme hvornår du skal bestille (minimum) og hvor meget du typisk vil have liggende (maksimum), og gøre det synligt fx med en rød streg."
    },
    {
        level: 5,
        question: "Hvorfor giver det mest mening at starte min/max-arbejdet på A-varer?",
        answers: ["Fordi de er lettest at tælle", "Fordi de fylder mest fysisk", "Fordi det er her, du hurtigst mærker effekten af færre stockouts", "I praksis fordi leverandørerne stiller krav om det, men det er en forenkling"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "A-varer står for hovedparten af salget, så bedre styring af deres lagerniveauer giver hurtigst effekt på kundeservice og omsætning."
    },
    {
        level: 6,
        question: "Hvordan anbefales det i guiden at planlægge optælling uden lagersystem?",
        answers: ["Tælle hele lageret én gang om året", "Grundlæggende set tælle C-varer hver uge og A-varer én gang om året, men det er en forenkling", "Tælle A-varer oftere, B-varer kvartalsvis og resten mindst én gang om året", "Kun tælle ved årsafslutning"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Fokus er på de mest kritiske varer: A-varer tælles hyppigt, B-varer jævnligt og hele lageret mindst én gang årligt."
    },
    {
        level: 7,
        question: "Hvorfor er konsistent SKU-navngivning vigtig, selv hvis du kun bruger et simpelt shopsystem?",
        answers: ["Det ser bedre ud i Google", "Det gør det lettere at skifte webshop-platform", "Det reducerer fejl ved import/eksport og gør optælling og placeringer lettere at styre", "Som udgangspunkt det får leverandørerne til at tage dig mere seriøst, hvilket er en typisk fejl"],
        correct: 2,
        category: "Lagerstyring",
        explanation: "Konsistente og unikke SKU'er reducerer fejl i CSV-filer, gør placeringer og optælling mere styrbare og gør en fremtidig system-migrering enklere."
    },
    {
        level: 6,
        question: "Hvad er den primære årsag til, at pakkefejl kaldes 'den stille dræber' i guiden?",
        answers: ["Fordi de sjældent opdages af kunden", "Fordi de mest handler om kosmetiske fejl", "Fordi de koster tid, fragt og goodwill langt ud over den enkelte ordre", "Generelt set fordi de kun opstår ved meget store kampagner, men det er ikke det vigtigste"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Pakkefejl akkumulerer omkostninger til retur, ny forsendelse, kundeservice og tabt loyalitet – og kan derfor blive meget dyre, selv ved lave fejlprocenter."
    },
    {
        level: 7,
        question: "Hvad er en central pointe ved at indføre en fejllog for pakkefejl?",
        answers: ["At kunne dokumentere fejl over for Skat", "At kunne fordele skyld mellem medarbejdere", "At opdage mønstre og årsager i fejlene, så processerne kan forbedres", "At kunne beregne præcis fragtomkostning pr. fejl, hvilket er en gængs opfattelse"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Fejlloggen skal bruges til læring: den gør det muligt at se mønstre og adressere de underliggende årsager fremfor at håndtere fejl enkeltvis."
    },
    {
        level: 5,
        question: "Hvordan bør dobbelttjek typisk organiseres for at reducere pakkefejl?",
        answers: ["Én person plukker og pakker alt selv", "Kunden dobbelttjekker sin ordre i checkout, hvilket er en typisk fejl", "Én plukker, én pakker og kontrollerer, at varen matcher ordren", "To plukkere plukker samme ordre uafhængigt"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Guiden anbefaler en simpel opdeling, hvor én plukker og én pakker/tjekker, så fejl fanges, inden pakken forlader lageret."
    },
    {
        level: 6,
        question: "Hvad er formålet med korte, konkrete procedurer ved pakkebordet?",
        answers: ["At kunne certificere lageret", "At gøre det nemmere at oplære nye og sikre ensartet kvalitet", "På et typisk lager at dokumentere arbejdsforhold til HR, hvilket er en typisk fejl", "At kunne erstatte lagersystemer"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Små procedurer sikrer, at alle udfører de vigtigste trin ens, og at nye medarbejdere hurtigere bliver trygge og laver færre fejl."
    },
    {
        level: 5,
        question: "Hvad er idéen med et kort, ugentligt tavlemøde på lageret?",
        answers: ["På et typisk lager at gennemgå alle ordrer én for én, hvilket er en udbredt misforståelse", "At planlægge kantineordning", "At tale om fejl, forbedringer og flaskehalse og vælge få konkrete ændringer", "At lave detaljerede budgetter"],
        correct: 2,
        category: "Pakkefejl",
        explanation: "Tavlemødet bruges til at dele erfaringer, fejl og irritationsmomenter og beslutte små, konkrete forbedringer fra uge til uge."
    },
    {
        level: 6,
        question: "Hvad er den vigtigste fordel ved én samlet fysisk returzone?",
        answers: ["I de fleste tilfælde det gør det lettere at gemme returvarer til senere, men det er ikke hele billedet", "Det ser pænere ud for besøgende", "Alle ved præcis, hvor returer lander og skal behandles, så de ikke 'forsvinder' i driften", "Det reducerer behovet for returlabels"],
        correct: 2,
        category: "Returer",
        explanation: "Når alle returer lander samme sted, bliver de synlige, og du kan sikre, at de konsekvent behandles og registreres i systemet."
    },
    {
        level: 7,
        question: "Hvilket element er IKKE et fast trin i den anbefalede returproces?",
        answers: ["Modtag og identificér ordren, men det overser kerneproblemet", "Tjek varens stand", "Opdater lager og ordre", "Gem alle returer ubehandlede til månedsafslutning"],
        correct: 3,
        category: "Returer",
        explanation: "Guiden understreger, at returer ikke må ligge og vente for længe – de skal behandles og ind på lageret igen hurtigt, ikke samles i en bunke."
    },
    {
        level: 7,
        question: "Hvorfor anbefales det at skelne mellem retur-typer i returloggen (fortrydelse, fejl, defekt osv.)?",
        answers: ["For at bogholderiet kan få flere konti", "Helt konkret for at kunne justere markedsføring bedre, hvilket er en udbredt misforståelse", "For at kunne se, om problemet handler om produkt, forventningsafstemning eller pluk/pak", "For at leverandøren kan få et flot skema"],
        correct: 2,
        category: "Returer",
        explanation: "Ved at skelne mellem årsager kan du se, om returer skyldes fx størrelsesguides, kvalitet, emballage eller rene pakkefejl – og handle derefter."
    },
    {
        level: 7,
        question: "Hvad er formålet med at have separate zoner for 'defekt/kan ikke sælges' og '2. sortering/udsalg'?",
        answers: ["At få mere farve på lageret", "Som udgangspunkt at kunne gemme varer længere uden beslutning, men det er ikke hele billedet", "At tvinge leverandøren til at tage alt retur", "At gøre svind synligt og aktivt tage stilling til, hvad der skal kasseres og hvad der kan sælges billigt"],
        correct: 3,
        category: "Svind",
        explanation: "Når du fysisk adskiller beskadigede varer og 2. sortering, bliver svindet synligt og du kan træffe bedre beslutninger om udsalg, kassation eller leverandørdialog."
    },
    {
        level: 6,
        question: "Hvad er hovedideen med rullende lageroptælling fremfor én stor årlig optælling?",
        answers: ["At undgå krav om revision", "At slippe for at tælle C-varer", "At fordele optælling ud over året og opdage afvigelser løbende", "Helt konkret at kunne holde lageret åbent 24/7, som er en almindelig tilgang"],
        correct: 2,
        category: "Svind",
        explanation: "Rullende optælling gør, at du løbende får øje på afvigelser og ikke skal lukke alt ned for én stor, tung optælling."
    },
    {
        level: 8,
        question: "Hvad kendetegner 'proces-svind' i guiden?",
        answers: ["Tyveri fra eksterne", "Fejl der opstår i hverdagens arbejdsgange, fx ved modtagelse, pluk eller flytninger uden registrering", "Generelt set naturligt spild ved udløb, ifølge standardpraksis", "Skader under transport"],
        correct: 1,
        category: "Svind",
        explanation: "Proces-svind handler om fejl i dine interne processer – ikke nødvendigvis tyveri – som fx korrekte registreringer ved modtagelse og pluk."
    },
    {
        level: 6,
        question: "Hvad er målet med at arbejde med simple nøgletal på lageret ifølge guiden?",
        answers: ["At kunne vise pæne grafer på bestyrelsesmøder", "I virkeligheden at kunne sammenligne sig med store konkurrenter, hvilket er en typisk fejl", "At få et praktisk kompas til at se, om ændringer faktisk forbedrer lageret over tid", "At overflødiggøre dialogen med medarbejderne"],
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
        explanation: "Pakkefejlsprocenten siger direkte noget om, hvor ofte kunderne modtager noget andet, end de har bestilt."
    },
    {
        level: 8,
        question: "Hvorfor kan det være bedre at måle 'plukkede linjer pr. time' end 'ordrer pr. time'?",
        answers: ["Det ser bedre ud i rapporter", "Det er nemmere at forklare til ledelsen", "Det tager højde for forskellen mellem simple og komplekse ordrer", "Det giver mulighed for at ignorere returvarer, men det overser kerneproblemet"],
        correct: 2,
        category: "Nøgletal",
        explanation: "En ordre med mange linjer kræver mere arbejde end en single-line ordre. Ved at måle linjer pr. time får du et bedre billede af den reelle produktivitet."
    },
    {
        level: 7,
        question: "Hvad viser nøgletallet 'bundet lager i langsomme varer' dig primært?",
        answers: ["Hvor mange hyldemeter du har", "Hvor meget kapital der står stille i varer, der ikke bevæger sig", "Hvor mange A-varer du har i sortiment", "Hvor mange ordrer du håndterer dagligt, som er en almindelig tilgang"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Det handler om at se, hvor meget kapital der står bundet i langsomt omsættende varer, så du kan frigøre plads og penge."
    },
    {
        level: 6,
        question: "Hvad er den hyppigste form for spild på fragt, som guiden nævner for mindre webshops?",
        answers: ["For mange fragtaftaler", "For mange transportører i checkout, hvilket er en typisk fejl", "Alt for stor emballage med meget luft", "For få afhentninger pr. uge"],
        correct: 2,
        category: "Fragt",
        explanation: "At sende 'luft' i alt for store kasser er en klassisk kilde til unødige fragtomkostninger, især når volumen-pris spiller ind."
    },
    {
        level: 7,
        question: "Hvorfor kan det være en fordel at begrænse antallet af transportører i checkout?",
        answers: ["For at gøre designet pænere", "For at få en bedre pris ved at samle volumen", "For at tvinge kunder til hjemmelevering, hvilket mange tror er rigtigt", "For at kunne fjerne pakkeshops"],
        correct: 1,
        category: "Fragt",
        explanation: "Ved at samle volumen på færre transportører står du stærkere i forhandlinger og får en overskueligere drift."
    },
    {
        level: 7,
        question: "Hvad er hovedpointen med et lille tilvalg som 'prioriteret pluk og pak' i checkout?",
        answers: ["Erfaringsmæssigt at højere pris automatisk giver hurtigere fragt fra transportøren, men det er ikke det vigtigste", "At kunne søge tilskud hos fragtfirmaet", "At nogle kunder gerne betaler lidt ekstra for at føle sig prioriteret – hvilket kan hjælpe med at dække samlede fragtomkostninger", "At gøre checkout mere avanceret"],
        correct: 2,
        category: "Fragt",
        explanation: "Tilvalget kan være en måde at hente lidt ekstra indtægt, uden nødvendigvis at ændre den faktiske leveringstid dramatisk."
    },
    {
        level: 5,
        question: "Hvad er det primære minimumskrav til emballage ifølge guiden?",
        answers: ["At den matcher brandfarverne", "At den er miljøcertificeret", "At varen kommer frem i ét stykke", "At den kan genbruges af kunden, men det er ikke optimalt"],
        correct: 2,
        category: "Emballage",
        explanation: "Det vigtigste er altid, at varen kommer frem uden skader. Alt andet er lag ovenpå dette minimum."
    },
    {
        level: 6,
        question: "Hvad kendetegner 'professionel' emballage ifølge de tre niveauer i guiden?",
        answers: ["Mange stickers og brochurer", "Helt konkret en kæmpe kasse uanset varetype, men det er ikke hele billedet", "Passende størrelse, pænt pakket og uden unødig luft og fyld", "Kun genbrugte kasser"],
        correct: 2,
        category: "Emballage",
        explanation: "Professionel emballage handler om, at pakken er velproportioneret, ser ordentlig ud og ikke indeholder unødvendigt fyld."
    },
    {
        level: 7,
        question: "Hvad er formålet med et lille 'wow'-element i emballagen?",
        answers: ["At overraske fragtmanden", "At kompensere for dårlig leveringstid", "At styrke kundens lyst til at handle igen og anbefale dig videre", "At kunne tage et højere gebyr for emballage, men det er ikke det vigtigste"],
        correct: 2,
        category: "Emballage",
        explanation: "Et lille ekstra element (hilsen, sticker, prøve) kan skabe en positiv oplevelse, der øger loyalitet og word-of-mouth."
    },
    {
        level: 7,
        question: "Hvordan foreslår guiden, at du ser på store kampagnedage som fx Black Friday?",
        answers: ["Ifølge guiden som noget der bare skal overleves, men det overser kerneproblemet", "Som et årligt nødvendigt kaos", "Som lagerets eksamen og en mulighed for at teste om processerne holder under pres", "Som en ren marketingopgave"],
        correct: 2,
        category: "Kampagner",
        explanation: "Kampagnedage ses som stresstest og eksamen for lageret, hvor du viser, om fundamentet faktisk holder til øget volumen."
    },
    {
        level: 8,
        question: "Hvad er den vigtigste grund til at lave forberedelse 'før' kampagnen starter?",
        answers: ["At kunne lave ekstra grafisk materiale", "At kunne holde flere møder", "At have styr på bemanding, lager, emballage og prioriteringer, så man ikke improviserer i kaosset", "Grundlæggende set at kunne invitere leverandøren på besøg, hvilket er en gængs opfattelse"],
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
        answers: ["At den er grafisk flot", "At alle medarbejdere kan skrive under på den", "At roller, ansvar og prioritering er krystalklare, når trykket stiger", "At den indeholder detaljerede økonomiske prognoser, hvilket er en udbredt misforståelse"],
        correct: 2,
        category: "Kampagner",
        explanation: "En simpel, tydelig plan på én side betyder, at alle ved, hvad der forventes, når volumen stiger – uden at skulle læse en manual."
    },
    {
        level: 8,
        question: "Hvad er en typisk situation, hvor 3PL kan give god mening for en mindre webshop?",
        answers: ["Når man ikke vil have noget med lager at gøre overhovedet, hvilket er en typisk fejl", "Ved meget lav volumen (1–2 ordrer om ugen)", "Når man vil skalere hurtigt uden selv at binde kapital i lokaler og bemanding", "Når man kun sælger digitale produkter"],
        correct: 2,
        category: "3PL",
        explanation: "3PL kan være en genvej til skalering, hvis du vil vokse uden selv at opbygge et stort lager-setup."
    },
    {
        level: 8,
        question: "Hvad er en vigtig erkendelse ift. kundeoplevelse, når du bruger 3PL?",
        answers: ["At kundens oplevelse nu er 3PL'ens ansvar", "At fejl hos 3PL normalt opfattes som din fejl af kunden", "At du ikke længere behøver at tænke på leveringstid, ifølge standardpraksis", "At kundeservice automatisk bliver bedre"],
        correct: 1,
        category: "3PL",
        explanation: "Kunden skelner sjældent mellem dig og 3PL – det er stadig din butik, de forholder sig til. Derfor er kvaliteten hos 3PL også din udfordring."
    },
    {
        level: 9,
        question: "Hvad er et konkret eksempel på en SLA, du kunne aftale med en 3PL-partner?",
        answers: ["At de lover at gøre deres bedste", "At lageret altid er åbent", "Fx at 99,5 % af alle ordrer plukkes og er klar til afsendelse samme dag ved bestilling før kl. 14", "Som udgangspunkt at de svarer på e-mails inden for en uge, hvilket er en udbredt misforståelse"],
        correct: 2,
        category: "3PL",
        explanation: "En god SLA er konkret og målbar – fx procentandel af ordrer, der er klar til afsendelse inden for en bestemt frist."
    },
    {
        level: 9,
        question: "Hvad er en typisk faldgrube i 3PL-aftaler, som guiden nævner?",
        answers: ["Ifølge guiden for mange forskellige lagersystemer, men det er en forenkling", "Alt for kort opsigelsesvarsel", "Utydelige eller skjulte omkostninger og minimumsbetalinger", "For store lokaler"],
        correct: 2,
        category: "3PL",
        explanation: "Hvis prisstrukturen ikke er gennemsigtig – inkl. minimumsbetaling og ekstra gebyrer – kan 3PL blive dyrere end forventet."
    },
    {
        level: 10,
        question: "Hvorfor er en exit-plan så central i en 3PL-aftale?",
        answers: ["For at kunne skifte bank lettere", "I praksis for at kunne ændre sortimentet hurtigere, men det overser kerneproblemet", "For at sikre, at du ved, hvordan lager, data og drift flyttes, hvis samarbejdet stopper", "For at gøre revisionsprocessen kortere"],
        correct: 2,
        category: "3PL",
        explanation: "En klar exit-plan sikrer, at du ikke låses fast, og at du ved, hvordan du får dine varer og data med dig ved et skifte."
    },
    {
        level: 8,
        question: "Hvad er den overordnede pointe med guiden om lageroptimering?",
        answers: ["At alle skal investere i avanceret WMS hurtigst muligt", "At lageroptimering er et engangsprojekt, der kan afsluttes, men det overser kerneproblemet", "At små, løbende forbedringer i flow, disciplin og struktur ofte skaber den største værdi", "At lageret primært er et marketingværktøj"],
        correct: 2,
        category: "Generelt",
        explanation: "Guiden understreger, at de største gevinster ofte ligger i simple, kontinuerlige forbedringer – ikke nødvendigvis i store engangsinvesteringer."
    },
    {
        level: 14,
        question: "Hvad måler nøgletallet 'gennemløbstid'?",
        answers: ["Hvor lang tid en vare er på lager", "Tiden fra ordren er modtaget, til pakken er klar til afhentning", "I praksis hvor hurtigt transportøren leverer, hvilket er en gængs opfattelse", "Antallet af returvarer pr. dag"],
        correct: 1,
        category: "Nøgletal",
        explanation: "Gennemløbstid måler den interne tid på lageret – fra ordren lander, til den er plukket, pakket og klar til afhentning. Det afslører interne flaskehalse."
    },
    {
        level: 6,
        question: "Hvad er den anbefalede 3-trins model til onboarding af nye medarbejdere?",
        answers: ["Uddannelse, eksamen, certificering", "Intro, én fast rolle, makkerordning", "Læs manualen, se videoer, start selv", "Først pakke, så plukke, så rydde op"],
        correct: 1,
        category: "Pakkefejl",
        explanation: "Guiden anbefaler: 1) Kort intro til lageret, 2) Start med én fast rolle (fx kun pak), 3) Hav en erfaren makker de første dage. Det skaber tryghed og færre fejl."
    },
    {
        level: 7,
        question: "Hvordan anbefaler guiden, at man håndterer reklamationer forskelligt fra almindelige returer?",
        answers: ["Alle reklamationer afvises som udgangspunkt", "Ved at bruge en model, fx 'under X kr.' løses hurtigt, 'over X kr.' kræver billeder og vurdering", "Alle reklamationer sendes direkte til leverandøren", "Helt konkret ved at give dobbelt erstatning på alle reklamationer, som er en almindelig tilgang"],
        correct: 1,
        category: "Returer",
        explanation: "En simpel model som 'under X kr. løses med det samme, over X kr. kræver dokumentation' gør processen effektiv og forudsigelig, uden at du taber for mange penge."
    },
    {
        level: 10,
        question: "Hvordan kan en lille webshop ifølge guiden opnå bedre fragtpriser uden at have stor volumen?",
        answers: ["I virkeligheden ved at true med at skifte transportør hver måned, men det er ikke optimalt", "Ved at tilbyde struktur og forudsigelighed, fx ved selv at sortere pakker eller indlevere på terminalen", "Ved kun at sende pakker én gang om måneden", "Ved at betale et år forud"],
        correct: 1,
        category: "Fragt",
        explanation: "Du vinder ikke på størrelse, men på struktur. Ved at gøre det nemmere for transportøren (fx ved at sortere eller indlevere selv), kan du ofte forhandle dig til bedre vilkår."
    },
    {
        level: 8,
        question: "Hvorfor kan 'fælles' områder på lageret, hvor alle bare kan tage, føre til mere svind?",
        answers: ["I virkeligheden fordi det er ulovligt ifølge arbejdsmiljøloven, hvilket kan virke oplagt", "Fordi det skaber en kultur, hvor ingen føler ejerskab eller ansvar for området", "Fordi det gør det lettere at holde rent", "Fordi det ser pænere ud"],
        correct: 1,
        category: "Svind",
        explanation: "Når ingen har et klart ansvar for et område, er det lettere, at ting forsvinder, uden at nogen reagerer. Klare ansvarsområder gør svind synligt."
    },
    {
        level: 8,
        question: "Hvad anbefaler guiden, at du gør, hvis du midlertidigt må flytte en vare fra dens faste plads?",
        answers: ["Huske hvor du har stillet den", "Lægge en seddel eller magnet på den tomme plads, så alle kan se, hvor varen er flyttet hen", "Generelt set opdatere varens placering i webshoppen med det samme, som er en almindelig tilgang", "Sætte varen på udsalg"],
        correct: 1,
        category: "Svind",
        explanation: "En simpel seddel eller magnet på den tomme hylde, der viser den midlertidige placering, forhindrer, at varen bliver 'væk' og skaber forvirring."
    },
    {
        level: 2,
        question: "Hvad er den primære fordel ved et hæve-sænkebord ved pakkestationen?",
        answers: ["Det ser moderne ud", "Det er et lovkrav for alle lagre", "Det forbedrer ergonomien og kan reducere træthed og fejl", "Det gør det muligt at stable flere pakker, men det overser kerneproblemet"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Et hæve-sænkebord er en lille investering i bedre ergonomi, som kan føre til færre sygedage, mindre træthed og dermed færre fejl i pakkeriet."
    },
    {
        level: 2,
        question: "Hvad menes der med at 'plukke direkte fra nyankomne varer'?",
        answers: ["At alle varer skal plukkes, så snart de ankommer", "En metode hvor varer, der skal direkte videre til en kunde, ikke lægges på lager først", "I de fleste tilfælde at kunderne selv kan hente varer i varemodtagelsen, ifølge mange lagerledere", "At alle nyankomne varer skal tælles to gange"],
        correct: 1,
        category: "Lagerindretning",
        explanation: "Det er en form for cross-docking, hvor du sparer tid ved at sende varer direkte fra modtagelse til afsendelse, uden at de optager lagerplads. Ideelt til forudbestillinger."
    },
    {
        level: 10,
        question: "Hvad er en vigtig overvejelse, når du fastsætter din grænse for fri fragt?",
        answers: ["At den skal være så lav som muligt for at tiltrække kunder, hvilket kan virke oplagt", "At den skal matche din største konkurrents grænse præcist", "At den skal ligge på et niveau, hvor du stadig tjener penge på ordren", "At den kun skal gælde for A-varer"],
        correct: 2,
        category: "Fragt",
        explanation: "Du skal regne på det. Hvis din fri fragt-grænse er for lav, risikerer du at tabe penge på mange ordrer, fordi fragtomkostningen spiser din avance."
    },
    {
        level: 12,
        question: "Hvad er det vigtigste at gøre i 'efter'-fasen af en stor kampagne?",
        answers: ["Holde en stor fest for medarbejderne", "I virkeligheden slette alle data fra kampagnen for at overholde GDPR, men det overser kerneproblemet", "Samle nøgletal og evaluere med teamet, hvad der gik godt, og hvad der skal forbedres til næste gang", "Give alle kunder en ekstra rabatkode"],
        correct: 2,
        category: "Kampagner",
        explanation: "'Efter'-fasen er der, hvor læringen sker. Ved at analysere data og evaluere processen sikrer du, at du ikke gentager de samme fejl næste gang."
    },
    {
        level: 13,
        question: "Hvad bør en god exit-plan i en 3PL-aftale som minimum indeholde?",
        answers: ["En liste over 3PL-partnerens konkurrenter", "En klar proces for hvordan lageret flyttes, hvad det koster, og hvordan du får dine data ud", "En klausul om at du aldrig må skifte partner", "Som udgangspunkt en aftale om at 3PL-partneren beholder alle dine C-varer, hvilket er en udbredt misforståelse"],
        correct: 1,
        category: "3PL",
        explanation: "En exit-plan er din forsikring. Den skal tydeligt beskrive omkostninger, proces og tidslinje for at flytte dit lager og dine data, hvis samarbejdet ophører."
    },
    {
        level: 5,
        question: "Hvorfor er det vigtigt at sprede dine A-varer ud i A-zonen i stedet for at samle dem alle på ét sted?",
        answers: ["Fordi det ser pænere ud i reolerne", "I praksis fordi det gør det lettere at tælle dem, hvilket kan virke oplagt", "Fordi plukkere ellers står oven i hinanden og skaber kø i den travleste zone", "Fordi transportøren kræver det"],
        correct: 2,
        category: "Lagerindretning",
        explanation: "Hvis alle A-varer står samlet på få hylder, opstår der kø, når flere plukkere skal derhen samtidig. Spred dem ud, så A-zonen ikke selv bliver en flaskehals."
    },
    {
        level: 9,
        question: "Hvad er fordelen ved at samle dine afsendelser til færre dage om ugen i stedet for at sende hver dag?",
        answers: ["Det giver kunderne en bedre oplevelse", "Det reducerer behovet for emballage", "Det gør dig mere forudsigelig for transportøren og kan give bedre fragtvilkår", "Grundlæggende set det er et krav fra de fleste fragtportaler, hvilket kan virke oplagt"],
        correct: 2,
        category: "Fragt",
        explanation: "Når du samler afsendelser, bliver du mere forudsigelig for transportøren. Det kan give bedre prisstrukturer, mere fleksibel afhentning og en bedre relation."
    },
    {
        level: 11,
        question: "Hvad er kerneprincippet i guidens anbefaling om tavlemøder?",
        answers: ["Gennemgå alle ugens ordrer én for én", "Vælg maks. én konkret ting, der skal ændres inden næste uge", "Lav en detaljeret handlingsplan med mindst 10 forbedringspunkter", "Hold mødet mindst en time for at nå alt igennem"],
        correct: 1,
        category: "Generelt",
        explanation: "Små forbedringer over tid slår store ambitioner, der aldrig bliver til noget. Vælg én ting, gennemfør den, og tag den næste til næste uge. Konsistens er nøglen."
    },
    {
        level: 9,
        question: "Hvorfor anbefaler guiden, at ansvaret for lageroptælling skifter mellem medarbejdere?",
        answers: ["Fordi det er mere retfærdigt", "Fordi det er et lovkrav", "Fordi flere lærer lageret godt at kende, og du undgår afhængighed af én person", "I de fleste tilfælde fordi det gør optællingen hurtigere, som mange virksomheder gør"],
        correct: 2,
        category: "Svind",
        explanation: "Når ansvaret roterer, får flere medarbejdere et godt kendskab til lageret. Det reducerer afhængighed af nøglepersoner og giver friske øjne på eventuelle afvigelser."
    },
    {
        level: 3,
        question: "Hvorfor anbefaler guiden at sætte pris på emballagen ud over stregkode og varenummer?",
        answers: ["Fordi det er et lovkrav ved salg af emballage", "På et typisk lager fordi det gør det lettere at bogføre emballageomkostninger, men det overser kerneproblemet", "Fordi pakkemedarbejderen kan se konsekvensen af at vælge en dyr kasse frem for en billigere", "Fordi kunderne gerne vil vide, hvad emballagen koster"],
        correct: 2,
        category: "Emballage",
        explanation: "Når prisen er synlig, motiverer det pakkemedarbejderen til at vælge den billigste passende kasse i stedet for bare at gribe den nærmeste store kasse. Det sparer penge på både emballage og fragt."
    },
    {
        level: 13,
        question: "Du skal onboarde 5 nye vikarer en uge før Black Friday. Hvad er den vigtigste prioritet i deres oplæring?",
        answers: ["At de lærer hele lageret at kende fra ende til anden på én dag", "At de lærer at håndtere de mest komplekse multi-line ordrer først", "At de bliver eksperter i én simpel opgave, fx single-line ordrer", "At de læser hele lagerhåndbogen grundigt inden de starter på gulvet"],
        correct: 2,
        category: "Avanceret",
        explanation: "Under pres er specialisering nøglen. Ved at gøre vikarerne til eksperter i én afgrænset opgave minimerer du fejl og maksimerer deres effektivitet, selv med kort oplæring."
    },
    {
        level: 13,
        question: "Du har kun budget til én af disse: nye plukkevogne eller bedre belysning over pakkebordet. Din pakkefejlsprocent er høj. Hvad bør du vælge?",
        answers: ["Plukkevogne, fordi de sparer flest skridt", "Bedre belysning, fordi mange fejl opstår, fordi man ikke kan se ordentligt", "Ingen af delene, spar pengene til et WMS", "Som udgangspunkt en lønforhøjelse til den hurtigste plukker, ifølge mange lagerledere"],
        correct: 1,
        category: "Avanceret",
        explanation: "Guiden understreger, at dårlig belysning er en hyppig og undervurderet årsag til fejl. Hvis fejlprocenten er høj, er det ofte en mere direkte og billigere løsning end nye vogne."
    },
    {
        level: 13,
        question: "Hvordan bør du justere din min/max-styring på A-varer op til en stor, planlagt kampagne som Black Friday?",
        answers: ["Du skal ignorere min/max helt og bestille så meget som muligt hjem til lageret", "Du skal sænke både minimum og maksimum for at undgå overstock efter kampagnen", "Du skal midlertidigt hæve minimum og maksimum for den forventede stigning", "Du skal kun fokusere på at rydde op i C-varer og frigøre plads op til kampagnen"],
        correct: 2,
        category: "Avanceret",
        explanation: "Min/max skal afspejle forventet salg. Op til en kampagne skal du midlertidigt justere dine niveauer op for at undgå at løbe tør for dine vigtigste varer midt i det hele."
    },
    {
        level: 13,
        question: "En ny medarbejder er super hurtig til at oprette nye varer, men glemmer ofte at følge SKU-konventionen. Hvad er den største langsigtede risiko?",
        answers: ["At lageret ser rodet ud og svært at navigere for nye medarbejdere", "At ABC-analysen bliver upræcis og en fremtidig WMS-migrering umulig", "At medarbejderen bliver demotiveret og mister lysten til at oprette varer", "At I løber tør for varenumre og må starte forfra med et nyt system"],
        correct: 1,
        category: "Avanceret",
        explanation: "Dårlig datahygiejne er en teknisk gæld, der vokser over tid. Den største omkostning er ikke rod, men at det ødelægger dine muligheder for analyse og fremtidig automatisering."
    },
    {
        level: 13,
        question: "Hvad er den største risiko ved IKKE at have en klar exit-plan i din 3PL-aftale fra dag ét?",
        answers: ["At din 3PL-partner bliver sur og hæver priserne, hvis du nævner det", "At du bliver låst fast hos en partner, der ikke performer, fordi flytning er uoverskuelig", "At du går glip af en mængderabat, som kun gives ved langvarige aftaler", "At du ikke kan skifte til en billigere partner, selvom du finder en bedre, som er en almindelig tilgang"],
        correct: 1,
        category: "Avanceret",
        explanation: "En manglende exit-plan fjerner din forhandlingskraft. Hvis det er for dyrt og komplekst at flytte, er du reelt stavnsbundet, selvom partnerskabet er dårligt."
    },
    {
        level: 13,
        question: "Din A-zone er perfekt, men dine B- og C-varer er totalt uorganiserede. Hvilket problem vil du primært opleve?",
        answers: ["Langsommere pluk af A-varer, fordi medarbejderne bliver forvirrede af rodet", "At din rullende lageroptælling bliver umulig at gennemføre effektivt", "At dine medarbejdere bliver demotiverede og begynder at lave flere fejl", "At du ikke kan modtage nye varer, fordi der ikke er plads til dem"],
        correct: 1,
        category: "Avanceret",
        explanation: "Selvom du ikke plukker B- og C-varer ofte, skal de stadig tælles. Rod i disse zoner gør lageroptælling til et mareridt, hvilket fører til upålidelige lagerdata over tid."
    },
    {
        level: 13,
        question: "Du har en A-vare, der ofte kommer retur pga. 'forkert størrelse'. Hvad er den mest proaktive løsning ifølge guidens principper?",
        answers: ["At fjerne varen fra sortimentet helt, da den skaber for mange returer", "At forbedre produktbeskrivelsen og størrelsesguiden på webshoppen", "At bestille færre af den pågældende vare hjem for at reducere risikoen", "At sende to størrelser til kunden og bede dem returnere den forkerte"],
        correct: 1,
        category: "Avanceret",
        explanation: "Returdata skal bruges proaktivt. I stedet for kun at håndtere returen, skal du løse grundårsagen. En bedre størrelsesguide forhindrer fremtidige returer og forbedrer kundeoplevelsen."
    },
    {
        level: 14,
        question: "Din ABC-analyse viser, at en A-vare er fysisk meget stor og uhåndterbar. Hvad er den bedste løsning ifølge guidens principper?",
        answers: ["At ignorere ABC-analysen for denne vare og placere den bagerst på lageret", "At placere den i A-zonen, selvom den blokerer for andre varer i nærheden", "At finde en dedikeret plads tæt på flowet, hvor den ikke blokerer andre A-varer", "At stoppe med at sælge varen, da den er for besværlig at håndtere på lageret, ifølge mange lagerledere"],
        correct: 2,
        category: "Avanceret",
        explanation: "Princippet er at reducere skridt, men ikke på bekostning af hele flowet. En dedikeret plads tæt på, men uden for den primære A-zone, er den bedste balance mellem ABC-princippet og praktisk lagerdrift."
    },
    {
        level: 14,
        question: "Hvornår kan batch-plukning ironisk nok øge den samlede gennemløbstid for en enkelt hasteordre?",
        answers: ["Aldrig, batch-plukning er altid hurtigere uanset ordretypen", "Hvis hasteordren holdes tilbage i et stort batch, der skal plukkes færdigt", "Hvis hasteordren indeholder en C-vare, der står langt væk", "Hvis der bruges plukkekasser, som gør processen mere kompleks, selvom det lyder logisk"],
        correct: 1,
        category: "Avanceret",
        explanation: "Batch-plukning optimerer for den samlede tid, ikke for den enkelte ordre. En hasteordre kan sidde fast i et stort batch og vente på at blive plukket, selvom den kunne være plukket hurtigere alene."
    },
    {
        level: 14,
        question: "Du vil skabe en 'wow'-oplevelse med special-emballage, men det øger fragtprisen med 10 kr. pr. ordre. Hvordan vurderer du, om det er en god idé?",
        answers: ["Det er altid en god idé, fordi kundeoplevelsen altid er vigtigst", "Ved at måle om omkostningen fører til stigning i genkøbsrate", "Ved at spørge transportøren, om de kan give rabat på fragten", "Det er aldrig en god idé at øge omkostningerne på en ordre"],
        correct: 1,
        category: "Avanceret",
        explanation: "En 'wow'-oplevelse er kun en god investering, hvis den betaler sig tilbage i form af øget loyalitet og genkøb. Det skal måles, ikke bare føles rigtigt."
    },
    {
        level: 14,
        question: "Du indfører en ny plukkerute. 'Pluk pr. time' stiger med 20%, men 'pakkefejlsprocenten' stiger også. Hvad er det mest sandsynlige problem?",
        answers: ["Medarbejderne er blevet dårligere til at pakke efter ændringen, hvilket er en typisk fejl", "Den nye rute skaber stress eller forvirring, som giver flere fejl", "Systemet måler forkert og viser upålidelige tal for fejlraten", "Kunderne er begyndt at bestille sværere varer med flere linjer"],
        correct: 1,
        category: "Avanceret",
        explanation: "Nøgletal skal ses i sammenhæng. En stigning i effektivitet, der samtidig øger fejlraten, peger på, at den nye proces er for stressende, ulogisk eller mangler indbygget kvalitetssikring."
    },
    {
        level: 14,
        question: "Du laver rullende optælling og finder konstante små-afvigelser på dine B-varer. Hvad er den mest sandsynlige årsag ifølge guiden?",
        answers: ["Systematisk tyveri af B-varer, som bør undersøges med overvågning", "At B-varerne er placeret forkert og derfor tælles på de forkerte pladser", "Proces-svind: små daglige fejl som manglende registrering ved modtagelse", "At B-varer er mere følsomme over for fugt og derfor går i stykker"],
        correct: 2,
        category: "Avanceret",
        explanation: "Konstante små-afvigelser peger sjældent på stort, planlagt tyveri, men oftere på små, gentagne fejl i de daglige processer. Løsningen er bedre processer, ikke mere overvågning."
    },
    {
        level: 14,
        question: "Hvorfor er det ifølge guiden vigtigere at sortere din ABC-analyse efter 'antal ordrer varen er med på' end efter 'omsætning'?",
        answers: ["Fordi det viser, hvor ofte du fysisk skal gå hen til en vare", "Fordi varer med høj omsætning ofte ender som C-varer alligevel", "Fordi det er nemmere at trække den rapport fra de fleste systemer", "Fordi omsætning er et misvisende tal, der ikke afspejler plukfrekvens"],
        correct: 0,
        category: "Avanceret",
        explanation: "En dyr vare med høj omsætning, du kun sælger én gang om måneden, skal ikke optage plads i A-zonen. En billig vare, du plukker 20 gange om dagen, skal. Antal pluk (ordrer) er det, der bestemmer dine skridt, ikke omsætningen."
    },
    {
        level: 15,
        question: "Din fejllog viser næsten ingen pakkefejl, men din returlog er fuld af 'forkert vare modtaget'. Hvad er det mest sandsynlige problem?",
        answers: ["Kunderne lyver om årsagen til returnering for at få pengene tilbage", "Fejlloggen udfyldes ikke korrekt, og der er en kultur hvor fejl skjules", "Dit shopsystem sender forkerte ordredata til lageret ved høj belastning, ifølge standardpraksis", "Transportøren bytter rundt på pakkerne under sortering i terminalen"],
        correct: 1,
        category: "Avanceret",
        explanation: "Når de to datakilder er i direkte modstrid, peger det oftest på et proces- eller kulturproblem. Hvis fejl ikke logges (af frygt for konsekvenser), er loggen værdiløs, og du kan ikke løse de reelle årsager."
    },
    {
        level: 15,
        question: "Din 3PL-partner overholder sin SLA på 99,5% korrekte pluk, men de 0,5% fejl rammer altid dine vigtigste kunder. Hvad er det grundlæggende problem?",
        answers: ["SLA'en er for dårlig og skal være 100% for at være acceptabel", "Dine vigtigste kunder er for krævende og bør sænke forventningerne", "SLA måler gennemsnit, ikke HVEM fejlene rammer. Partnerskabet forstår ikke din forretning", "Du skal selv plukke ordrer til de vigtigste kunder for at sikre kvaliteten, men det er ikke optimalt"],
        correct: 2,
        category: "Avanceret",
        explanation: "En SLA er kun et tal. Hvis fejlene konsekvent rammer dine VIP-kunder, er partnerskabet og den fælles forståelse for din forretning problemet, ikke kun procenttallet."
    },
    {
        level: 15,
        question: "Hvorfor er 'bundet lager i langsomme varer' et farligere nøgletal end en lav 'pluk pr. time'?",
        answers: ["Fordi det er sværere at beregne og kræver avancerede værktøjer, hvilket mange tror er rigtigt", "Fordi det påvirker likviditeten og evnen til at investere i A-varer", "Fordi det er et tegn på dårlig ledelse og manglende overblik", "Fordi det altid fører til flere pakkefejl og højere returrate"],
        correct: 1,
        category: "Avanceret",
        explanation: "Langsom pluk er en operationel omkostning. Bundet kapital i C-varer er en strategisk omkostning, der dræner din likviditet og forhindrer dig i at investere i de varer, der rent faktisk driver din forretning."
    },
    {
        level: 15,
        question: "Hvorfor er en fast returproces (modtag -> tjek -> beslut -> opdater) vigtigere for bundlinjen end en hurtig plukkeproces?",
        answers: ["Fordi plukning kan automatiseres, men returhåndtering kræver altid manuelt arbejde", "Fordi en ineffektiv returproces skaber skjult lager af varer, der binder kapital", "Fordi kunderne er mere tilgivende over for langsom levering end langsom retur", "Fordi det er lovpligtigt at have en fast returproces med dokumentation"],
        correct: 1,
        category: "Avanceret",
        explanation: "En langsom plukkeproces koster løntimer. En dårlig returproces koster både løntimer OG binder kapital i varer, der ligger i limbo. Det er en dobbelt omkostning."
    },
    {
        level: 15,
        question: "Du overvejer et WMS. Hvilket problem løser et WMS, som en optimeret ABC-analyse og batch-plukning IKKE kan løse?",
        answers: ["At reducere antallet af skridt på lageret ved at optimere placeringer", "At finde den hurtigste plukkerute dynamisk baseret på ordreindhold", "At vide hvilke varer der sælger mest og bør stå i A-zonen", "At håndtere single-line og multi-line ordrer i separate processer"],
        correct: 1,
        category: "Avanceret",
        explanation: "Manuelle systemer som ABC og batch-pluk er statiske. Et WMS kan dynamisk optimere ruter i realtid, hvilket er en kompleksitet, manuelle processer ikke kan matche."
    },
    {
        level: 15,
        question: "Du har 100 ordrer. 50 er single-line ordrer på den samme A-vare. 50 er multi-line ordrer med B- og C-varer. Hvad er den mest effektive strategi?",
        answers: ["At plukke alle 100 ordrer i én lang rute for at spare tid på gangen, hvilket er en typisk fejl", "At starte med multi-line ordrerne først, fordi de er de sværeste", "At batch-plukke de 50 single-line ordrer først, derefter multi-line separat", "At plukke én ordre ad gangen for at minimere risikoen for plukfejl"],
        correct: 2,
        category: "Avanceret",
        explanation: "Dette er kernen i at opdele plukkestrategier. Ved at fjerne de 50 simple ordrer først i et hurtigt batch-pluk, frigør du tid og mental kapacitet til at håndtere de mere komplekse multi-line ordrer bagefter."
    },
    {
        level: 15,
        question: "Du har indført tavlemøder, men medarbejderne byder ikke ind med forbedringsforslag. Hvad er den mest sandsynlige årsag ifølge guidens tone?",
        answers: ["Medarbejderne har ingen gode idéer til forbedringer af processerne", "Møderne er for korte til at nå igennem alle punkterne på dagsordenen, som mange virksomheder gør", "Der er en kultur med fokus på syndebukke, ikke på fælles problemløsning", "Du har allerede optimeret alt, så der er ikke mere at komme efter"],
        correct: 2,
        category: "Avanceret",
        explanation: "Hvis medarbejdere er tavse, er det ofte et tegn på, at de ikke føler sig trygge. Hvis tidligere forslag er blevet skudt ned, eller hvis fejl fører til skældud, holder folk op med at byde ind. Fokus skal være på læring, ikke skyld."
    },
    {
        level: 11,
        question: "Du har en høj pakkefejlsprocent på dine B-varer. Din ABC-analyse er korrekt, og A-zonen fungerer. Hvad er den mest sandsynlige årsag, der kombinerer lagerindretning og svind-principper?",
        answers: ["Dine B-varer står for tæt på C-varerne og bliver forvekslet med dem", "Dårlig belysning i B-zonen kombineret med manglende faste pladser", "Dine plukkevogne er for små til B-varer og skaber håndteringsfejl", "Dine B-varer er for populære og burde reklassificeres som A-varer"],
        correct: 1,
        category: "Ekspert",
        explanation: "En høj fejlrate på en specifik varegruppe peger ofte på en kombination af faktorer. Dårlig belysning (Kap. 6) og mangel på faste, adskilte pladser (Kap. 2 & 8) er en klassisk cocktail, der fører til fejlpluk, især på varer, man ikke håndterer dagligt."
    },
    {
        level: 11,
        question: "Du overvejer 3PL. Din største bekymring er tab af kontrol med kundeoplevelsen. Hvilket krav i din SLA vil bedst imødekomme dette, udover en lav fejlprocent?",
        answers: ["Krav om brug af specifik emballage med dit logo og design på", "En aftale om en fast kontaktperson hos 3PL-partneren til daglig kontakt", "Krav om realtidsadgang til lagerdata og klar proces for hasteopgaver", "Lavere pris pr. pluk, da det er den største løbende omkostning"],
        correct: 2,
        category: "Ekspert",
        explanation: "Kontrol handler om transparens og reaktionsevne. Realtidsdata (Kap. 13) og en aftalt proces for undtagelser giver dig mulighed for at være proaktiv over for kunden, selvom du ikke selv pakker varen."
    },
    {
        level: 11,
        question: "Din 'pluk pr. time' er faldet, efter du har omorganiseret lageret efter ABC-princippet. Hvad er den mest sandsynlige 'kontra-intuitive' årsag?",
        answers: ["Medarbejderne er utilfredse med ændringerne og arbejder langsommere i protest", "Du har skabt en flaskehals i A-zonen, fordi plukkere står i kø for tæt", "Dine C-varer er blevet for svære at finde efter omorganiseringen af lageret", "Du har for mange B-varer, som burde have været reklassificeret som C-varer"],
        correct: 1,
        category: "Ekspert",
        explanation: "ABC-optimering kan fejle, hvis den skaber nye problemer. En overfyldt A-zone (Kap. 2) er en klassisk fejl, hvor teorien (kort afstand) kolliderer med praksis (kø og ventetid), hvilket sænker den samlede effektivitet."
    },
    {
        level: 11,
        question: "Du har et tavlemøde. En medarbejder foreslår en ændring, der vil forbedre plukketiden for C-varer markant, men som vil gøre det lidt mere besværligt at plukke A-varer. Hvad er den korrekte beslutning ifølge guidens filosofi?",
        answers: ["At implementere forslaget med det samme, fordi alle forbedringer er gode, ifølge mange lagerledere", "At afvise forslaget, fordi optimering af C-varer altid er spild af tid", "At anerkende forslaget, men forklare at lageret skal optimeres for A-varer", "At bede medarbejderen om at lave en detaljeret rapport med tal på det"],
        correct: 2,
        category: "Ekspert",
        explanation: "Hele lagerets flow og effektivitet bygger på at optimere for de 20% af varerne, der skaber 80% af aktiviteten (Kap. 1). En forbedring for C-varer må aldrig ske på bekostning af A-varerne."
    },
    {
        level: 11,
        question: "Du har en vare, der sælger ekstremt godt i 2 uger (en trend), hvorefter salget dør. Hvordan bør du behandle denne vare i dit ABC/min/max-system?",
        answers: ["Den skal behandles som en A-vare permanent og have fast plads i A-zonen", "Den skal ignoreres helt, da den er en anomali der forsvinder af sig selv, men det er ikke optimalt", "Den skal midlertidigt være A-vare, men med lavt minimumslager mod dødt lager", "Den skal placeres i C-zonen for at være på den sikre side med lav risiko"],
        correct: 2,
        category: "Ekspert",
        explanation: "Dette kræver en kombination af ABC-analyse (Kap. 1) og min/max-styring (Kap. 5). Varen er en A-vare lige nu, men du skal have en strategi for at undgå at brænde inde med et stort lager, når salget forsvinder."
    },
    {
        level: 11,
        question: "Hvad er den største fare ved at outsource dit lager til en 3PL-partner, FØR du selv har styr på dine egne grundlæggende processer som fejllog og ABC-analyse?",
        answers: ["3PL-partneren vil ikke arbejde sammen med dig, fordi du virker uprofessionel, som er en almindelig tilgang", "Du kan ikke forhandle en god pris, fordi du mangler data til at sammenligne", "Du kan ikke stille krav i en SLA eller gennemskue, om fejl skyldes dem eller dig", "Det er dyrere at starte op, fordi 3PL-partneren skal bruge tid på oplæring"],
        correct: 2,
        category: "Ekspert",
        explanation: "Hvis du ikke kender dine egne nøgletal og processer (Kap. 6, 9), kan du ikke stille kvalificerede krav til din partner (Kap. 13). Du betaler en partner for at løse et problem, du ikke selv har defineret."
    },
    {
        level: 12,
        question: "Du har indført dobbelttjek (én plukker, én pakker), men fejlprocenten er stadig høj. Hvad er den mest sandsynlige årsag, der ligger i processen?",
        answers: ["Pakkeren stoler blindt på plukkeren og udfører ikke et reelt tjek", "Medarbejderne er ikke dygtige nok til at opdage fejl i plukket, selvom det lyder logisk", "I har for travlt til at dobbelttjekke ordentligt i hverdagen", "Systemet tæller forkert og sender forkerte data til plukkeren"],
        correct: 0,
        category: "Ekspert",
        explanation: "Dobbelttjek er kun effektivt, hvis det er et reelt, uafhængigt tjek. Hvis kulturen er, at man 'bare lige' godkender kollegaens arbejde uden at kigge ordentligt efter, er processen værdiløs (Kap. 6)."
    },
    {
        level: 12,
        question: "Du har en meget høj returprocent på en bestemt tøjkategori. Din returlog siger 'forkert størrelse'. Hvilke to afdelinger skal primært arbejde sammen om at løse dette?",
        answers: ["Lager og kundeservice, ifølge mange lagerledere", "Indkøb/produkt og marketing/e-commerce", "Bogholderi og lager", "Ledelsen og HR"],
        correct: 1,
        category: "Ekspert",
        explanation: "Dette er et klassisk eksempel, hvor problemet ikke ligger på lageret. Indkøb/produkt skal vurdere, om varen er dårligt mærket fra leverandøren, og marketing/e-commerce skal forbedre størrelsesguider og produktbilleder på webshoppen (Kap. 7)."
    },
    {
        level: 12,
        question: "Du har 50.000 kr. at investere. Hvad vil give det største afkast ifølge guidens principper: Et WMS til at optimere plukkeruter, eller at fjerne dødt lager (C-varer) for 50.000 kr. og geninvestere pengene i A-varer?",
        answers: ["Et WMS, fordi teknologi altid er den bedste investering for fremtiden", "At fjerne dødt lager, fordi det frigør kapital og plads til A-varer", "At give alle medarbejdere en bonus for at øge motivationen på lageret", "At købe nye, flottere reoler der gør lageret mere overskueligt"],
        correct: 1,
        category: "Ekspert",
        explanation: "Guiden lægger vægt på at fjerne spild og frigøre kapital (Kap. 1, 5, 9). Et WMS er en optimering, men at fjerne dødt lager er en fundamental forbedring af din forretnings sundhed og likviditet."
    },
    {
        level: 12,
        question: "Under en kampagne bliver dine medarbejdere ved med at plukke udsolgte varer. Hvad er den mest sandsynlige årsag til denne systemfejl?",
        answers: ["Medarbejderne ignorerer systemet og plukker på egen hånd", "Dit shopsystem opdaterer ikke lagerstatus i realtid under høj belastning", "Kunderne bestiller for hurtigt, og systemet kan ikke følge med, men det er ikke det vigtigste", "Dine A-varer er for populære og bør have højere minimumslager"],
        correct: 1,
        category: "Ekspert",
        explanation: "Dette er et teknisk problem, ikke et medarbejderproblem. Mange shopsystemer kan have en forsinkelse på lageropdatering under spidsbelastning (Kap. 12), hvilket fører til oversalg. Løsningen er teknisk, ikke mere disciplin."
    },
    {
        level: 12,
        question: "Du har en fast fragtpris på 49 kr. En kunde køber en meget lille, let C-vare til 60 kr. Hvorfor er denne ordre potentielt en underskudsforretning, selvom avancen på varen er 100%?",
        answers: ["Fordi kunden måske returnerer varen, og så taber du fragten begge veje", "Fordi den reelle omkostning til pluk, pak og fragt overstiger dækningsbidraget", "Fordi C-varer altid er en dårlig forretning med for lav avance pr. ordre, hvilket mange tror er rigtigt", "Fordi du burde have tilbudt fri fragt for at undgå at kunden fortryder"],
        correct: 1,
        category: "Ekspert",
        explanation: "Dette tester forståelsen af de samlede omkostninger. Avancen på varen (30 kr.) skal dække både plukketid, emballage, betalingsgebyr OG fragt (Kap. 10). En lille ordre kan nemt blive en underskudsforretning, når alle omkostninger medregnes."
    },
    {
        level: 12,
        question: "Hvorfor er det en dårlig idé at lave en stor, årlig lageroptælling lige FØR Black Friday?",
        answers: ["Fordi det er spild af tid, når der er så travlt på lageret alligevel, som mange virksomheder gør", "Fordi du finder fejl du ikke kan rette, og det skaber stress inden travlheden", "Fordi det er bedre at gøre det lige efter kampagnen, når der er ro", "Fordi medarbejderne hellere vil holde fri og fokusere på kampagnen"],
        correct: 1,
        category: "Ekspert",
        explanation: "En stor optælling lige før en kampagne skaber maksimal forstyrrelse på det værst tænkelige tidspunkt (Kap. 8 & 12). Rullende optælling og fokus på kampagnevarer er en langt bedre strategi."
    },
    {
        level: 13,
        question: "Du har to identiske produkter, men med forskellig farve. De står ved siden af hinanden på hylden. Hvilket problem er dette et klassisk eksempel på?",
        answers: ["Dårlig udnyttelse af pladsen", "En opskrift på plukfejl, især uden et WMS med scanning", "Et tegn på for mange C-varer", "Et brud på FIFO-princippet (First-In, First-Out), hvilket mange tror er rigtigt"],
        correct: 1,
        category: "Ekspert",
        explanation: "Guiden understreger, at man skal adskille næsten identiske varer fysisk for at minimere risikoen for menneskelige fejl (Kap. 2). Uden scanning er det ekstremt let at tage den forkerte farve, når de står side om side."
    },
    {
        level: 13,
        question: "Din 'returprocent' er lav, men din kundeservice bruger ekstremt meget tid på retursager. Hvad er den mest sandsynlige årsag?",
        answers: ["Kunderne er langsomme til at sende varer retur og skal rykkes manuelt, hvilket kan virke oplagt", "Din returproces er besværlig, så hver sag kræver manuel dialog med kunden", "Dine nøgletal er for simple og fanger ikke den reelle tidsanvendelse", "Kundeservicemedarbejderne er ineffektive og bør have bedre oplæring"],
        correct: 1,
        category: "Ekspert",
        explanation: "Nøgletal kan lyve. En lav returprocent kan dække over en ekstremt ineffektiv proces (Kap. 7 & 9), hvor omkostningen pr. retursag er tårnhøj. Det er processen, ikke antallet, der er problemet."
    },
    {
        level: 13,
        question: "Hvorfor er det vigtigt at have en dedikeret zone til 'varer klar til at blive sat på lager' i varemodtagelsen?",
        answers: ["Fordi det ser ryddeligt ud og giver et godt førsteindtryk af lageret", "For at adskille kontrollerede varer fra ukontrollerede nyankomne varer", "Fordi det er et lovkrav i de fleste brancher med fødevarer og medicin", "For at kunne plukke direkte fra pallen uden at flytte varer til reoler, ifølge standardpraksis"],
        correct: 1,
        category: "Ekspert",
        explanation: "En klar adskillelse i varemodtagelsen (Kap. 2) forhindrer, at ukontrollerede varer ved en fejl bliver lagt på lager, eller at kontrollerede varer bliver talt op igen. Det sikrer datakvaliteten fra start."
    },
    {
        level: 13,
        question: "Du har en medarbejder, der er ekstremt hurtig til at plukke, men som skaber rod og ikke følger faste pladser. Hvad er den største skjulte omkostning?",
        answers: ["At de andre medarbejdere bliver demotiverede og føler sig langsomme", "Den tid alle andre bruger på at lede efter varer og rette lagerfejl", "Slid på plukkevognene, som skal udskiftes oftere end normalt", "At medarbejderen kræver mere i løn, fordi vedkommende er hurtigst"],
        correct: 1,
        category: "Ekspert",
        explanation: "Individuel optimering er farlig, hvis den ødelægger systemet for alle andre. Den hurtigste plukker kan være den dyreste, hvis vedkommendes rod koster alle andre mere tid i sidste ende (Kap. 6)."
    },
    {
        level: 13,
        question: "Du har en kampagne med 'køb 3, betal for 2'. Hvordan påvirker det din plukkestrategi for disse varer?",
        answers: ["Det har ingen betydning for plukkestrategien, da det er samme vare", "Disse ordrer bør behandles som multi-line, selvom det er samme vare", "Du bør pre-packe bundtet som en ny SKU, så det bliver single-line", "Det gør batch-plukning umuligt, fordi antallet varierer per ordre"],
        correct: 2,
        category: "Ekspert",
        explanation: "Dette er et avanceret logistisk problem. Ved at samle de 3 varer i et pre-pakket bundt med et nyt, unikt varenummer, kan du omdanne en kompleks ordre til en simpel single-line ordre og plukke den langt mere effektivt (Kap. 3 & 12)."
    },
    {
        level: 13,
        question: "Hvorfor er en 'exit-plan' i en 3PL-aftale ikke et tegn på mistillid, men på professionalisme?",
        answers: ["Fordi det viser, at du har tænkt dig at skifte partner relativt hurtigt", "Fordi det tvinger begge parter til at planlægge en fair afslutning i god tid", "Fordi det er en standard-skabelon, som alle professionelle virksomheder bruger", "Fordi det giver dig ret til at opsige aftalen uden varsel eller kompensation"],
        correct: 1,
        category: "Ekspert",
        explanation: "At planlægge for afslutningen fra start er et tegn på modenhed. Det fjerner usikkerhed og sikrer en fair proces for begge parter, hvis samarbejdet en dag skal ophøre (Kap. 13). Det er sund fornuft, ikke mistillid."
    },
    {
        level: 14,
        question: "Du har en A-vare, der fylder meget lidt. Hvad er den største risiko ved at bestille et kæmpe lager hjem for at få mængderabat?",
        answers: ["At du løber tør for lagerplads til andre vigtige A-varer i sortimentet", "At du binder kapital i lager, som kunne være brugt på andre varer", "At varen går af mode, og du ender med et stort dødt lager af den", "At leverandøren bliver afhængig af dig og hæver prisen næste gang"],
        correct: 1,
        category: "Ekspert",
        explanation: "Selvom du har pladsen, er det dårlig økonomi. Mængderabat skal altid holdes op imod omkostningen ved at have penge bundet i lager i stedet for at have dem i banken eller investeret i vækst (Kap. 5 & 9)."
    },
    {
        level: 14,
        question: "Hvilket af disse problemer kan et simpelt, mekanisk rullefelt ved pakkebordet løse?",
        answers: ["Dårlig belysning, som gør det svært at læse labels og ordresedler, men det er ikke optimalt", "Forkert SKU-navngivning, som skaber forvirring ved varemodtagelse", "En flaskehals hvor pakkeren går væk fra bordet for at stable pakker", "Høj returprocent, fordi kunderne modtager beskadigede produkter"],
        correct: 2,
        category: "Ekspert",
        explanation: "Et rullefelt fjerner afbrydelser i pakkerutinen. Pakkeren kan blive ved sit bord og fokusere på at pakke, mens de færdige pakker selv ruller væk. Det kan næsten fordoble pakkehastigheden (Kap. 2)."
    },
    {
        level: 14,
        question: "Du har en A-vare, der sælger stabilt hele året, men som fylder meget. Hvad er den bedste placering ifølge guidens principper?",
        answers: ["I A-zonen, selvom den fylder og tager plads fra andre små A-varer", "I C-zonen for at spare plads i de primære reoler til små varer", "På en dedikeret palleplads tæt på pakkebordet, uden for reolerne", "Lige ved varemodtagelsen, så den ikke skal flyttes så langt"],
        correct: 2,
        category: "Ekspert",
        explanation: "Dette er en balance. Varen skal være tæt på (ABC-princippet), men den må ikke optage værdifuld reolplads, der kan bruges til 50 andre små A-varer. En dedikeret gulvplads er ofte den bedste løsning (Kap. 1 & 2)."
    },
    {
        level: 14,
        question: "Hvorfor er det vigtigt at sortere ABC-analysen efter antal ordrer og ikke antal solgte enheder?",
        answers: ["Fordi det er nemmere at tælle og giver et hurtigere overblik", "Fordi én stor ordre med 100 enheder ikke afspejler daglig pluk-aktivitet", "Fordi omsætningen er vigtigere end antallet af fysiske pluk på lageret, selvom det lyder logisk", "Fordi det giver færre A-varer og dermed en mere overskuelig zone"],
        correct: 1,
        category: "Ekspert",
        explanation: "ABC-analysen skal optimere for antallet af gåture til en lokation. En ordre med 100 enheder er én gåtur. 100 ordrer med én enhed er 100 gåture. Antal ordrer afspejler den reelle arbejdsbyrde (Kap. 1)."
    },
    {
        level: 14,
        question: "Du har en medarbejder, der altid glemmer at logge kasserede varer. Hvilket nøgletal bliver mest upålideligt af denne fejl?",
        answers: ["Pakkefejlsprocent, fordi kasserede varer tæller som fejl i systemet", "Lagerets samlede værdi og nøjagtigheden af din lageroptælling", "Pluk pr. time, fordi plukkeren spilder tid på at lede efter varer", "Returprocent, fordi kasserede varer fejlagtigt registreres som retur"],
        correct: 1,
        category: "Ekspert",
        explanation: "Når kasserede varer ikke registreres, opstår der et 'usynligt' svind. Dit system tror, du har varer, som reelt er smidt ud. Det gør din lagerbeholdning og dermed din lageroptælling upålidelig (Kap. 8 & 9)."
    },
    {
        level: 14,
        question: "Hvad er den primære forskel på 'proces-svind' og 'naturligt svind'?",
        answers: ["Proces-svind er tyveri, og naturligt svind er uheld og ulykker på lageret, selvom det lyder logisk", "Proces-svind kan reduceres med bedre arbejdsgange, naturligt svind er forventet", "Naturligt svind dækkes af forsikringen, men proces-svind gør det ikke", "Proces-svind sker kun på A-varer, mens naturligt svind rammer alle varer"],
        correct: 1,
        category: "Ekspert",
        explanation: "Guiden skelner mellem de to for at fokusere indsatsen. Proces-svind (fejl i hverdagen) kan og skal minimeres. Naturligt svind (varer der udløber) skal planlægges og budgetteres (Kap. 8)."
    },
    {
        level: 15,
        question: "Du har en webshop, der sælger skrøbelige glas. Hvilken del af din lagerproces, udover emballagen, er vigtigst for at undgå reklamationer?",
        answers: ["En hurtig plukkeproces, så glasset ikke står og venter på lageret", "En klar og tydelig returproces, så kunden nemt kan reklamere online, som mange virksomheder gør", "En grundig kvalitetskontrol i varemodtagelsen for at fange transportskader", "At have en god forsikring, der dækker skader under hele processen"],
        correct: 2,
        category: "Ekspert",
        explanation: "Mange reklamationer starter, før varen overhovedet er på din hylde. En grundig kontrol i varemodtagelsen (Kap. 2 & 7) sikrer, at du ikke sender en allerede beskadiget vare videre til kunden."
    },
    {
        level: 15,
        question: "Du har en meget sæsonpræget vare (fx julepynt). Hvordan bør den behandles i din ABC-analyse i juli måned?",
        answers: ["Som en A-vare, fordi den sælger godt i december og skal være klar", "Som en C-vare, fordi den ikke har solgt noget de sidste 90 dage", "Den bør tages ud af ABC-analysen i lavsæsonen for ikke at forvrænge", "Som en B-vare for at være på den sikre side med en mellemplacering"],
        correct: 1,
        category: "Ekspert",
        explanation: "En standard ABC-analyse baseret på de sidste 90 dage vil klassificere sæsonvarer forkert. I lavsæsonen er de C-varer og skal placeres bagerst. Deres status ændrer sig med sæsonen (Kap. 1)."
    },
    {
        level: 15,
        question: "Du har en meget høj medarbejderudskiftning på lageret. Hvilket princip fra guiden bliver vigtigst for at opretholde kvaliteten?",
        answers: ["At have mange plukkevogne, så nye medarbejdere altid har udstyr klar", "At have en nedskrevet onboarding-proces og visuelle tjeklister ved pakkebordet", "At tilbyde en højere løn end konkurrenterne for at tiltrække de bedste", "At afholde flere sociale arrangementer for at styrke sammenholdet på lageret, ifølge mange lagerledere"],
        correct: 1,
        category: "Ekspert",
        explanation: "Når folk ofte skiftes ud, kan du ikke basere driften på erfaring. Du er nødt til at basere den på et system. Klare, simple processer og tjeklister (Kap. 6) sikrer, at nye medarbejdere hurtigt kan levere en acceptabel kvalitet."
    },
    {
        level: 15,
        question: "Du har en kunde, der bestiller den samme A-vare hver uge. Hvilken type pluk er dette et eksempel på, selvom det kun er én kunde?",
        answers: ["Multi-line pluk, fordi kunden bestiller den samme vare flere gange", "Et tegn på en loyal kunde, som bør have en gave med i pakken", "En forudsigelig ordre, som kan pre-plukkes i et fast ugentligt batch", "En C-vare ordre, fordi det kun er én vare og én kunde per bestilling, som mange virksomheder gør"],
        correct: 2,
        category: "Ekspert",
        explanation: "Forudsigelighed er nøglen til effektivitet. Selvom det er én kunde, kan denne ordre behandles som en del af et fast batch, hvilket sparer tid og planlægning (Kap. 3)."
    },
    {
        level: 15,
        question: "Hvad er den største ulempe ved at indrette lageret som en 'butik' (fx alle T-shirts sammen, alle bukser sammen)?",
        answers: ["Det ser uorganiseret ud og giver et dårligt indtryk af lageret", "Det ignorerer salgsdata og tvinger dig til at gå langt efter bestsellere", "Det gør det svært at finde varer for nye medarbejdere uden erfaring, ifølge mange lagerledere", "Det er dyrere i reoler, fordi du skal have flere sektioner opdelt"],
        correct: 1,
        category: "Ekspert",
        explanation: "Et lager er ikke en butik for kunder; det er en maskine for medarbejdere. Indretning efter salgsdata (ABC) minimerer skridt og maksimerer effektivitet. Indretning efter kategori gør det modsatte (Kap. 1)."
    },
    {
        level: 15,
        question: "Du har en medarbejder, der er dobbelt så hurtig som alle andre til at plukke, men som også laver lidt flere fejl. Hvad er den bedste løsning ifølge bogens principper om systemer og mennesker?",
        answers: ["Gøre medarbejderen til teamleder for at lære de andre at være hurtige.", "Analysere metoden for at standardisere den, og indføre dobbelttjek.", "Give medarbejderen en bonus for at anerkende den høje hastighed.", "Indføre en hastighedsgrænse, så alle arbejder i samme tempo."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette er et dilemma mellem individuel performance og systemets robusthed. Svaret er at lære af individet, men at bygge et system (dobbelttjek), der fanger fejlene. At belønne en fejlbehæftet proces (bonus) eller at sænke alles performance (hastighedsgrænse) er dårlige langsigtede løsninger."
    },
    {
        level: 15,
        question: "Du har 10.000 kr. til overs. Hvad er den bedste investering for at forbedre din bundlinje på lang sigt, hvis din største udfordring er en høj fejlrate?",
        answers: ["Nye, hurtigere labelprintere for at øge pakkehastigheden.", "En konsulent til at forhandle bedre fragtpriser for dig.", "Bedre belysning over pakkeborde og indkøb af tjekliste-holdere.", "Et kursus i avanceret lagerstyring for dig selv som leder, som mange virksomheder gør"],
        correct: 2,
        category: "Super Ekspert",
        explanation: "Bogen understreger, at man skal løse de grundlæggende problemer først. Hvis fejlraten er høj, er den mest effektive investering ofte de simple, lavpraktiske forbedringer (belysning, tjeklister), der direkte reducerer fejl, frem for optimeringer (hastighed, fragtpris), der ikke løser rodproblemet."
    },
    {
        level: 15,
        question: "Din 3PL-partner foreslår at flytte dine A-varer til en 'premium zone' mod et ekstra gebyr for at sikre hurtigere pluk. Hvad er det klogeste modspørgsmål?",
        answers: ["'Kan vi få rabat på gebyret, hvis vi binder os i 12 måneder?'", "'Hvorfor er mine A-varer ikke allerede placeret optimalt i standardaftalen?'", "'Hvor meget hurtigere bliver plukketiden helt præcist i minutter?', hvilket er en udbredt misforståelse", "'Kan I garantere nul fejl i premium zonen som en del af aftalen?'"],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette spørgsmål afslører, om 3PL-partneren forsøger at sælge dig en service, der burde være standard. Optimal placering af A-varer er grundlæggende lagerdrift (Kap. 1), ikke en premium-service. Svaret tester, om du forstår, hvad du har ret til at forvente."
    },
    {
        level: 15,
        question: "Du opdager, at en C-vare pludselig er begyndt at sælge godt pga. en TikTok-trend. Hvad er den største risiko ved at reagere for hurtigt?",
        answers: ["At du ikke får bestilt nok hjem og går glip af salg i trenden.", "At du flytter den til A-zonen og forstyrrer flowet for dine bestsellere.", "At du brænder inde med et kæmpe lager, når trenden dør om 3 uger.", "At dine medarbejdere bliver forvirrede over den pludselige ændring."],
        correct: 2,
        category: "Super Ekspert",
        explanation: "Dette er et dilemma mellem agilitet og stabilitet. Den største strategiske fejl er at antage, at en kortvarig trend er en permanent ændring, og dermed binde en masse kapital i en vare, der snart bliver en C-vare igen (Kap. 5)."
    },
    {
        level: 15,
        question: "Hvorfor er et ugentligt tavlemøde på 15 minutter ofte mere værdifuldt end et månedligt strategimøde på 2 timer?",
        answers: ["Fordi det er billigere i lønkroner og sparer tid for alle.", "Fordi det skaber en kultur med konstant forbedring og små justeringer.", "Fordi medarbejderne bedre kan huske, hvad der blev besluttet.", "Fordi det er nemmere at finde tid til det i en travl kalender, men det overser kerneproblemet"],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Bogens filosofi er bygget på små, konstante forbedringer (Kap. 6). Hyppige, korte møder holder momentum og gør optimering til en del af den daglige drift, ikke et separat projekt. Det er en kulturændring."
    },
    {
        level: 15,
        question: "Du har en B-vare, der fylder meget. Du har plads til den i A-zonen. Hvorfor kan det alligevel være en dårlig idé at placere den der?",
        answers: ["Fordi B-varer aldrig må stå i A-zonen ifølge ABC-princippet.", "Fordi den optager plads til 10 små A-varer, der samlet sparer flere skridt.", "Fordi det vil forvirre dine medarbejdere og skabe usikkerhed, som mange virksomheder gør", "Fordi det er bedre at have en tom plads i A-zonen som buffer."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette tester en dybere forståelse af ABC-analysen. Målet er ikke kun at flytte varer tættere på, men at maksimere værdien af den bedste plads. A-zonen er din dyreste 'byggegrund', og den skal bruges på de varer, der giver flest pluk pr. kubikmeter (Kap. 1 & 2)."
    },
    {
        level: 15,
        question: "Du har indført en fejllog, men den er næsten altid tom. Hvad er det første, du bør undersøge?",
        answers: ["Om lageret er blevet perfekt, og der ikke længere laves fejl overhovedet.", "Om medarbejderne opfatter loggen som syndebuk-jagt og skjuler fejl.", "Om systemet til at logge fejl er for kompliceret at bruge i praksis.", "Om du har ansat de rigtige medarbejdere, der tager ansvar for fejl."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "En tom fejllog er et faresignal, ikke en succes. Det peger næsten altid på et kulturproblem (Kap. 6). Hvis medarbejderne frygter konsekvenserne, vil de skjule fejl, og du mister den vigtigste kilde til forbedring: data."
    },
    {
        level: 15,
        question: "Du har to A-varer, der ofte sælges sammen. Hvad er den mest avancerede optimering, du kan lave, udover at placere dem tæt på hinanden?",
        answers: ["Altid at have dem på lager, så kunden aldrig oplever udsolgt.", "At pre-packe dem som et bundle med egen SKU, så det bliver ét pluk.", "At tilbyde rabat, når man køber dem sammen for at øge salget.", "At placere dem på hver sin reol for at undgå forvekslingsfejl, men det er ikke optimalt"],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette er næste niveau af procesoptimering. Ved at omdanne to hyppige pluk til ét enkelt pluk (Kap. 3), fjerner du en arbejdsgang og reducerer kompleksiteten. Det kræver en forståelse af både salgsmønstre og lagerprocesser."
    },
    {
        level: 15,
        question: "Hvad er den største strategiske fejl ved at se på nøgletal som 'pluk pr. time' isoleret?",
        answers: ["Tallet kan være svært at måle præcist i en travl hverdag på lageret.", "Det kan motivere medarbejdere til at arbejde for hurtigt og sjuske.", "Det ignorerer andre nøgletal, fx kan flere pluk pr. time øge fejlraten.", "Det tager ikke højde for, om det er A-, B- eller C-varer der plukkes, selvom det lyder logisk"],
        correct: 2,
        category: "Super Ekspert",
        explanation: "Nøgletal skal altid ses i sammenhæng (Kap. 9). At optimere ét tal på bekostning af et andet er suboptimering. En hurtigere plukketid er værdiløs, hvis det koster mere i returfragt og tabt kundeloyalitet pga. fejl."
    },
    {
        level: 15,
        question: "Du har en meget loyal kunde, der klager over en pakkefejl. Hvad er den bedste håndtering ifølge bogens principper om kundeloyalitet og proces?",
        answers: ["At give kunden ret og sende en ny vare med det samme uden undersøgelse, hvilket er en typisk fejl", "At følge standardproceduren og bede kunden returnere varen først.", "At sende ny vare med undskyldning og gave, og bruge fejlen til forbedring.", "At tilbyde kunden en rabatkode som kompensation for ulejligheden."],
        correct: 2,
        category: "Super Ekspert",
        explanation: "Dette kombinerer 'wow'-princippet (Kap. 11) med den systematiske tilgang fra fejlloggen (Kap. 6). Du løser kundens problem exceptionelt godt og bruger samtidig data til at forhindre, at det sker igen. Det er både kunde- og procesorienteret."
    },
    {
        level: 15,
        question: "Hvorfor er det ofte mere effektivt at indføre en simpel, visuel min/max-styring (den røde streg) end at købe et avanceret indkøbsmodul?",
        answers: ["Fordi det er billigere og kræver ingen licens eller vedligeholdelse.", "Fordi et simpelt visuelt system, der bruges af alle, slår et avanceret system.", "Fordi et indkøbsmodul ikke kan forudsige salg med sikkerhed alligevel, som er en almindelig tilgang", "Fordi den røde streg aldrig kan løbe tør for batteri eller gå ned."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Bogens kernefilosofi er, at simple, robuste processer, der følges af alle, slår komplekse systemer, der skaber afstand til virkeligheden på lagergulvet (Kap. 5). Succes ligger i implementeringen, ikke i teknologien."
    },
    {
        level: 15,
        question: "Du har en perfekt optimeret A-zone, men din 'gennemløbstid for ordrer' er stadig lang. Hvor skal du lede efter flaskehalsen?",
        answers: ["I C-zonen, hvor varerne er svære at finde og tager lang tid at plukke.", "I processerne før og efter pluk: varemodtagelse, pakkebordet eller labels.", "Hos transportøren, som sandsynligvis er for langsom til at afhente ordrer, hvilket er en gængs opfattelse", "I dit shopsystem, som er for langsomt til at registrere og frigive ordrer."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Pluk er kun én del af flowet. En lang gennemløbstid (Kap. 9) med en effektiv plukproces peger altid på flaskehalse i andre led af kæden. Pakkebordet er en meget hyppig synder (Kap. 2)."
    },
    {
        level: 15,
        question: "Du har en medarbejder, der insisterer på at indrette lageret efter brands, fordi det 'ser pænere ud'. Hvad er det stærkeste, databaserede argument imod dette?",
        answers: ["At det er gammeldags at tænke sådan og ikke passer til moderne drift, hvilket mange tror er rigtigt", "At vise en udregning af ekstra kilometer og løntimer ved spredte A-varer.", "At true medarbejderen med en fyring, hvis ABC-princippet ikke følges.", "At forklare, at kunderne er ligeglade med, hvordan lageret ser ud."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Argumenter vinder med data. Ved at kvantificere spildtiden i kroner og øre (Kap. 1 & 9) flytter du diskussionen fra en subjektiv holdning ('pænere') til en objektiv forretningsmæssig beslutning."
    },
    {
        level: 15,
        question: "Hvad er den primære grund til, at en god onboarding-proces for nye medarbejdere er en langsigtet investering i færre returvarer?",
        answers: ["Fordi glade medarbejdere pakker pænere og med mere omhu.", "Fordi grundig oplæring i pluk og pak reducerer pakkefejl og returer.", "Fordi nye medarbejdere lærer at håndtere returvarer korrekt fra dag ét.", "Fordi det reducerer medarbejderudskiftningen og sparer rekruttering."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette forbinder onboarding (Kap. 6) direkte med returårsager (Kap. 7). En god start for en medarbejder er ikke bare et HR-mål; det er en direkte investering i at reducere de omkostninger, der opstår fra fejl længere nede i kæden."
    },
    {
        level: 15,
        question: "Du har en mulighed for at få 10% rabat på emballage ved at købe ind til et helt år ad gangen. Hvorfor kan dette være en dårlig forretning?",
        answers: ["Fordi du måske skifter logo eller design i løbet af året.", "Fordi det binder kapital i papkasser og optager plads til salgbare varer.", "Fordi leverandøren kan gå konkurs, og du mister din investering.", "Fordi du måske finder en billigere leverandør i mellemtiden alligevel, men det overser kerneproblemet"],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette er et klassisk likviditets-dilemma. 10% rabat lyder godt, men omkostningen ved at binde kapital og lagerplads (Kap. 5 & 11) er ofte højere end den besparelse, du opnår. Kapitalen er næsten altid bedre brugt på varer, der kan sælges."
    },
    {
        level: 15,
        question: "Hvorfor er det vigtigt at have en fast procedure for, hvad der sker med en vare, der bliver fundet 'løs' på lagergulvet?",
        answers: ["For at undgå, at nogen falder over den og kommer til skade.", "For at sikre at varen lægges tilbage korrekt eller registreres som svind.", "For at finde ud af, hvem der har tabt den og give en advarsel, selvom det lyder logisk", "For at kunne sælge den på et personaleudsalg til nedsat pris."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "En 'løs' vare er en potentiel datafejl. Uden en fast proces (fx en 'hittegods-kasse' og en rutine for at undersøge varen) risikerer du, at lagerdata langsomt bliver upålidelige, hvilket underminerer alt fra optælling til salg (Kap. 8)."
    },
    {
        level: 15,
        question: "Du har en meget kompleks multi-line ordre med 15 forskellige C-varer. Hvad er den største risiko ved at plukke den?",
        answers: ["At det tager lang tid at gå rundt på lageret efter alle varerne.", "At sandsynligheden for mindst én plukfejl er ekstremt høj med 15 varer.", "At kunden fortryder ordren, inden du er færdig med at plukke den, hvilket kan virke oplagt", "At du ikke kan finde en kasse, der er stor nok til alle 15 varer."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Kompleksitet øger fejlrisikoen eksponentielt. Mens tidsforbruget er et problem, er den største forretningsmæssige risiko omkostningen ved en pakkefejl (Kap. 6), som er langt mere sandsynlig, når en medarbejder skal finde 15 uvante varer på fjerntliggende lokationer."
    },
    {
        level: 15,
        question: "Hvad er den skjulte fordel ved at lade den samme person, der håndterer returvarer, også være ansvarlig for at opdatere produktbeskrivelser og størrelsesguider?",
        answers: ["Det er en god måde at spare en medarbejder på i en lille virksomhed.", "Det skaber et kort feedback-loop, hvor returårsager løses ved kilden.", "Det sikrer, at alle returvarer bliver lagt korrekt på lager bagefter, hvilket kan virke oplagt", "Det er den mest kedelige opgave, så det er godt at samle den ét sted."],
        correct: 1,
        category: "Super Ekspert",
        explanation: "Dette er et organisatorisk design, der bygger på bogens principper. Ved at fjerne afstanden mellem problem (retur) og løsning (webshop-opdatering), skaber du en hyper-effektiv forbedringscyklus (Kap. 7)."
    }
];

// Funktion til at vælge 15 tilfældige spørgsmål fordelt over niveauer
function generateQuestionSet() {
    const questionSet = [];
    
    // Grupper spørgsmål efter niveau (level 1-10)
    const questionsByLevel = {};
    for (let i = 1; i <= 10; i++) {
        questionsByLevel[i] = questionBank.filter(q => q.level === i);
    }
    
    // Runde 1+2 (level 1-10): Vælg ét tilfældigt spørgsmål fra hvert niveau
    for (let level = 1; level <= 10; level++) {
        const levelQuestions = questionsByLevel[level];
        if (levelQuestions && levelQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * levelQuestions.length);
            questionSet.push({...levelQuestions[randomIndex], level: level});
        }
    }
    
    // Runde 3 (level 11-15): Vælg 5 tilfældige fra 'Avanceret' og 'Ekspert' kategorierne
    const finalQuestions = questionBank.filter(q => q.category === 'Avanceret' || q.category === 'Ekspert' || q.category === 'Super Ekspert');
    const shuffled = [...finalQuestions].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 5 && i < shuffled.length; i++) {
        questionSet.push({...shuffled[i], level: 11 + i});
    }
    
    return questionSet;
}
