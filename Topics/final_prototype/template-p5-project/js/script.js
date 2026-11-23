
"use strict";

let bacteria = [];

let hazard = [];


function setup() {

    createCanvas(600, 600);
    bacteria.push(new Bacteria(1000, 1000, 10, 0.05));

    hazard.push(new Hazard(600, 600, 200));


}

function draw() {
    background(255);

    for (let i = 0; i < hazard.length; i++) {
        hazard[i].draw(bacteria);
        hazard[i].move();

        if (hazard[i].x < -20) {
            hazard.splice(i, 1);
        }

        if (hazard[i].energy < 0) {
            hazard.splice(i, 1);
        }
    }


    for (let i = 0; i < bacteria.length; i++) {
        bacteria[i].grow();
        bacteria[i].spawnNew();
        bacteria[i].move();
        bacteria[i].draw();
        bacteria[i].ouch(hazard);



        if (bacteria[i].x < 0) {
            bacteria.splice(i, 1);
        } else if (bacteria[i].lifespan < 0) {
            bacteria.splice(i, 1);
        }
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

                b.size += 0.1;
                b.energy += 1;
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


}

function keyPressed() {
    console.log("hi")
    let hazardbaby = new Hazard(random(0, 600), random(0, 600), random(10, 35), random(-1, 1), random(-1, 1), 200);
    hazard.push(hazardbaby);

}


