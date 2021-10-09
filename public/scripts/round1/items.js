import Block from "../Block.js";
import {ctx} from "../ctx.js";

const items = {};
items["grass"] = new Block(0, 600, 700, 25, "#00BB00", ctx);
items["floor"] = new Block(0, 625, 700, 75, "#964B00", ctx);
items["block1"] = new Block(150, 500, 100, 25, "#aa0000", ctx);
items["block2"] = new Block(350, 425, 100, 25, "#aa0000", ctx);
items["block3"] = new Block(525, 400, 30, 25, "#aa0000", ctx);
items["block4"] = new Block(500, 300, 30, 25, "#aa0000", ctx);
items["block5"] = new Block(540, 200, 30, 25, "#aa0000", ctx);
items["block6"] = new Block(525, 100, 30, 25, "#aa0000", ctx);
export default items;