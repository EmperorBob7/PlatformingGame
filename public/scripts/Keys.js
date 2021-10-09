export const keys = {
  RIGHT: 68,
  LEFT: 65,
  UP: 87
};
export const map = {};

document.addEventListener("keydown", keyTest);
document.addEventListener("keyup", keyReset);
function keyTest(e) {
  map[e.keyCode] = e.type == "keydown";
}
function keyReset(e) {
  map[e.keyCode] = false;
}