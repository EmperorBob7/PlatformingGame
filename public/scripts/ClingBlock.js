import Block from "./Block.js";

export class ClingBlock extends Block {
  action(player, side) {
    if(side == "left" || side == "right") {
      player.velocityY = 0;
      return true;
    }
    return false;
  }
  
  collidesLeft(other, speed) {
    return (other.y >= this.y && other.y <= this.y + this.height || other.y + other.height > this.y && other.y < this.y + this.height) && Math.abs(other.x - this.x - this.width) <= speed;
  }
  
  collidesRight(other, speed) {
    return (other.y >= this.y && other.y <= this.y + this.height || other.y + other.height > this.y && other.y < this.y + this.height) && Math.abs(other.x + other.width - this.x) <= speed;
  }
}