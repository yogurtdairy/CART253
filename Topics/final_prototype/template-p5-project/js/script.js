/**
 * Party Party Party
 * Nicole Tanev
 * 
 * Make bacteria fall using a popper! It is an infinite supply, amazing!
 * referenced array prototype 1 (Snowfall)
 */

"use strict";






let bacteria = [];

let hazard = [];


function setup() {

    createCanvas(600, 600);
    bacteria.push(new Bacteria(1000, 1000, 10, 0.05));

    hazard.push(new Hazard(600, 600, 200));


}

function draw() {
    background(200);

    for (let i = 0; i < hazard.length; i++) {
        hazard[i].draw(bacteria);
        hazard[i].move();

        if (hazard[i].x < -20) {
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
        this.color.setAlpha(this.alpha);
        this.alpha -= random(0.008, 0.5);

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


            if (overlap) {
                this.x = -1;

                b.size += 0.1;

                if (b.size > 200) {
                    b.x = -100;

                }
            }

        }

    }


}

class Hazard {
    constructor(x, y, size, velocityx, velocityy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color("red")
        this.velocityx = velocityx
        this.velocityy = velocityy

    }


    draw() {

        push();
        fill("red");
        ellipse(this.x, this.y, this.size);


    }

    move() {
        this.x += this.velocityx
        this.y += this.velocityy

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
    let hazardbaby = new Hazard(random(0, 600), random(0, 600), random(5, 20), random(-1, 1), random(-1, 1));
    hazard.push(hazardbaby);

}


