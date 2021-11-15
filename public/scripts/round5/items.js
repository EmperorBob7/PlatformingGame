import Block from "../Block.js";
import {ClingBlock} from "../ClingBlock.js";
import {EndBlock as EndBlock} from "../EndBlock.js";
import {BouncyBlock} from "../BouncyBlock.js";
import {ctx} from "../ctx.js";
import {colors} from "../colors.js";

const items5 = {
  "items": {},
  "text": "White blocks allow you to cling to the sides.",
  "coins": 0
};
items5.items["grass"] = new Block(0, 600, 300, 25, colors.grass, ctx);
items5.items["floor"] = new Block(0, 625, 300, 75, colors.floor, ctx);
items5.items["block1"] = new Block(100, 0, 10, 500, colors.wall, ctx);
items5.items["block2"] = new Block(200, 100, 10, 500, colors.wall, ctx);
items5.items["block3"] = new ClingBlock(200, 450, 10, 50, colors.cling, ctx);
items5.items["block4"] = new ClingBlock(100, 340, 10, 50, colors.cling, ctx);
items5.items["block5"] = new ClingBlock(200, 230, 10, 50, colors.cling, ctx);
items5.items["block6"] = new ClingBlock(100, 120, 10, 50, colors.cling, ctx);
items5.items["block7"] = new BouncyBlock(300, 300, 100, 10, colors.bounce, ctx);
items5.items["finish"] = new EndBlock(550, 200, 100, 20, colors.finish, ctx);
items5.x = 20;
items5.y = 400;



export {items5};