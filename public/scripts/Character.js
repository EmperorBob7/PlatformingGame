import { keys, map } from "./Keys.js";
import { canvas, ctx } from "./ctx.js";

class Character {
  constructor(x, y, width, height, ctx, items) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityY = 0;
    this.velocityX = 0;
    this.gravity = 0.5;
    this.ctx = ctx;
    this.items = items;
    this.coins = 0;
  }
  update() {
    let ground, ceiling, leftWall, rightWall;
    if (map[keys.RIGHT] || map[keys.LEFT]) this.velocityX = 4.1;
    for (const [key, value] of Object.entries(this.items)) {
      if (value.collidesTop(this, this.velocityY)) {
        ground = value;
      }
      if (value.collidesBottom(this, this.velocityY)) {
        ceiling = value;
      }
      if (value.collidesLeft(this, this.velocityX)) {
        rightWall = value;
      }
      if (value.collidesRight(this, this.velocityX)) {
        leftWall = value;
      }
    }
    if (ground == undefined) {
      this.velocityY += this.gravity;
    } else if (this.velocityY != 0) {
      let t = this.velocityY;
      ground.action(this);
      if (t == this.velocityY) this.velocityY = 0;
      this.y = ground.y - this.height;
    } else {
      ground.action(this);
      if (map[keys.UP] && ground != undefined) {
        this.velocityY = -10;
      }
    }
    if (ceiling) {
      this.y = ceiling.y + ceiling.height + 1;
      if (ceiling.velocityY > 0) this.velocityY = ceiling.velocityY + 0.1;
      else this.velocityY = 0.1;
    }
    if (
      map[keys.RIGHT] &&
      leftWall == undefined &&
      this.x + this.width < canvas.width
    ) {
      this.x += this.velocityX;
    } else if (map[keys.LEFT] && rightWall == undefined && this.x > 0) {
      this.x -= this.velocityX;
    } else if (rightWall) {
      this.x = rightWall.x + rightWall.width;
    } else if (leftWall) {
      this.x = leftWall.x - this.width;
    }
    this.draw();
    this.y += this.velocityY;
    this.velocityX = 0;
  }
  draw() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
const player = new Character(0, 400, 20, 20, ctx);
export default player;
