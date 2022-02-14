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
    if (this.moving && Math.abs(this.yGoal - this.y) <= Math.abs(this.velocityY)) {
      this.velocityY *= -1;
      this.y += this.velocityY;
      deez = true;
    }
    if(this.moving && (this.yGoal > this.originalY && this.y <= this.originalY || this.yGoal < this.originalY && this.y >= this.originalY)) {
      this.y = this.originalY;
      this.moving = false;
      deez = true;
      this.velocityY = this.originalV;
    }
    if (this.moving) {
      if (this.collidesTop(this.object, this.object.velocityY) && !deez) {
        this.object.velocityY = this.velocityY;
      }
      if(!deez)
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
    return true;  
  }
  
  reset() {
    this.y = this.originalY;
    this.moving = false;
    this.velocityY = this.originalV;
  }
}