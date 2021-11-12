import Block from "../Block.js";
import {ClingBlock} from "../ClingBlock.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";
import {HorizontalSlideBlock as HBlock} from "../HorizontalSlideBlock.js";
import {VerticalSlideBlock as VBlock} from "../VerticalSlideBlock.js";
import {Coin} from "../Coin.js";

const items7 = {
  "items": {},
  "text": "A level may require you to collect all coins to pass.",
  "coins": 2
};
items7.items["grass"] = new Block(0, 600, 700, 25, colors.grass, ctx);
items7.items["floor"] = new Block(0, 625, 700, 75, colors.floor, ctx);
items7.items["block1"] = new VBlock(100, 500, 100, 20, colors.slide, ctx, 200, -5);
items7.items["block2"] = new Block(200, 200, 100, 25, colors.block, ctx);
items7.items["coin1"] = new Coin(300, 150, 25, 25, colors.coin, ctx, "coin1");
items7.items["coin2"] = new Coin(500, 400, 25, 25, colors.coin, ctx, "coin2");
items7.items["finish"] = new EndBlock(550, 600, 100, 20, colors.finish, ctx);

items7.x = 20;
items7.y = 400;
export {items7};