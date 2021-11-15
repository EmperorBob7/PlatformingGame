import Data from "./levels.js";
import Block from "./Block.js";
import {ClingBlock} from "./ClingBlock.js";
import {EndBlock as EndBlock} from "./EndBlock.js";
import {ctx} from "./ctx.js";
import {colors} from "./colors.js";
import {HorizontalSlideBlock as HBlock} from "./HorizontalSlideBlock.js";
import {VerticalSlideBlock as VBlock} from "./VerticalSlideBlock.js";
import {Coin} from "./Coin.js";
import {BouncyBlock} from "./BouncyBlock.js";

import player from "./Character.js";

//const items = [items1, items2, items3, items4, items5, items6];
const items = [];
const blocks = [];

class Round {
  constructor() {
    for(const [key, value] of Object.entries(Data)) {
      items.push(value);
      let t = {};
      for(const [k, v] of Object.entries(value.items)) {
        let type = v.type;
        switch(type) {
          case "block":
            t[k] = (new Block(v.x, v.y, v.width, v.height, v.color, ctx));
          break;
          case "cling":
            t[k] = (new ClingBlock(v.x, v.y, v.width, v.height, v.color, ctx));
          break;
          case "bounce":
            t[k] = (new BouncyBlock(v.x, v.y, v.width, v.height, v.color, ctx));
          break;
          case "vertical":
            t[k] = (new VBlock(v.x, v.y, v.width, v.height, v.color, ctx, v.goal, v.velocity));
          break;
          case "horizontal":
            t[k] = (new HBlock(v.x, v.y, v.width, v.height, v.color, ctx, v.goal, v.velocity));
          break;
          case "coin":
            t[k] = (new Coin(v.x, v.y, v.width, v.height, v.color, ctx, k));
          break;
        }
      }
      items[items.length-1].items = t;
    }
    this.reset();
  }
  reset() {
    for (let i = 0; i < items.length; i++) {
      for (const [key, value] of Object.entries(items[i].items)) {
        value.reset();
      }
    }

    this.max = items.length;
    this.round = 0;
    this.console = document.getElementById("console");
    player.items = items[0].items;
    this.coins = items[0].coins;
    player.coins = 0;
    this.log(items[this.round].text);
    this.timer = true;
    this.resetCoords();
  }
  increment() {
    if (this.round + 1 >= this.max) {
      this.log("There is all for now, thanks for playing.");
      this.timer = false;
      return;
    }
    this.round++;
    this.resetCoords();
    this.coins = items[this.round].coins;
    player.coins = 0;
    player.items = items[this.round].items;
    this.log(items[this.round].text);
  }
  getItems() {
    return player.items;
  }
  resetCoords() {
    player.x = items[this.round].x;
    player.y = items[this.round].y;
    player.velocityY = 0;
  }
  log(p) {
    this.console.innerText = p;
  }
}
const r = new Round();
export default r;
