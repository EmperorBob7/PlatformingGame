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
let frameCount = 0;

function draw() {
  if(round.timer)
    fpsView();
  requestAnimationFrame(draw);
  now = Date.now();
  delta = now - then;
  if (delta > interval) {
    frameCount++;
    then = now - (delta % interval);
    
    if (player.y > canvas.height) {
      round.resetCoords();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, c2.width, c2.height);
    for (const [key, value] of Object.entries(player.items)) {
      value.update();
    }
    player.update();
    ctx2.drawImage(canvas, 0, 0, c2.width, c2.height);
  }
}

function fpsView() {
  document.getElementById("fps").innerText = frameCount;
}

requestAnimationFrame(draw);
document.getElementById("updateCoords").onclick = () => {
  let x = Number(document.getElementById("xCoord").value);
  let y = Number(document.getElementById("yCoord").value);
  player.x = x;
  player.y = y;
};

document.addEventListener('keypress', e => {
  console.log(e.keyCode);
  if(e.keyCode == 114) {
    restart();
  }  
});
function restart() {
  round.reset();
  frameCount = 0;
}