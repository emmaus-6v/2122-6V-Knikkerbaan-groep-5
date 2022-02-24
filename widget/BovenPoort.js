class BovenPoort {
  x;
  y;
  aantal;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    
  }

  show() {
    // poortje getekend
    stroke(80, 72, 171); 
    line(60, 160, 80, 130);
  }
}