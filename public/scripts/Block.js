export default class Block {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
  
  update() {
    this.draw();
  }
  
  action(player) {
    //Override this method
  }
  
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  collidesTop(other, speed) {
    return (
      other.x + other.width >= this.x &&
      other.x <= this.x + this.width &&
      Math.abs(other.y + other.height - this.y) <= speed
    );
  }

  collidesBottom(other, speed) {
    return (
      other.x + other.width > this.x &&
      other.x < this.x + this.width &&
      Math.abs(other.y - this.y - this.height) <= Math.abs(speed)
    );
  }

  collidesLeft(other, speed) {
    return (other.y >= this.y && other.y <= this.y + this.height || other.y + other.height > this.y && other.y < this.y + this.height) && Math.abs(other.x - this.x - this.width) <= speed;
  }
  
  collidesRight(other, speed) {
    return (other.y >= this.y && other.y <= this.y + this.height || other.y + other.height > this.y && other.y < this.y + this.height) && Math.abs(other.x + other.width - this.x) <= speed;
  }
}