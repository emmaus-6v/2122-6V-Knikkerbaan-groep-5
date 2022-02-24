class Rad {
  x;
  y;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  
  }

  show() {
      // rad getekend
  stroke(255,255,255); 
  ellipse(250,250,60,60);

  stroke(175, 144, 105); 
  ellipse(230,225,20,20); 
  ellipse(230,275,20,20); 
  ellipse(275,250,20,20);
  }
}