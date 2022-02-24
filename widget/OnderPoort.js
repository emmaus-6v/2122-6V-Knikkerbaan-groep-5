class OnderPoort {
  x;
  y;
  aantal;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    
  }

  show() {
    // poortje getekend
    stroke(172, 35, 69); 
    line(110, 75, 115, 85);
  }
}