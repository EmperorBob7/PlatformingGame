export default class Block {
  constructor(x, y, width, height, color, ctx, texture) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
    console.log(texture);
    if (texture) {
      this.texture = texture;
    }
  }

  toString() {
    let json = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      color: this.color,
    };
    return JSON.stringify(json);
  }

  update() {
    this.draw();
  }

  action(player, side) {
    //Override this method
  }

  reset() {
    //Override this method
  }

  draw() {
    if (this.texture) {
      this.ctx.fillStyle = this.texture;
      this.ctx.rect(this.x, this.y, this.width, this.height);
      this.ctx.fill();
    } else {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
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
      other.x + other.width >= this.x &&
      other.x <= this.x + this.width &&
      Math.abs(other.y - this.y - this.height) <= speed * -1
    );
  }

  collidesLeft(other, speed) {
    return (
      other.y + other.height > this.y &&
      other.y < this.y + this.height &&
      Math.abs(other.x - this.x - this.width) < speed
    );
  }

  collidesRight(other, speed) {
    return (
      other.y + other.height > this.y &&
      other.y < this.y + this.height &&
      Math.abs(other.x + other.width - this.x) < speed
    );
  }
}
