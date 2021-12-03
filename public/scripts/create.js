import Character from "./Character.js";
import { canvas, ctx } from "./ctx.js";
import round from "./RoundManager.js";
import player from "./Character.js";

const table = document.getElementsByTagName("tbody")[0];
let data = {
  level1: {
    items: {
      grass: {"x":0,"y":600,"width":300,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":300,"height":75,"color":"#964B00",type:"block"},
      w1: {"x":100,"y":0,"width":10,"height":500,"color":"#333333",type:"block"},
      w2: {"x":200,"y":100,"width":10,"height":500,"color":"#333333",type:"block"},
      c1: {"x":200,"y":450,"width":10,"height":50,"color":"#ffffff",type:"cling"},
      c2: {"x":100,"y":340,"width":10,"height":50,"color":"#ffffff",type:"cling"},
      c3: {"x":200,"y":230,"width":10,"height":50,"color":"#ffffff",type:"cling"},
      c4: {"x":100,"y":120,"width":10,"height":50,"color":"#ffffff",type:"cling"},
      bounce1: {"x":300,"y":300,"width":100,"height":10,"color":"#00FF00",type:"bounce"},
      finish: {"x":550,"y":200,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 100,
    "text": "Use WASD to move",
    "coins": 0
  }
};

update();

function update() {
  round.Data = JSON.parse(JSON.stringify(data));
  round.updateArrays();
}

function updateTable() {
  for(const [key, value] of Object.entries(data.level1.items)) {
    const tr = document.createElement("tr");
    
    const color = document.createElement("td");
    color.innerText = value.color;
    const cObj = hexToRgb(value.color);
    color.style.backgroundColor = `rgb(${cObj.r},${cObj.g},${cObj.b})`;
    let r = cObj.r;
    let g = cObj.g;
    let b = cObj.b;
    const c = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;
    color.style.color = (c >= 128) ? 'black' : 'white';
    
    const coords = document.createElement("td");
    const x = document.createElement("h3");
    const y = document.createElement("h3");
    x.innerText = "X: " + value.x;
    y.innerText = "Y: " + value.y;
    coords.appendChild(x);
    coords.appendChild(y);
    
    const size = document.createElement("td");
    const width = document.createElement("h3");
    const height = document.createElement("h3");
    width.innerText = "W: " + value.width;
    height.innerText = "H: " + value.height;
    size.appendChild(width);
    size.appendChild(height);
    
    const id = document.createElement("td");
    id.innerText = key;
    
    tr.appendChild(color);
    tr.appendChild(id);
    tr.appendChild(coords);
    tr.appendChild(size);
    table.appendChild(tr);
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
updateTable();

document.getElementById("pullUpMenuButton").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "grid";
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "none";
});

document.getElementById("closeAdder").addEventListener("click", () => {
  document.getElementById("blockAdder").style.display = "none";
});

document.getElementById("updateCoords").onclick = () => {
  data.level1.x = Number(document.getElementById("xCoord").value);
  data.level1.y = Number(document.getElementById("yCoord").value);
  update();
};

document.getElementById("addBlock").addEventListener("click", () => {
  document.getElementById("blockAdder").style.display = "grid";
});