import Block from "./Block.js";
import Character from "./Character.js";
import items from "./round1/items.js";
import {keys} from "./Keys.js";
import {canvas, ctx} from "./ctx.js";

const c2 = document.getElementById("canvas");
const ctx2 = c2.getContext("2d");
const player = new Character(0, 400, 20, 20, ctx, items);

let fps = Date.now() / 1000;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  for (const [key, value] of Object.entries(items)) {
    value.update();
  }
  ctx2.drawImage(canvas, 0, 0);
  requestAnimationFrame(draw);
  fpsView();
}

function fpsView() {
  let d = Date.now() / 1000;
  let x = Date.now() / 1000 - fps;
  fps = d;
  document.getElementById("fps").innerText = (1 / x).toFixed(0);
}

requestAnimationFrame(draw);
document.getElementById("updateCoords").onclick =  () => {
  let x = Number(document.getElementById("xCoord").value);
  let y = Number(document.getElementById("yCoord").value);
  player.x = x;
  player.y = y;
}