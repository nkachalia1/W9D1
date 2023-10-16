import MovingObject from "./moving_object.js";
const myCanvas = document.getElementById("game-canvas");
const ctx = myCanvas.getContext("2d");
ctx.fillStyle = "red";

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

// window.MovingObject = MovingObject;

mo.draw(ctx);
setInterval(() => {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    mo.move();
    mo.draw(ctx);
}, 250);
