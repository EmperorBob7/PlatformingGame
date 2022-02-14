import { ctx } from "./ctx.js";

let textures = {};

function createTexture(src) {
  return new Promise((res, rej) => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      let c = document.createElement("canvas");
      let c2 = c.getContext("2d");
      c.width = 25;
      c.height = 25;
      c2.drawImage(img, 0, 0, 25, 25);
      res(ctx.createPattern(c, "repeat"));
    };
  });
}

async function init() {
  return new Promise(async (res, rej) => {
    textures["Grass"] = await createTexture(
      "https://cdn.glitch.me/6ce4aea0-7743-4a07-95a4-d9ad63c039f5/Grass.png"
    );
    textures["Dirt"] = await createTexture(
      "https://cdn.glitch.me/6ce4aea0-7743-4a07-95a4-d9ad63c039f5/Dirt.png"
    );
    res(textures);
  });
}

init();

export default init;