import Block from "./Block.js";

const audio = new Audio();
audio.src = "https://cdn.glitch.me/6ce4aea0-7743-4a07-95a4-d9ad63c039f5%2FCoin_1%20(mp3cut.net).mp3?v=1638136391574";

export class Coin extends Block {
  constructor(x, y, width, height, color, ctx, id) {
    audio.volume = 0.7;
    super(x, y, width, height, color, ctx);
    this.collides = false;
    this.id = id;
    this.collected = false;
  }
  
  action(player, side) {
    if(this.collected)
      return;
    audio.play();
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