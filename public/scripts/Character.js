import {keys, map} from "./Keys.js";
export default class Character {
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
  }
  update() {
    let ground, ceiling, leftWall, rightWall;
    if(map[keys.RIGHT] || map[keys.LEFT])
      this.velocityX = 4.1;
    for (const [key, value] of Object.entries(this.items)) {
      if (ground == undefined && value.collidesTop(this, this.velocityY)) {
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
    } else {
      this.velocityY = 0;
      this.y = ground.y - this.height;
    }
    if (ceiling) {
      this.velocityY = 0.1;
    }
    if (map[keys.RIGHT] && leftWall == undefined) {
      this.x += this.velocityX;
    } else if (map[keys.LEFT] && rightWall == undefined) {
      this.x -= this.velocityX;
    } else if(rightWall) {
      this.x = rightWall.x + rightWall.width;
    } else if(leftWall) {
      this.x = leftWall.x - this.width;
    }
    if (map[keys.UP] && ground != undefined) {
      this.velocityY = -10;
    }
    this.y += this.velocityY;
    this.velocityX = 0;
    this.draw();
  }
  draw() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}