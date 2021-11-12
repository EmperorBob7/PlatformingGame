import Block from "../Block.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";

const items1 = {
  "items": {},
  "text": "Use WASD to move",
  "coins": 0
};
items1.items["grass"] = new Block(0, 600, 700, 25, colors.grass, ctx);
items1.items["floor"] = new Block(0, 625, 700, 75, colors.floor, ctx);
items1.items["block1"] = new Block(150, 500, 100, 25, colors.block, ctx);
items1.items["block2"] = new Block(300, 450, 75, 25, colors.block, ctx);
items1.items["block3"] = new Block(400, 400, 50, 25, colors.block, ctx);
items1.items["finish"] = new EndBlock(500, 350, 100, 15, colors.finish, ctx);
items1.x = 20;
items1.y = 100;
export {items1};