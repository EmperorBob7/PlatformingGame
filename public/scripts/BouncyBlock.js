import Block from "./Block.js";
export class BouncyBlock extends Block {
  action(player, side) {
    if(side == "top") {
      player.velocityY *= -0.95;
      return true;
    }
  }
}