
import Block from "./Block.js";
import round from "./RoundManager.js";

export class EndBlock extends Block {
  action(player, direction) {
    if(player.coins >= round.coins && direction == "top") {
      round.increment();
      return "finish";
    }
    return false;
  }
}