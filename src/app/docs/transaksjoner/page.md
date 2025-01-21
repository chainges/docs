---
title: Transaksjoner
nextjs:
  metadata:
    title: Transaksjoner
    description: Redigere og korrigere transaksjonerransaksjoner
---

Det er i datatabellen med transaksjoner at vi kan gjøre de fleste endringer som behøves. Her kan du også legge inn nye transaksjoner. Tabellen har en rekke kolonner som kan brukes til å filtrere og sortere transaksjonene.

---

![Transaksjoner](/images/transaksjoner.png)
_Transaksjonstabellen_

## Redigere transaksjoner

### Enkelttransaksjon

For å redigere en transaksjon så klikker du på den. Dette vil åpne en ny side hvor du kan redigere transaksjonen.

![singleEdit](/images/singleedit.png)

Her kan du redigere alle feltene som er relevante for transaksjonen. Du kan sette en _custom utslippsfactor_, _Nace kode_ eller sette utslippet manuelt i kilo co2e. I feltet for beskrivelse er alle linjene i transaksjonen samlet i en tekststreng. Mange systemer lagrer samme melding på hver linje og derfor vil du muligens se repeterende informasjon her.

### Flere transaksjoner

Til venstre i tabellen har du en avkryssingsboks som gjør at du kan velge flere transaksjoner. Når du har valgt flere transaksjoner kan du redigere dem samtidig ved å høyreklikke i tabellen og velge _Update Multiple Records_. Da vil du få opp et vindu som vist under.

![multiEdit](/images/multiedit.png)

Her er det flere muligheter til å redigere transaksjonene. Du kan bruke en _Custom utslippsfaktor_ som er en faktor for utslipp per 1000 NOK. Dette er en enkel måte å justere utslipp på. Du kan også sette en _Nace kode_ og bruke faktoren som er for den spesifikke koden. Eller om du har nøyaktig utslipp for transaksjonene sett under ett kan du sette det inn i feltene for Scope 1, 2 eller 3. Legg gjerne til et notat i feltet _Notater_ hvis du har noe å si om transaksjonen og hvorfor den er endret. Du kan også flytte transaksjonen til en annen Scope 3 kategori om du vil. Sett status til det du ønsker når du er ferdig. Har du lagt inn data som er primærdata fra leverandør eller regnet ut basert på aktivitetsdata så setter du den statusen.
