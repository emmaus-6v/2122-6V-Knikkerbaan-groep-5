
// globale variabelen
var aantalKnikkersBoven = 0;    // aantal knikkers dat bovenin is binnengekomen           
const UPDATE_INTERVAL = 5000;   // tijd in milliseconden tussen het door widget opvragen van gegevens
var wachtijdInput;
var radbeginsnelheidInput;

var button; 
var teller;
var poortje;  
var sensor;
var rad;
var servo;
var draai;


/**
 * setup
 * de code in deze functie wordt eenmaal uitgevoerd,
 * als p5js wordt gestart
 */
function setup() {
  // Maak het canvas van je widget
  createCanvas(300, 600);

  teller = new Teller(150, 50);
  rad = new Rad (220, 250);
  Poort = new BovenPoort (145, 315);
  servo = new OnderPoort (130,200);
  draai = new MiddenPoort (120,70);
  // om de ... milliseconden wordt 'vraagSensorData' uitgevoerd
  setInterval(vraagSensorData, UPDATE_INTERVAL);

  // maak een button en stel deze in
  button = createButton('Verander');
  button.position(235, 570);
  button.mouseClicked(stuurNieuweInstellingen);

  wachttijdInput = createInput();
  wachttijdInput.position(10, 40);
  wachttijdInput.size(50);

  radbeginsnelheidInput = createInput();
  radbeginsnelheidInput.position(210, 500);
  radbeginsnelheidInput.size(50);
}
/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // schrijf hieronder de code van je widget
  // hieronder wordt schematisch een knikkerbaan getekend

  // achtergrond: houtkleur, kies gerust iets anders
  background(175, 144, 105);
                                
  teller.show();
  Poort.show();
  rad.show();
  servo.show();
  draai.show();

  // twee dikke strepen als 'opvangbak'
  stroke(0, 0, 0);
  strokeWeight(10);
  line(50, 20, 135, 60);
  line(250, 20, 165, 60);

  line(55, 110, 160, 80);
  line(10, 130, 200, 230); 
  line(80,360,120,450);
  line(80,350,210,280);
  line(10,350,100,480);
  line(100,480,170,480);
  line(170,540,210,480);

  stroke(180,180,180);
  circle (190, 480, 5);
  circle (90, 82, 5);
}


// stuurt een verzoek aan de server dat alle
// sensordata opvraagt
function vraagSensorData() {
  var request = new XMLHttpRequest();

  // maak een http-verzoek
  request.open('GET', '/api/get/sensordata', true)

  // wat uitvoeren als het antwoord teruggegeven wordt?
  request.onload = function () {
    var data = JSON.parse(request.response);

    if (request.status == 200) {
      console.log("Dit geeft de server terug:" + data);
      teller.aantal = data.aantalKnikkers;
    }
    else {
      console.log("server reageert niet zoals gehoopt");
      console.log(request.response);
    }
  }

  // verstuur het request
  request.send()
}


// stuurt een http-verzoek aan de server met de
// nieuwe instellingen
function stuurNieuweInstellingen() {
  // moet nog worden gemaakt
}