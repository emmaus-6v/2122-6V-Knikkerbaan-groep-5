# Verslag eindopdracht 6V
### gemaakt door *--Lars Heeck--*, *--Floris den Hartog--*, *--Boris Vucenovic--*

---

## Inleiding
Lorem ipsum...



## Features
Beschrijf hier de eigenschappen van jullie knikkerbaan (gebruik gerust plaatjes) kijk in map fotos naar KnikkerBaan.png . De eerste paar zijn voorgegeven:

### feature 1: Opvangen van knikkers
De knikkerbaan kan knikkers bovenin correct opvangen. De binnenkomende knikkers worden geteld en een poortje bepaalt of knikkers worden doorrollen of worden tegengehouden.

### feature 2: Doorgeven van gegevens aan server
De knikkerbaan zendt de hoeveelheid getelde knikkers naar een server die de gegevens opslaat in een database. Deze server kan per 'run' (d.w.z. een nieuwe keer aangaan) gegevens bijhouden.

### feature 3: Widget wisselt info uit met knikkerbaan
In de browser kan met een URL een widget worden geladen. Deze geeft de knikkerbaan schematisch weer in een frame van 800x400px. De getelde knikkers en duur dat de poort openstaat worden hierin getoond. De duur dat de poort openstaat kan hierin worden veranderd. De knikkerbaan kan deze wachttijd van de server ontvangen en zijn werking erop aanpassen.

### feature 4:
<beschrijf hier feature 4>


### feature 5:
<beschrijf hier feature 5>


### feature 6:
<beschrijf hier feature 6>



## Evaluaties van scrumplanningen:

### week 43

### week 44

wij kunnen niet heel veel doen in verband met de toetsweek. wij gaan nadenken over eventuele ideeen die we later toe kunnen voegen. als we ergens tijd hebben proberen we te kijken of we al wat code kunnen maken voor de servo en de teller.

### week 45

### week ...
wij zijn dit vergeten per week aan te geven, maar iedereen heeft er wel elke week wat aan gedaan en we hebben onderling afspraken gemaakt over de taakverdeling.


## Technische verantwoording
Geef hier bijvoorbeeld de volgene informatie, maar voel je vrij er informatie aan toe te voegen.

De Arduino werkt op de volgende manier:
de servo aan de bovenkant vangt de knikkers op na een bepaalde tijd gaat deze open. de sensor aan de bovenkant meet de knikkers voor de eerste keer. de volgende servo houd ze voor een geringe tijd tegen. daarna gaan de knikkers door naar het rad met de 360 graden servo waar de knikkers doorheen draaien. hierna gaan ze naar de trampoline van looms. als laatst meet de sensor hoeveel balletjes er weer uit komen.

De knikkerbaan en de widget wisselen de volgende data met elkaar uit:
het lukte ons helaas niet om de widget een connectie te geven met de knikkerbaan. als dit wel had gewerkt dan had de widget het aantal knikkers dat de sensoren hadden gemeten meegekregen. 

We hebben dat op deze manier genormaliseerd in een database opgenomen (neem een strokendiagram op). De reden dat we voor ... kiezen is...

Uitdagingen die we tegenkwamen:
de SQL en de widget gaf ons de grootste probelemen, maar we hebben ook een hele tijd gexperimenteerd met het aantal volt dat de arduino nodig had. dit duurde wat langer dan gehoopt, maar voor de rest ging het redelijk soepel.

## Reflectie op opdracht
#### --Lars Heeck--
ik vond het een leuk project om aan te werken, omdat je bij dit project alles goed moest laten werken voordat de hele knikkerbaan werkte. dit was wel een uitdaging, maar ik vind uitdagingen juist wel leuk. de samenwerking was ook prima te doen en ik ben blij dat we uiteindelijk toch iets neer hebben kunnen zetten. er waren wel wat moelijkheden, maar die hebben we voor het overgrote deel opgelost met z'n allen.

#### --leerling2--




## Slot
