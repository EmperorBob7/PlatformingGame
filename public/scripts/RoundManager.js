import {items1} from "./round1/items.js";
import {items2} from "./round2/items.js";
import {items3} from "./round3/items.js";
import {items4} from "./round4/items.js";
import player from "./Character.js";

const items = [items1, items2, items3, items4];
//const items = [items3];

class Round {
  constructor() {
    this.max = items.length;
    this.round = 0;
    this.console = document.getElementById("console");
    player.items = items[0].items;
    this.coins = 0;
  }
  increment() {
    if(this.round + 1 >= this.max) {
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