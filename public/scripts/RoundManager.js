import {items1} from "./round1/items.js";
import {items2} from "./round2/items.js";
import {items3} from "./round3/items.js";
import {items4} from "./round4/items.js";
import {items5} from "./round5/items.js";
import {items6} from "./round6/items.js";
import player from "./Character.js";

const items = [items1, items2, items3, items4, items5, items6];
//const items = [items5];

class Round {
  constructor() {
    this.reset();
  }
  reset() {
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
    if(this.round + 1 >= this.max) {
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
    player.items = items[this.round].items;
    player.velocityY = 0;  
  }
  log(p) {
    this.console.innerText = p;
  }
}
const r = new Round();
export default r;