import Block from "./Block.js";
export class VerticalSlideBlock extends Block {
  constructor(x, y, width, height, color, ctx, yGoal, velocityY) {
    super(x, y, width, height, color, ctx);
    this.velocityY = velocityY;
    this.yGoal = yGoal;
    this.originalY = y;
    this.moving = false;
    this.originalV = velocityY;
  }
  
  toString() {
    let json = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      color: this.color,
      goal: this.yGoal,
      velocity: this.velocityY
    };
    return JSON.stringify(json);
  }

  update() {
    let deez = false;
    if (Math.abs(this.yGoal - this.y) <= Math.abs(this.velocityY)) {
      this.velocityY *= -1;
      deez = true;
    }
    if (this.y == this.originalY && this.moving) {
      this.moving = false;
      this.velocityY *= -1;
    }
    if (this.moving) {
      if (this.collidesTop(this.object, this.object.velocityY) && !deez) {
        this.object.velocityY = this.velocityY;
      }
      this.y += this.velocityY;
    }
    this.draw();
  }

  action(player, side) {
    if(side != "top")
      return;
    if (!this.moving) {
      this.y += this.velocityY;
      this.object = player;
      this.object.velocityY = this.velocityY;
    }
    this.moving = true;
  }
  
  reset() {
    this.y = this.originalY;
    this.moving = false;
    this.velocityY = this.originalV;
  }
}