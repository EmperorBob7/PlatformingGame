import Block from "../Block.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {BouncyBlock} from "../BouncyBlock.js";
import {VerticalSlideBlock as VBlock} from "../VerticalSlideBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";

const items4 = {
  "items": {},
  "text": "Lime panels keep your vertical velocity. Don't press W when landing on them",
  "coins": 0
};
items4.items["grass"] = new Block(0, 600, 200, 25, colors.grass, ctx);
items4.items["floor"] = new Block(0, 625, 200, 75, colors.floor, ctx);
items4.items["block1"] = new VBlock(100, 500, 100, 25, colors.sliding, ctx, 200, -4);
items4.items["block2"] = new BouncyBlock(350, 500, 100, 25, colors.bounce, ctx);
items4.items["finish"] = new EndBlock(550, 200, 100, 20, colors.finish, ctx);
items4.x = 20;
items4.y = 400;
export {items4};