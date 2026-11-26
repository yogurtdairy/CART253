
"use strict";

let bacteria = [];

let hazard = [];


function setup() {

    createCanvas(600, 600);
    bacteria.push(new Bacteria(100, 100, 10, 0.05));

    hazard.push(new Hazard(200, 200, 50, 1, 1, 200));


}

function draw() {
    background(255);


    for (let i = hazard.length - 1; i >= 0; i--) {
        hazard[i].draw();
        hazard[i].move();


        let intersect = false;
        for (let j = 0; j < hazard.length; j++) {
            if (i != j && hazard[i].intersects(hazard[j])) {
                intersect = true;
            }
        }
        if (intersect) {
            console.log("birth");
        }


        if (hazard[i].x < -20 || hazard[i].energy < 0 || hazard[i].alpha < 0) {
            hazard.splice(i, 1);
        }
    }

    for (let i = bacteria.length - 1; i >= 0; i--) {
        bacteria[i].grow();
        bacteria[i].spawnNew();
        bacteria[i].move();
        bacteria[i].draw();
        bacteria[i].ouch(hazard);
        bacteria[i].reproduction();

        if (bacteria[i].x < 0 || bacteria[i].x > 600 || bacteria[i].y > 600 || bacteria[i].y < 0) {
            bacteria.splice(i, 1);
        } else if (bacteria[i].lifespan < 0) {
            bacteria.splice(i, 1);
        }
    }
}


for (let i = 0; i < bacteria.length; i++) {
    bacteria[i].grow();
    bacteria[i].spawnNew();
    bacteria[i].move();
    bacteria[i].draw();
    bacteria[i].ouch(hazard);
    bacteria[i].reproduction();



    if (bacteria[i].x < 0 || bacteria[i].x > 600 || bacteria[i].y > 600 || bacteria[i].y < 0) {
        bacteria.splice(i, 1);
    } else if (bacteria[i].lifespan < 0) {
        bacteria.splice(i, 1);
    }


}





class Bacteria {
    constructor(x, y, size, growing) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.growing = growing;
        this.color = color(0, 216, 85);
        this.lifespan = random(200, 1000);
        this.alpha = 200
    }

    grow() {
        this.size += this.growing;


    }

    spawnNew() {
        if (mouseIsPressed) {
            if (random(1) < 0.02) {
                let baby = new Bacteria(mouseX + random(-10, 10), mouseY + random(-10, 10), random(0, 10), this.growing, random(-1, 1), random(-1, 1));
                bacteria.push(baby);
            }
        }
    }

    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
        this.lifespan--;

        this.color.setAlpha(this.alpha);
        this.alpha -= random(0.008, 0.5);
    }

    draw() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    ouch(hazard) {

        for (let b of hazard) {

            const d = dist(this.x, this.y, b.x, b.y);
            const overlap = (d < this.size / 2 + b.size / 2);

            if (overlap && this.size - 10 < b.size) {
                this.x = -1;

                b.size += 0.2;
                b.energy += 2;
                b.alpha += 1;

                if (b.energy > 300) {
                    b.energy = 300
                }

                if (b.alpha > 300) {
                    b.alpha = 300
                }

                if (b.size > 200) {
                    b.x = -100;

                }
            }

        }

    }

    reproduction() {
        if (this.size > 30 && this.lifespan > 500) {
            let baby = new Bacteria(this.x + random(-10, 10), this.y + random(-10, 10), random(0, 10), this.growing, random(-1, 1), random(-1, 1));
            bacteria.push(baby);
        }

    }


}

class Hazard {
    constructor(x, y, size, velocityx, velocityy, energy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color(255, 0, 0);
        this.velocityx = velocityx;
        this.velocityy = velocityy;
        this.energy = energy;
        this.alpha = 200

    }


    draw() {

        push();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    move() {

        this.color.setAlpha(this.alpha);
        this.alpha -= 0.2;


        this.x += this.velocityx
        this.y += this.velocityy
        this.energy -= 0.2

        if (this.x > width) {
            this.velocityx = this.velocityx * -1 //right wall
        }
        if (this.x < 0) {
            this.velocityx = this.velocityx * -1 //left wall
        }
        if (this.y > height) {
            this.velocityy = this.velocityy * -1 //upper wall
        }
        if (this.y < 0) {
            this.velocityy = this.velocityy * -1 //lower wall
        }
    }

    intersects(otherhazard) {

        const d = dist(this.x, this.y, otherhazard.x, otherhazard.y);
        const overlap = (d < this.size / 2 + otherhazard.size / 2);

        if (overlap) {
            return true;
        } else {
            return false;
        }

    }


}

function keyPressed() {

    for (let i = 0; i < 5; i++) {
        let hazardbaby = new Hazard(random(0, 600), random(0, 600), random(10, 35), random(-1.5, 1.5), random(-1.5, 1.5), 200);
        hazard.push(hazardbaby);
    }
}


