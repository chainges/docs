---
title: Bruk av aktivitetsdata
nextjs:
  metadata:
    title: Bruk av aktivitetsdata
    description: Aktivitetsdata kan brukes for å få et mer detaljert og korrekt resultat hvis man har bedre aktivitetsdata..
---

Aktivitetsdata kan brukes for å få et mer detaljert og korrekt resultat. Dette er utslippsberegninger som er gjort på bakgrunn av faktiske utførte aktiviteter. Dette er et alternativ til å bruke Nace koder som er basert på bransjer og kostnader. Aktivitetsdata anses som bedre kvalitet enn kostnadsdata. Ettersom kostnader varierer med priser og valutakurser. For å beregne utslippene trenger du informasjon om aktiviteten og hvilke innsatsfaktorer som er involvert i aktiviteten. Når du har åpnet en eller flere transaksjoner for redigering kan du klikke på knappen nederst til venstre for å få opp flølgende skjermbilde. Her kan du beregne utslipp basert på aktivitetsdata. Her er det flere muligheter for hvert _Scope_ og scope 3 oppstrømskategori.

![detailEdit](/images/detaljert.png)

## Scope 1

Hvis du redigerer en transaksjon som er merket som _Scope 1_ vil du ha følgende muligheter:

- **Utslipp fra forbrenning**
  - Her er det snakk om forbrenning av fossile brennstoff i produksjon.
- **Utslipp fra kjøretøy**
  - Her er det snakk om utslipp fra kjøretøy som eies og/eller kontrolleres av virksomheten.
- **Prosess og flyktige utslipp**
  - Her er det snakk om utslipp fra prosesser og flyktige stoffer i produksjon so for eksempel lekasjer fra kjølesyster eller kjemiske reaksjoner.
- **Andre scope 1 utslipp**
  - Annet som defineres som _Scope 1_

## Scope 2

Hvis du redigerer en transaksjon som er merket som _Scope 2_ vil du ha følgende muligheter:

- **Utslipp fra elektrisitet**
  - Dette er rent strømforbruk i produksjon, men også til lys og varme. Du finner gjerne antall kilowatt-timer (kWh) i fakturaen.
- **Utslipp fra varme**
  - Dette er varme (og kjøling) som brukes i bedriften. Det er stort sett fjernvarme det er snakk om og vi har en standard faktor for dette som du kan endre dersom du har mer spesifikk informasjon om utslippet per KWh. Du finner gjerne antall kilowatt-timer (kWh) i fakturaen.
- **Utslipp fra elektriske kjøretøy**
  - Dette er utslipp fra elektriske kjøretøy som eies og/eller kontrolleres av virksomheten. Ofte er denne strømmen inkludert i en samlet faktura for elektrisitet da det som regel lades biler fra bedriftens målepunkt. Det er ikke spesielt viktig å skille på dette, men en mulighet hvis man vil være nøye og ønsker slik spesifikasjon.
- **Andre scope 2 utslipp**
  - Annet som defineres som _Scope 2_

## Scope 3

Hvis du redigerer en transaksjon som er merket som _Scope 3_ vil du ha følgende muligheter:

- **Innkjøp av varer og tjenester**
- **Kapitalvarer**
- **Drivstoff- og energirelaterte utgifter**
- **Oppstrøms transport og distribusjon**
- **Avfall**
- **Forretningsreiser**
- **Pendling for ansatte**
- **Oppstrøms leasing**

#### Kategori 1 - Innkjøp av varer og tjenester

Dette er gjerne den største kategorien. Det er snakk om alle varer som kjøpes inn. Det er alt fra ferdigvarer, råvarer, tjenester og alt annet som kjøpes for å få produksjonen til å fungere. Hvilken konto det er ført på i regnskapet sier oss noe om hva slags varer det er snakk om. Varer i 4000-serien er gjerne varer til produksjon, mens alle andre er varer å tjenester til støtteaktiviteter.

Du kan her velge mellom to forskjellige måter å beregne utslippene på. Du kan enten velge å bruke _Basis Input_ eller _Materialer_. Det er samme beregningsmåte, men hvis du ønsker å holde kontroll på mengden kan du velge å bruke _Materialer_ som også tar med mengden. Dette kan være nyttig om man vet utslippsfaktoren per kilo og har totalvekten på leveransen.

#### Kategori 2 - Kapitalvarer

Det er snakk om varer som er kjøpt for å brukes i produksjonen. Dette kan være maskiner som avskrives over tid og derfor defineres som kapitalvarer.

#### Kategori 3 - Drivstoff- og energirelaterte utgifter

Denne kategorien er utslipp relatert til andre _Scope 1_ eller _Scope 2_ utslipp. Dette er det man kaller WTT(Well-To-Tank). Det er verdikjedeutslipp for energi og drivstoff. Det er rett og slett utslipp fra oljeproduksjon og strømdistribusjon. Disse utslippene beregnes automatisk når primærutslippene registreres så her kan du ikke legge inn noe spesielt. Du kan ikke registrere utslipp for dette her, men du kan legge til en transaksjon med kjent utslipp og velge denne kategorien om du vil.

#### Kategori 4 - Oppstrøms transport og distribusjon

Denne kategorien omfatter utslipp knyttet til transport og distribusjon(inkludert lagring) av produkter kjøpt av det rapporterende selskapet i perioden det rapporteres for. Transport mellom selskapets leverandører og dets egne operasjoner (i kjøretøy og fasiliteter som ikke eies eller kontrolleres av det rapporterende selskapet).

Transport til kunder omfattes av nedstrømskategori 9. Her er det et definisjonsspørsmål om leveringen til kunden, som betales av rapporterende selskap, er en del av produktet. Hvis det er en tjeneste som viderefaktureres direkte til kunden, og hvor kunden kan velge bør dette sees på som nedstrøms transport. Hvis transporten til kunden er en del av produktet ansees 'gate'(grensesnittet mellom leverandør og kunde) der hvor varen overleveres. Et eksempel kan være varer levert til byggeplass. Hvis man har full kontroll over denne transporten vil vi anbefale å inkludere dette her under oppstrøms transport. Men det kan være nyttig å skille på dette selv i klimaregnskapet og anse det som nedstrøms transport. Hvis det skal rapporteres under kategori 9 må transaksjoner flyttes fra denne kategorien til kategori 9. Merk transaksjonen(e) - Høyreklikk på transaksjonen og velg kategori 9 under _Scope 3 kategori_-listen.

#### Kategori 5 - Avfall

Avfall og avfallshåndtering faller inn under denne kategorien. Hvis avfall er vesentlig i henhold til vesentlighetsanalysen eller det er store mengder anbefaler vi å ta en prat med din avfallshåndterer. Det er store sprikende variasjoner mellom faktorer som brukes for forskjellige avfallskategorier. Scope321 har en faktor for avfallshåndtering generelt som kan brukes for mindre mengder. For større mengder har vi faktorer for de viktigste. Om avfall går til gjenvinning, resirkulering eller deponering så vil det være store forskjeller. Så det kan det være lurt å ta en prat med avfallshåndleren for å få en mer nøyaktig beregning. Mange har blitt flinke til dette nå.

#### Kategori 6 - Forretningsreiser

Her er det snakk om reiser i jobb. Alt som går på en reiseregning kommer inn under denne kategorien og reiseutgifter betalt direkte av selskapet. Flyreise, hotell, mat, taxi, buss, tog, båt og bilreiser er eksempler her.

#### Kategori 7 - Pendling for ansatte

Her er det snakk om reiser utenfor jobb, men som likevel er jobbrelaterte. Ansattes pendling til åg fra jobb faller inn under bedriftens klimapåvirkning siden det er utslipp som er relatert til bedriftens leveranse. Pendling er vanligvis ikke med i bedriftens finansregnskap og således ingen transaksjoner i SAF-T. Unntaket er om det utbetales en kompensasjon til ansatte for pendling. I så fall må man sikre at det ikke blir dobbelttelling.

#### Kategori 8 - Oppstrøms leasing

Det er stort sett leie av maskiner og lokaler som kommer inn under denne kategorien. Lokaler er ofte en stor utgift og viktig kilde til utslipp.

**Maskiner**

Maskiner er viktig i produksjonen og ofte leies disse fra en leverandør. Hvis man ønsker å gjøre en kalkulasjon av dette så er det i utgangspunktet utlipp ved produksjon av maskinen som fordeles ut over perioder i maskinens levetid. Er maskinens levetid 5 år vil en femtedel av produksjonsutslippene tilskrives for hvert år. Slike livssyklusutslipp er frivillig å ta med, men vi anbefaler at det tas med da det gir et riktigere bilde av bedriftens utslipp. Hvis det ikke taes med kan en bedrift kutte sine utslipp ved å kun leie produksjonsutstyr.

**Bygninger**

En viktig leiekostnad kan være bygninger som brukes i bedriften. Dette kan være kontorlokaler og/eller produksjonsanlegg. Hvis bygninger eies skal utslipp i forbindelse med oppføring løpende rapporteres eller når det kjøpes/overtaes. Et bygg har to hovedkilder til utslipp. Iboende karbon i materialene og energiforbruk i bruksfasen. Det er ikke vanlig å inkludere livssyklusutslipp for leide bygninger. Selv om dette er likt situasjonen med utstyr. Hvis man ønsker å gjøre det for å gi et mer korrekt bilde av utslippene bedriften er ansvarlig for vil vi anbefale å bruke en faktor som er 7,9 kg co2e per kvadratmeter per år. Dette er et gjennomsnittstall som er bedre enn ingen ting hvis man ikke har eller kan få tak i byggets iboende karbon fra LCA-data.

Operasjonelle utslipp fra bygg skal alltid rapporteres. Under kategori 8 har vi en liste med forskjellige bygg og deres gjennomsnittlige energiforbruk for gitte perioder. Faktoren er for generelt bruk, men hvis man vet mer om byggets byggestandard kan man endre faktoren. Nedenfor følger en tabell over energiforbruk i bygg fra Sintef. Tallene er energi i kwh per kvadratmeter per år. Så du kan se at litt bedre standard gir et betydelig lavere energiforbruk.

| Category      | Eldre | TEK49 | TEK69 | TEK87 | TEK97 | TEK07 | TEK10 | TEK17 |
| ------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Barnehage     | 437   | 395   | 370   | 263   | 206   | 160   | 131   | 131   |
| Kontor        | 261   | 255   | 271   | 235   | 189   | 152   | 120   | 115   |
| Skole         | 283   | 264   | 275   | 231   | 183   | 134   | 102   | 102   |
| Universitet   | 251   | 236   | 290   | 254   | 205   | 162   | 125   | 125   |
| Sykehus       | 300   | 285   | 403   | 450   | 386   | 319   | 240   | 225   |
| Sykehjem      | 311   | 292   | 334   | 366   | 297   | 227   | 169   | 169   |
| Hotell        | 331   | 312   | 371   | 365   | 307   | 249   | 196   | 190   |
| Idrettsbygg   | 379   | 349   | 390   | 268   | 215   | 153   | 125   | 125   |
| Forretning    | 366   | 335   | 448   | 343   | 379   | 317   | 246   | 180   |
| Kulturbygning | 305   | 284   | 297   | 274   | 228   | 180   | 145   | 140   |
| Lett industri | 398   | 368   | 432   | 291   | 236   | 189   | 158   | 140   |

Hvis du har en energiklassifisering så kan du sjekke følgende tabell:

| Bygningskategorier               | A                              | B                                | C                                | D                                | E                                | F                                | G   |
| -------------------------------- | ------------------------------ | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | --- |
| Småhus                           | Lavere enn eller lik 95 +800/A | Lavere enn eller lik 120 +1600/A | Lavere enn eller lik 145 +2500/A | Lavere enn eller lik 175 +4100/A | Lavere enn eller lik 205 +5800/A | Lavere enn eller lik 240 +8000/A | >F  |
| Leiligheter (boligblokk)         | Lavere enn eller lik 85/A      | Lavere enn eller lik 110 +1500/A | Lavere enn eller lik 135 +2200/A | Lavere enn eller lik 165 +3500/A | Lavere enn eller lik 195 +4900/A | Lavere enn eller lik 230 +7000/A | >F  |
| Barnehage                        | 80.00                          | 100.00                           | 125.00                           | 155.00                           | 185.00                           | 220.00                           | >F  |
| Kontorbygning                    | 85.00                          | 105.00                           | 130.00                           | 160.00                           | 190.00                           | 225.00                           | >F  |
| Skolebygning                     | 75.00                          | 95.00                            | 120.00                           | 150.00                           | 180.00                           | 215.00                           | >F  |
| Universitets- og høgskolebygning | 90.00                          | 110.00                           | 135.00                           | 165.00                           | 195.00                           | 230.00                           | >F  |
| Sykehus                          | 175.00                         | 200.00                           | 245.00                           | 290.00                           | 330.00                           | 380.00                           | >F  |
| Sykehjem                         | 140.00                         | 165.00                           | 210.00                           | 255.00                           | 295.00                           | 345.00                           | >F  |
| Hotellbygning                    | 140.00                         | 165.00                           | 210.00                           | 255.00                           | 295.00                           | 345.00                           | >F  |
| Idrettsbygning                   | 125.00                         | 150.00                           | 195.00                           | 235.00                           | 275.00                           | 320.00                           | >F  |
| Forretningsbygning               | 115.00                         | 140.00                           | 185.00                           | 225.00                           | 265.00                           | 305.00                           | >F  |
| Kulturbygning                    | 95.00                          | 120.00                           | 165.00                           | 205.00                           | 245.00                           | 285.00                           | >F  |
| Lett industribygg, verksted      | 105.00                         | 130.00                           | 175.00                           | 215.00                           | 255.00                           | 300.00                           | >F  |

For ytterligere informasjon kan du se {% external-link href="https://ghgprotocol.org/sites/default/files/2022-12/Chapter8.pdf" %}GHG-protokollens informasjon om kategori 8.{% /external-link %}
