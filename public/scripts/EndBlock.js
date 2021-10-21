import Block from "./Block.js";
import round from "./RoundManager.js";

export class EndBlock extends Block {
  action(player) {
    if(player.coins >= round.coins)
      round.increment();
  }
}