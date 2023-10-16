class MovingObject {
    constructor(object) {
        this.pos = object.pos;
        this.vel = object.vel;
        this.radius = object.radius;
        this.color = object.colr;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

export default MovingObject;
