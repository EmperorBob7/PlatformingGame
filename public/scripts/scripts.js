import Character from "./Character.js";
import { canvas, ctx } from "./ctx.js";
import round from "./RoundManager.js";
import player from "./Character.js";

const c2 = document.getElementById("canvas");
c2.width = window.innerHeight * 0.8;
c2.height = window.innerHeight * 0.8;
const ctx2 = c2.getContext("2d");

let fps = Date.now() / 1000;

let framesPerSecond = 60;
let now;
let then = Date.now();
let interval = 1000 / framesPerSecond;
let delta;

function draw() {
  requestAnimationFrame(draw);
  now = Date.now();
  delta = now - then;
  if (delta > interval) {
    then = now - (delta % interval);
    
    if (player.y > canvas.height) {
      round.resetCoords();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, c2.width, c2.height);
    player.update();
    for (const [key, value] of Object.entries(player.items)) {
      //console.log(value);
      value.update();
    }
    ctx2.drawImage(canvas, 0, 0, c2.width, c2.height);
    fpsView();
  }
}

function fpsView() {
  let d = Date.now() / 1000;
  let x = Date.now() / 1000 - fps;
  fps = d;
  document.getElementById("fps").innerText = (1 / x).toFixed(0);
}

requestAnimationFrame(draw);
document.getElementById("updateCoords").onclick = () => {
  let x = Number(document.getElementById("xCoord").value);
  let y = Number(document.getElementById("yCoord").value);
  player.x = x;
  player.y = y;
};
