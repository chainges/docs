---
title: Fremgangsmåte
nextjs:
  metadata:
    title: Fremgangsmåte
    description: Hvilke steg som man bør gå igjennom for å sikre kvalitet.
---

Når du har lastet in regnskapsdata i systemet så vil vi anbefale følgende fremgangsmåte for å sikre at alle tall er så gode som mulig. Det er ikke mulig å gjøre et klimaregnskap 100% automatisk ennå, men vi jobber på saken - sammen.

---

## Leverandørgjennomgang

Det første man bør gjøre er å sjekke alle leverandører til selskapet. Via SAF-T får selskapet lastet inn alle leverandører som er registrert i regnskapsprogrammet. Det kan være mange da tidligere leverandører som ikke lenger er aktive ikke slettes. Derfor er det greit å bruke filterende i datatabellen til å finne de viktigste leverandørene.

### Filter

Alle kolonnene i datatabellene kan brukes som filter og det skal være lett å kjenne igjen måten å gjøre dette på da det er helt likt det vi kjenner fra Excel. Det er mulighet til å sortere og søke etter spesielle verdier basert på datatypen i gjeldende kolonne. Følgende viktige kolonner finner du i leverandørtabellen.

1. **Leverandør Navn**
2. **Nace Kode**
3. **Industri**
4. **Status**
5. **Transaksjoner**
6. **Totale Utslipp**

Ved å bruke _Status_ kolonnen kan du finne alle leverandører som systemet ikke har noe data på utover det som kommer fra regnskapsystemet. Velg '3' og alle disse vil vises med rødt flagg. Videre kan du sortere _Totale Utslipp_ størst til minst for å se om noen av disse leverandørene har et stort utslipp. Her kan du således redigere de som du mener trenger redigering. Alle de største bør redigeres manuelt.
![Suppliers](https://cdn.filestackcontent.com/h0KB27hStuGxbELysmMQ)
_Leverandørtabellen filtrert og sortert_
