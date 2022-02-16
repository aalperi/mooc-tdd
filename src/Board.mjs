export class Board {
  width;
  height;
  blocks;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = [];
  }

  toString() {
    let str = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        str += this.getBoardPixelColor(x, y)
      }
      str += "\n";
    }
    return str;
  }
  drop(block) {
    if(this.blocks.length>0 &&this.hasFalling()){
      throw "already falling";
    }
    else{      
      this.blocks.push(block);
    }
  }
  tick() {

    this.blocks.forEach(block => {
      if(block.y===this.height-1){
        block.falling=false;
      } else
        block.y += 1;
      
    });
  }
  getBoardPixelColor(x, y) {
    if (this.blocks.length > 0) {
      for (let i = 0; i<this.blocks.length;i++){
        if (this.blocks[i].x === x && this.blocks[i].y === y ) {
          return this.blocks[i].color;
        }
      }
    }
    return ".";
  }
  hasFalling(){
    if(this.blocks.length>0){
      for (let i = 0; i<this.blocks.length;i++){
        if (this.blocks[i].falling) {
          return true;
        }
      }
    }
    return false;
  }
}
