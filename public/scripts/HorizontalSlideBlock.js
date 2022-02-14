import Block from "./Block.js";
export class HorizontalSlideBlock extends Block {
  constructor(x, y, width, height, color, ctx, xGoal, velocityX) {
    super(x, y, width, height, color, ctx);
    this.originalV = velocityX;
    this.velocityX = velocityX;
    this.xGoal = xGoal;
    this.originalX = x;
    this.moving = false;
  }
  
  toString() {
    let json = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      color: this.color,
      goal: this.xGoal,
      velocity: this.velocityX
    };
    return JSON.stringify(json);
  }

  update() {
    if (this.originalX > this.xGoal && this.x <= this.xGoal || this.originalX < this.xGoal && this.x >= this.xGoal) {
      this.velocityX *= -1;
    }
    if ((this.originalX > this.xGoal && this.x >= this.originalX || this.originalX < this.xGoal && this.x <= this.originalX) && this.moving) {
      this.moving = false;
      this.x = this.originalX;
      this.velocityX = this.originalV;
    }
    if (this.moving) {
      if (this.collidesTop(this.object, this.object.velocityY)) {
        this.object.x += this.velocityX;
      }
      this.x += this.velocityX;
    }
    this.draw();
  }

  action(player, side) {
    if(side != "top")
      return;
    if (!this.moving) {
      this.x += this.velocityX;
      this.object = player;
    }
    this.moving = true;
  }
  
  reset() {
    this.x = this.originalX;
    this.moving = false;
    this.velocityX = this.originalV;
  }
}
