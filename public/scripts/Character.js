import { keys, map } from "./Keys.js";
import { canvas, ctx } from "./ctx.js";
let c = document.getElementById("console");

function log(x) {
  c.innerText = x;
}
const img = new Image();
img.src =
  "https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-red-png-01.png";

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
    this.jumpVelocity = -10;
  }

  update() {
    let ground, ceiling, leftWall, rightWall;
    if (map[keys.RIGHT] || map[keys.LEFT]) this.velocityX = 4.1;

    const items = this.filter();
    for (const value of items) {
      if (value.velocityY == this.velocityY) {
        if (value.collidesTop(this, this.velocityY * -1)) {
          ground = value;
        }
      } else if (value.collidesTop(this, this.velocityY)) {
        if (value.id)
          value.action(this);
        else
          ground = value;
      }
      if (value.collidesBottom(this, this.velocityY)) {
        if (value.id)
          value.action(this);
        else
          ceiling = value;
      }
      if (value.collidesLeft(this, this.velocityX)) {
        if (value.id)
          value.action(this);
        else
          rightWall = value;
      }
      if (value.collidesRight(this, this.velocityX)) {
        if (value.id)
          value.action(this);
        else
          leftWall = value;
      }
    }

    if (ground && ceiling && ground.velocityY != null) {
      ground.velocityY *= -1;
    }

    if (ground == undefined) {
      this.velocityY += this.gravity;
    } else if (this.velocityY != 0) {
      let t = this.velocityY;
      let t2 = ground.action(this, "top");
      if (!t2) {
        this.velocityY = 0;
      } else if(t2 == "finish") {
        return;
      }
      this.y = ground.y - this.height;
      if (map[keys.UP]) {
        this.velocityY = this.jumpVelocity;
      }
    } else {
      ground.action(this, "top");
      if (map[keys.UP]) {
        this.velocityY = this.jumpVelocity;
      }
    }
    if (ceiling) {
      this.y = ceiling.y + ceiling.height;
      if (ceiling.velocityY > 0 && ceiling.moving)
        this.velocityY = ceiling.velocityY + 0.1;
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
      if (rightWall.action(this, "left") && map[keys.UP]) {
        this.velocityY = -8;
      }
      this.x = rightWall.x + rightWall.width;
    } else if (leftWall) {
      if (leftWall.action(this, "right") && map[keys.UP]) {
        this.velocityY = -8;
      }
      this.x = leftWall.x - this.width;
    }
    this.draw();
    this.y += this.velocityY;
    this.velocityX = 0;
  }

  draw() {
    this.ctx.fillStyle = "#000";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  filter() {
    if(this.items == undefined)
      return [];
    let x = this.x - this.velocityX - 5;
    let x2 = this.x + this.width + this.velocityX + 5;
    let y = this.y - Math.abs(this.velocityY) - 5;
    let y2 = this.y + this.height + Math.abs(this.velocityY) + 5;
    return Object.values(this.items).filter(z => {
      return !z.collected && x < z.x + z.width && x2 > z.x && y < z.y + z.height && y2 > z.y;
    });
  }
}
let player = new Character(0, 0, 30, 30, ctx);
export default player;