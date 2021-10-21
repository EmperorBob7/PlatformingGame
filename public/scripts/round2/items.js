import Block from "../Block.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {HorizontalSlideBlock as HBlock} from "../HorizontalSlideBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";

const items2 = {
  "items": {},
  "text": "Green Blocks may be Horizontal Sliders",
  "coins": 0
};
items2.items["grass"] = new Block(0, 600, 700, 25, colors.grass, ctx);
items2.items["floor"] = new Block(0, 625, 700, 75, colors.floor, ctx);
items2.items["block1"] = new Block(100, 500, 100, 20, colors.block, ctx);
items2.items["block2"] = new Block(200, 400, 100, 20, colors.block, ctx);
items2.items["block3"] = new Block(100, 300, 100, 20, colors.block, ctx);
items2.items["block4"] = new Block(100, 200, 100, 20, colors.block, ctx);
items2.items["block5"] = new HBlock(200, 200, 100, 20, colors.sliding, ctx, 400, 2);
items2.items["finish"] = new EndBlock(500, 200, 100, 20, colors.finish, ctx);
items2.x = 20;
items2.y = 400;
export {items2};