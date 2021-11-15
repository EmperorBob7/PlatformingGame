import Block from "./Block.js";

export class Coin extends Block {
  constructor(x, y, width, height, color, ctx, id) {
    super(x, y, width, height, color, ctx);
    this.collides = false;
    this.id = id;
    this.collected = false;
  }
  
  action(player, side) {
    if(this.collected)
      return;
    player.coins++;
    this.collected = true;
  }
  
  draw() {
    if(!this.collected)
      super.draw();
  }
  
  reset() {
    this.collected = false;
  }
}