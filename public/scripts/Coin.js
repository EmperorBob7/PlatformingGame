import Block from "./Block.js";

export class Coin extends Block {
  constructor(x, y, width, height, color, ctx, id) {
    super(x, y, width, height, color, ctx);
    this.collides = false;
    this.id = id;
  }
  
  action(player, side) {
    player.coins++;
    console.log("RAN");
    delete player.items[this.id];
  }
}