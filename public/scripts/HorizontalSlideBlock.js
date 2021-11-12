import Block from "./Block.js";
export class HorizontalSlideBlock extends Block {
  constructor(x, y, width, height, color, ctx, xGoal, velocityX) {
    super(x, y, width, height, color, ctx);
    this.velocityX = velocityX;
    this.xGoal = xGoal;
    this.originalX = x;
    this.moving = false;
  }

  update() {
    if (this.x == this.xGoal) {
      this.velocityX *= -1;
    }
    if (this.x == this.originalX && this.moving) {
      this.moving = false;
      this.velocityX *= -1;
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
}
