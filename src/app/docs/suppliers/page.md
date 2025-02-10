---
title: Leverandører
nextjs:
  metadata:
    title: Leverandører
    description: Hvordan man redigerer leverandører i Scope321
---

## Redigere en leverandør

Ved å dobbeltklikke på leverandørlinjen vil du få muligheten til å redigere informasjonen om leverandøren. Du vil få et vindu som følger:
![Supplier](/images/supplier-edit.png)

Her finner du en del redigeringsmuligheter. Det viktige er søkefeltet, _Nace Kode_ og _Leverandørens co2-intensitet_.
I **Søkefeltet** kan du forsøke å søke opp selskapet om det ikke var registrert på et organisasjonsnummer i regnskapssystemet. Du kan søke på navn og organisasjonsnummer. Hvis du finner det vil informasjon fra brønnøysundregisteret bli innhentet. _Nace Kode_ blir da hentet og industrien som koden representerer lagres. Leverandøren vil da også få en ny co2-intensitet. Hvis _Nace Kode_ ikke representerer de varer og tjenester som kjøpes fra selskapet kan du velge å sette din egen _Nace Kode_. Du kan søke etter en bestemt Nace kode hvis du vet hilken kode du er ute etter eller en industri på navn som kanskje er lettere. Velg en industri som representerer de varer og tjenester som du handler fra leverandøren. _Leverandørens co2-intensitet_ vil da endres i henhold til den nye koden.

**Leverandørens co2-intensitet** er faktoren systemet bruker for å beregne utslippene fra kjøp fra leverandøren. Du kan også sette denne manuelt om du har informasjon fra leverandøren om deres co2_intensitet per 1000 NOK. Dette kan være om leverandøren har publisert et fullstendig klimaregnskap og sin omsetning. Da kan man regne ut faktoren ved å dele utslippene i kilo på omsetning i 1000 kroner. Husk at det må være et fullstendig og korrekt klimaregnskap og ikke et klimaregnskap hvor selskapet kun har inkludert deler av sine utslipp. Hvis faktoren er veldig forskjellig fra Nace Kode faktoren(+- 40%) bør man være skeptisk. Bruk heller en for høy faktor enn en som er unaturlig lav.

Faktoren som her settes på leverandøren vil forbli på leverandøren i fremtidige regnskapsperioder slik at du ikke behøver å oppdatere leverandører hvert år. Husk å sette _Status_ til grønt flagg før du lagrer. Alle transaksjoner med denne kunden i inneværende år(vær sikker på at riktig rapporteringsår er satt i toppen av applikasjonen).

Legg gjerne inn litt mer informasjon om leverandøren i _Notater_ feltet. Dette kan være en kort beskrivelse av hva slags varer og tjenester som kjøpes fra leverandøren eller hvilke antakelser som er tatt for å beregne co2-intensiteten. Legg gjerne inn navn og kontaktinformasjon til leverandøren hvis du har snakket med dem om deres utslipp.
