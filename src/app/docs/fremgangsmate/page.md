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

Mer om leverandører og hvordan de kan behandles finnes i [Leverandører](../docs/suppliers).

## Transaksjoner

Når man har gjennomført en leverandørgjennomgang er det på tide å gå igjennom transaksjonene. Her deles det inn i Scope 1, 2 og 3. Systemet har kategorisert dette allerede for deg. Transaksjonene er listet i en tilsvarende datatabell som leverandørene og denne har de samme filtreringsmulighetene. De viktigste kolonnene er:

1. **Transaksjons-ID** -
   Bruk denne til å finne transaksjonen i regnskapsprogrammet hvis du trenger å se mer om den. Hvis transaksjons-ID er på formen xxx.1 så betyr det at den er splittet opp i to eller flere transaksjoner.
2. **Leverandørnavn** - Her finner du alle transaksjoner for en eller flere leverandører.
3. **Debetbeløp** - Kjekk å bruke for å sortere transaksjoner.
4. **Utslipp** - Dette er det totale utslippet for transaksjonen. Også bra å sortere på.
5. **Kontonummer og beskrivelse** - Her kan du se hvilken konto transaksjonen ført på.

For alle transaksjoner kan du utvide den for å se alle linjene i transaksjonen. Her vil alle linjene være listet opp, også de som er splittet opp til en annen transaksjon.

{% callout title="Slett mikrotransaksjoner" %}
Fordelen med å bruke regnskapsdata er at man får med alt i klimaregnskapet også. Ulempen er at det kan være mange mikrotransaksjoner som ikke er relevante for klimaregnskapet. Dette kan være transaksjoner som er under 1 krone. Det kan være en god idé å slette disse først. Bruk filteret på beløp eller utslipp for å finne disse.

_Number filters_ -> _Less than_ 1 And _Greater than_ -1.

Se over utvalget og merk alle transaksjoner du ønsker å slette. Høyreklikk i tabellen og velg deretter _Delete Records_ i menyen.
{% /callout %}

{% callout type="warning" title="Negative utslipp" %}
Hvis du sorterer på _Totale Utslipp_ så vil du se at det er mange transaksjoner med negative utslipp. Dette er fordi det er en del av regnskapet. Det er ikke noe feil med dette. Negative utslipp kommer gjerne av at det er gjort korrigeringer i regnskapet. Et negativt tall vil da ha et tilsvarende positivt tall i regnskapet. Negative utslipp kan også være kreditnotaer.
{% /callout %}

## Rapport

Når du har gjennomført leverandørgjennomgang og transaksjoner så er det på tide å lage rapporten. Rapporten ha en del tekst som viser et eksempel på hva som bør skrives i rapporten. For alle delene er det mulig å endre teksten og legge til den informasjonen som er relevant for selskapet ditt. Trykk på blyant iconet for å redigere teksten. Du kan også legge inn din logo øverst og et bilde av ansvarlig person(CEO).

All data fra klimaregnskapet overføres direkte til rapporten og det er kun meningen at det skal være beskrivelser og begrunnelser med i rapporten. Ikke gjør det for vanskelig, men ta med det som er vesentlig. Og gjerne litt om hva som eventuelt gjøres fremover for å adressere utslippene. Er det gjort noen spesialle beregninger eller andre antakelser bør det også forklares.

Det er en rik tekst komponent som kan inkludere tabeller og bilder, utheve typografi osv. som gjør at du kan få til den utformingen du ønsker innen visse rammer.

## Avslutning

Legg inn selskapets omsetning på dashbordet under karbonintensitet som vist på bildet under.
![Dashboard](/images/omsetning.png)
Da vil du få en referanse på hvordan din utslippsintensitet er i forhold til selskaper i din bransje.

Når du er ferdig med klimaregnskapet kan du _publisere_ den. Det vil si at du låser regnskapet på lik linje med å låse finansregnskapet. Fortvil ikke, det er alltid mulig å gjøre endringer. Klimaregnskapet kan låses/publiseres under innstillinger. Det som da skjer er at dine utslipp og karbonintensitet lageres i en egen database hvor andre selskaper som bruker systemet kan få din individuelle utslippsintensitet inn i sine klimaregnskaper uten at de trenger å gjøre noe mer eller bruke standard bransjeutslippsintensitet.
