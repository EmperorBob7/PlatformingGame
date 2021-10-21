import Block from "./Block.js";

export class ClingBlock extends Block {
  update() {
    if (Math.abs(this.yGoal - this.y) <= Math.abs(this.velocityY)) {
      this.velocityY *= -1;
    }
    if (this.y == this.originalY && this.moving) {
      this.moving = false;
      this.velocityY *= -1;
    }
    if (this.moving) {
      if (this.collidesTop(this.object, this.object.velocityY)) {
        this.object.y += this.velocityY;
      }
      this.y += this.velocityY;
    }
    this.draw();
  }

  action(player) {
    if (!this.moving) {
      this.y += this.velocityY;
      this.object = player;
      this.object.y += this.velocityY;
    }
    this.moving = true;
  }
}