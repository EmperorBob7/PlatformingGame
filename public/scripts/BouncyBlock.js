import Block from "./Block.js";
export class BouncyBlock extends Block {
  action(player) {
    player.velocityY *= -1;
  }
}