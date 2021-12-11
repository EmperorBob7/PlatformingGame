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
        type: "block"
      },
      floor: {
        x: 0,
        y: 625,
        width: 700,
        height: 75,
        color: "#964B00",
        type: "block"
      }
    },
    x: 20,
    y: 400,
    text: "Have Fun",
    coins: 0
  }
};

update();

function update() {
  round.Data = JSON.parse(JSON.stringify(data));
  round.updateArrays();
  newRound();
}

async function importData() {
  let input = prompt("Enter the JSON Data:");
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: input
  };
  try {
    const fetchResponse = await fetch("/decompress", settings);
    const d = await fetchResponse.json();

    data = d;
    update();
  } catch (e) {
    alert("Invalid Data");
  }
}

document.getElementById("decompress").addEventListener("click", () => {
  importData();
});