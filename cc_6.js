// U5223-1368

class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(canvas) {
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const ball = new Ball(200, 160, 20, 2, 2, 'red');

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx);
    ball.update(canvas);
}

setInterval(animate, 8);