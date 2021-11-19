import Character from "./Character.js";
import { canvas, ctx } from "./ctx.js";
import round from "./RoundManager.js";
import player from "./Character.js";

let data = {
  level1: {
    items: {
      grass: { x: 0, y: 600, width: 700, height: 25, color: "#00BB00" , type:"block"},
      floor: {"x":0,"y":625,"width":700,"height":75,"color":"#964B00", type:"block"},
      b1: {"x":150,"y":500,"width":100,"height":25,"color":"#aa0000", type:"block"},
      b2: {"x":300,"y":450,"width":75,"height":25,"color":"#aa0000", type:"block"},
      b3: {"x":400,"y":400,"width":50,"height":25,"color":"#aa0000", type:"block"},
      finish: {"x":500,"y":350,"width":100,"height":15,"color":"#FFD700", type:"finish"}
    },
    x: 20,
    y: 100,
    "text": "Use WASD to move",
    "coins": 0
  }
}

update();

document.getElementById("updateCoords").onclick = () => {
  data.level1.x = Number(document.getElementById("xCoord").value);
  data.level1.y = Number(document.getElementById("yCoord").value);
  update();
};

function update() {
  console.log(data.level1.items);
  round.Data = data;
  round.updateArrays();
}

document.getElementById("pullUpMenuButton").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "grid";
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "none";
});