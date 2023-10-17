---
title: Last opp data
nextjs:
  metadata:
    title: Installation
    description: Quidem magni aut exercitationem maxime rerum eos.
---

Scope 321 virker best når du laster inn data fra en SAF-T regnskapsfil. SAF-T er standard eksportformat fra hvilket som helst regnskapsystem godkjent i Norge. Noen systemleverandører kan gjemme unna muligheten til å eksportere litt i dypemenyer da filen også kan brukes til å bytte regnskapsystem på en enkel måte.

---

## Hvorfor Scope321 bruker SAF-T filen

Alle regnskapsystem er forskjellig og det er vanskelig å integrere datastrøm mellom alle systemer på en sikker måte. Derfor bruker Scope321 SAF-T filen som er standard format for alle systemer i Norge. På sikt vil vi kanskje integrere noen av de mest populære systemene.

### Hvordan eksportere til SAF-T

Dette varierer fra system til system. Alle leverandørene har egne implementeringer og derfor bør du sjekke med regnskapsfører og/eller systemleverandør. Det bør være enkelt å gjøre - hvis ikke så er det leverandørens plikt å hjelpe til.

{% callout title="Hvor skal du lete" %}
Du finner gjerne muligheter til eksport av data under `innstillinger` eller lignende. Sørg for at du finner SAF-T eksport. Fordelen er jo at du blir bedre kjent med ditt regnskapssytem. :-)
{% /callout %}

SAF-T eksport kan ofte gjøres i forhold til en gitt tidsperiode. Du kan velge om du skal ta med alt for et helt år eller bare en måned eller et kvartal. Dette er helt opp til deg å velge. Hvis det ikke er et veldig stort antall transaksjoner så kan det være fornuftig å ta ut et helt år i en fil.

Del gjerne opp filene slik som du ønsker å jobbe med dem. Jo mindre antall transaksjoner jo fortere kan de behandles og kontrolleres. Det er en fordel å jobbe med klimaregnskapet litt oftere enn en gang i året. Derfor anbefaler vi at du forholder deg til kvartaler eller måneder.

{% callout type="warning" title="Pass på datovalgene!" %}
Pass på at det ikke er overlappende datoer. Dette vil føre til duplikater av transaksjoner og det vil vi ikke. Systemene har hver sin måte å navngi filene. Det kan være en ide å endre navnet til å angi perioden de inneholder.
{% /callout %}

## Data som lastes inn fra SAF-T

Systemet laster inn basisinformasjon om selskapet som organisasjonsnummer, kontaktperson, adresse o.l. Fra SAF-T filen kan vi hente informasjon om alle kontoer dere bruker i regnskapet, hvilke leverandører som er registrert, og alle transaksjoner hvor noe er kjøpt inn. Det er disse som er utgangspunktet for alle utslipp i verdikjeden.

### Manuell data

Det er ikke anbefalt, men det er fortsatt mulig å legge inn data manuelt. Det er ganske mye jobb i et selskap av litt størrelse. For rapportering av kun Scope 1 og Scope 2 så er det mulig. For Scope 3 bør du først opprette leverandørene og så registrere kjøp fra disse.
