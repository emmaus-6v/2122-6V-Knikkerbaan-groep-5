class MiddenPoort {
  x;
  y;
  aantal;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    
  }

  show() {
    // poortje getekend
    stroke(154, 98, 203); 
    line(250, 550, 220, 550);
  }
}