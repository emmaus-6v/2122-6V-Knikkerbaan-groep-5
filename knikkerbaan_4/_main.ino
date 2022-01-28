#include <Arduino_JSON.h>
#include <Servo.h>

KnikkerPoort poortBoven;
WiFiCommunicator wifi = WiFiCommunicator(WIFI_NETWERK, WIFI_WACHTWOORD, SERVER_DOMEINNAAM);
Teller tellerA = Teller(TELLER_A_PIN);
Teller tellerB = Teller(TELLER_B_PIN);

int serverContactInterval = 5;                // 15 seconden
unsigned long tijdVoorContactMetServer = 0;

Servo myservo;
 
// Een variabele om de servo positie in te bewaren.
int pos = 0;

 
void setup() {
  Serial.begin(9600);

  wifi.begin();
  
  wifi.stuurVerzoek("/api/set/nieuwerun", "");
  poortBoven.begin(BOVEN_POORT_PIN, 0, 90);
  poortBoven.begin(ONDER_POORT_PIN, 0, 90);

  poortBoven.open();

  
    // Configureer de DATA pin (stuur signaal)
    myservo.attach(9);
  
}


void loop() {

   // Ga van 0 graden naar 180 graden in stapjes van 1 graad.
    for(pos = 0; pos < 90; pos += 1) {
        // Draai naar de opgegeven positie.
        myservo.write(pos); 
        // Wacht 15 milliseconden zodat de servo kan draaien naar de positie.
        delay(15);
    }
  
    // Ga van 180 graden naar 0 graden in stapjes van 1 graad
    for(pos = 90; pos>=1; pos-=1) {
        // Draai naar de opgegeven positie.
        myservo.write(pos);
        // Wacht 15 milliseconden zodat de servo kan draaien naar de positie.
        delay(15);

  // laat de teller detecteren:
  tellerA.update();
  tellerB.update();
  
  // pauzeer de knikkerbaan als het tijd is voor contact met server
  if (millis() > tijdVoorContactMetServer && poortBoven.getOpen()) {
    poortBoven.sluit();
  }

  // knikkerbaan is leeggelopen, er zijn geen sensors dit iets moeten meten
  // nu is het tijd om contact te leggen met de server:
  if (millis() > tijdVoorContactMetServer + LEEGLOOP_TIJD) {
    // contact met server houdt in:
    //   * nieuw totaal aantal knikkers versturen
    //   * instellingen ophalen

    // maak de reeks variabelen voor achter de URL:
    String data = "knikkers=";
    data += tellerA.getAantal();
    data += tellerB.getAantal();

    // als je meer waarden wilt toevoegen, ziet dat er zo uit:
    //data += "&blabla";
    //data += 5;

    // stuur deze data naar het juiste adres
    wifi.stuurVerzoek("/api/set/sensordata", data.c_str());

    // vraag bij de server de nieuwe instellingen op:
    String serverAntwoord = wifi.stuurVerzoek("/api/get/instellingen", "");
    
    // om een beeld te geven van het antwoord: print in seriële monitor:
    Serial.println(serverAntwoord);

    // om de instellingen gemakkelijk uit te kunnen lezen
    JSONVar ontvangenInstellingen = JSON.parse(serverAntwoord);                      // deze regel hoef je niet te begrijpen

    // check of de instellingen goed zijn binnengekomen
    // indien ja: pas instellingen op Arduino aan
    // indien nee: geef een foutmelding in de seriële monitor
    if (JSON.typeof(ontvangenInstellingen) != "undefined") {                         // je hoeft deze voorwaarde niet te begrijpen
      // stel de wachttijd (opnieuw) in:
      serverContactInterval = ontvangenInstellingen["wachttijdPoort"];
    }
    else {
      // evt. foutmelding:
      Serial.println("FOUT: serverAntwoord kon niet worden verwerkt");
    }

    // servercommunicatie is afgerond
    // bepaal nu op welke tijd de knikkerbaan
    // opnieuw contact moet zoeken
    unsigned long nu = millis();
    tijdVoorContactMetServer = nu + (unsigned long)serverContactInterval * 1000;
    // en zet nu het poortje weer open:
    poortBoven.open();
  }
}
}
