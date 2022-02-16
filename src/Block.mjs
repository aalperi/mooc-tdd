export class Block {
  color;
  x;
  y;
  falling;

  constructor(color) {
    this.color = color;
    this.x = 1;
    this.y = 0;
    this.falling = true;
  }
}
