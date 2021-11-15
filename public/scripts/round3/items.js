import Block from "../Block.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {HorizontalSlideBlock as HBlock} from "../HorizontalSlideBlock.js";
import {VerticalSlideBlock as VBlock} from "../VerticalSlideBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";

const items3 = {
  "items": {},
  "text": "They can also be Vertical Sliders",
  "coins": 0
};
items3.items["grass"] = new Block(0, 600, 700, 25, colors.grass, ctx);
items3.items["floor"] = new Block(0, 625, 700, 75, colors.floor, ctx);
items3.items["block1"] = new VBlock(100, 500, 100, 20, colors.slide, ctx, 200, -3);
items3.items["block2"] = new HBlock(200, 200, 100, 20, colors.slide, ctx, 400, 2.5);
items3.items["finish"] = new EndBlock(550, 200, 100, 20, colors.finish, ctx);
items3.x = 20;
items3.y = 400;

export {items3};