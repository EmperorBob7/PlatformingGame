import Character from "./Character.js";
import { canvas, ctx } from "./ctx.js";
import round from "./RoundManager.js";
import player from "./Character.js";
import newRound from "./scripts.js";

const table = document.getElementsByTagName("tbody")[0];
let data = {
  level1: {
    items: {
      grass: {
        x: 0,
        y: 600,
        width: 700,
        height: 25,
        color: "#00BB00",
        type: "block",
      },
      floor: {
        x: 0,
        y: 625,
        width: 700,
        height: 75,
        color: "#964B00",
        type: "block",
      },
    },
    x: 20,
    y: 400,
    text: "Have Fun",
    coins: 0,
  },
};

update();
updateTable();

function update() {
  round.Data = JSON.parse(JSON.stringify(data));
  round.updateArrays();
  newRound();
}

function updateTable() {
  while (table.firstChild != table.lastChild) {
    table.removeChild(table.lastChild);
  }
  for (const [key, value] of Object.entries(data.level1.items)) {
    const tr = document.createElement("tr");

    const color = document.createElement("td");
    color.innerText = value.color;
    const cObj = hexToRgb(value.color);
    color.style.backgroundColor = `rgb(${cObj.r},${cObj.g},${cObj.b})`;
    let r = cObj.r;
    let g = cObj.g;
    let b = cObj.b;
    const c =
      (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;
    color.style.color = c >= 128 ? "black" : "white";

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

    const del = document.createElement("td");
    const d = document.createElement("h2");
    d.innerText = "X";
    d.classList.add("deleteBlock");
    d.addEventListener("click", (y) => {
      delete data.level1.items[key];
      update();
      updateTable();
    });
    del.appendChild(d);

    tr.appendChild(color);
    tr.appendChild(id);
    tr.appendChild(coords);
    tr.appendChild(size);
    tr.appendChild(del);

    tr.addEventListener("click", () => {
      let info = data.level1.items[key];
      if (info) {
        fillInput(info, key);
      }
    });

    table.appendChild(tr);
  }
}

function fillInput(d, id) {
  document.getElementById("blockID").value = id;
  document.getElementById("blockX").value = d.x;
  document.getElementById("blockY").value = d.y;
  document.getElementById("blockW").value = d.width;
  document.getElementById("blockH").value = d.height;
  document.getElementById("blockC").value = d.color;
  document.getElementById("blockType").value = d.type;
  if (d.velocity) {
    document.getElementById("blockV").value = d.velocity;
    document.getElementById("blockG").value = d.goal;
  } else {
    document.getElementById("blockV").value = "";
    document.getElementById("blockG").value = "";
  }
  document.getElementById("blockAdder").style.display = "grid";
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

async function compressData() {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const fetchResponse = await fetch("/compress", settings);
  const d = await fetchResponse.json();
  if (fetchResponse.ok) {
    save(JSON.stringify(d));
  } else {
    alert("Data is invalid.");
  }
}

function save(text) {
  var c = document.createElement("a");
  c.download = "BobPlatFormerLevel.bob";

  var t = new Blob([text], {
    type: "text/plain",
  });
  c.href = window.URL.createObjectURL(t);
  c.click();
}

async function importData() {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: document.getElementById("promptInput").value,
  };
  try {
    const fetchResponse = await fetch("/decompress", settings);
    const d = await fetchResponse.json();

    data = d;
    update();
    updateTable();
  } catch (e) {
    alert("Invalid Data");
  }
}

document.getElementById("pullUpMenuButton").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "grid";
});

document.getElementById("compress").addEventListener("click", () => {
  compressData();
});

document.getElementById("load").addEventListener("click", () => {
  document.getElementById("prompt").style.display = "grid";
  document.getElementById("promptLabel").innerText = "Enter the code";
  document.getElementById("promptInput").value = "";
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("levelManager").style.display = "none";
});

document.getElementById("closeAdder").addEventListener("click", () => {
  document.getElementById("blockAdder").style.display = "none";
});

document.getElementById("closePrompt").addEventListener("click", () => {
  document.getElementById("prompt").style.display = "none";
});

document.getElementById("promptSubmit").addEventListener("click", () => {
  document.getElementById("prompt").style.display = "none";
  importData();
});

document.getElementById("updateCoords").onclick = () => {
  data.level1.x = Number(document.getElementById("xCoord").value);
  data.level1.y = Number(document.getElementById("yCoord").value);
  update();
};

document.getElementById("addBlock").addEventListener("click", () => {
  document.getElementById("blockID").value = "";
  document.getElementById("blockX").value = "";
  document.getElementById("blockY").value = "";
  document.getElementById("blockW").value = "";
  document.getElementById("blockH").value = "";
  document.getElementById("blockC").value = "#000000";
  document.getElementById("blockType").value = "block";
  document.getElementById("blockV").value = "";
  document.getElementById("blockG").value = "";
  document.getElementById("velocityRow").style.display = "none";
  document.getElementById("goalRow").style.display = "none";
  document.getElementById("blockAdder").style.display = "grid";
});

document.getElementById("completeButton").addEventListener("click", () => {
  document.getElementById("blockAdder").style.display = "none";
  let id = document.getElementById("blockID").value;
  let x = document.getElementById("blockX").value;
  let y = document.getElementById("blockY").value;
  let w = document.getElementById("blockW").value;
  let h = document.getElementById("blockH").value;
  let c = document.getElementById("blockC").value;
  let t = document.getElementById("blockType").value;
  let v = document.getElementById("blockV").value;
  let g = document.getElementById("blockG").value;
  data.level1.items[id] = {
    x: Number(x),
    y: Number(y),
    width: Number(w),
    height: Number(h),
    color: c,
    type: t,
    velocity: Number(v),
    goal: Number(g),
  };
  update();
  updateTable();
});

document.getElementById("blockType").addEventListener("change", () => {
  let t = document.getElementById("blockType").value;
  if (t == "horizontal" || t == "vertical") {
    document.getElementById("velocityRow").style.display = "";
    document.getElementById("goalRow").style.display = "";
  } else {
    document.getElementById("velocityRow").style.display = "none";
    document.getElementById("goalRow").style.display = "none";
  }
});
