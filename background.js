class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://img.freepik.com/vector-gratis/diseno-fondo-videojuegos_23-2150286097.jpg?w=1380&t=st=1714746166~exp=1714746766~hmac=f08cecb910d5879613be4d82fc3d0503d44560727cf4727a7d80fc0cf957a558"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx

    if (this.x + this.w <= 0) {
      this.x = 0
    }
  }
}