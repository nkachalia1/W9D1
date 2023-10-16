import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "red";

    constructor(object) {
        this.pos = object.pos;
        this.radius = Asteroid.RADIUS;
        this.color = Asteroid.COLOR;
        this.vel = Util.randomVec(15);
    }
}

export default Asteroid;
