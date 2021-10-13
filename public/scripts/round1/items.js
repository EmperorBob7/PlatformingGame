import Block from "../Block.js";
import {HorizontalSlideBlock as HBlock} from "../HorizontalSlideBlock.js";
import {ctx} from "../ctx.js";

const items = {};
items["grass"] = new Block(0, 600, 700, 25, "#00BB00", ctx);
items["floor"] = new Block(0, 625, 700, 75, "#964B00", ctx);
items["block1"] = new Block(150, 500, 100, 25, "#aa0000", ctx);
items["block2"] = new Block(300, 450, 75, 25, "#aa0000", ctx);
items["block3"] = new Block(400, 400, 50, 25, "#aa0000", ctx);
export default items;