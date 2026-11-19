/**
 * Party Party Party
 * Nicole Tanev
 * 
 * Make bacteria fall using a popper! It is an infinite supply, amazing!
 * referenced array prototype 1 (Snowfall)
 */

"use strict";


let bacteria = [];


function setup() {

    createCanvas(600, 600);
    bacteria.push(new Bacteria(1000, 1000, 10, 0.05));

}

function draw() {
    background(200);



    for (let i = 0; i < bacteria.length; i++) {
        bacteria[i].grow();
        bacteria[i].spawnNew();
        bacteria[i].move();
        bacteria[i].draw();
        bacteria[i].ouch();

        if (bacteria[i].x < 0) {
            bacteria.splice(i, 1);
        }
    }

    push();
    fill("red");
    ellipse(200, 200, 200);

    pop();

}


class Bacteria {
    constructor(x, y, size, growing) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.growing = growing;
        this.color = color(0, 216, 85, 150);
    }

    grow() {
        this.size += this.growing;

    }

    spawnNew() {
        if (mouseIsPressed) {
            console.log(random(1))
            if (random(1) < 0.02) {
                let baby = new Bacteria(mouseX + random(-10, 10), mouseY + random(-10, 10), random(0, 10), this.growing);
                bacteria.push(baby);
            }
        }
    }

    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    draw() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    ouch() {
        const d = dist(this.x, this.y, 200, 200);
        const overlap = (d < this.size / 2 + 200 / 2);

        if (overlap) {
            this.x = -1;
        }

    }


}

//for (let i = 0; i < bacteria.length; i++) {
//      bacteria.splice(i, 1);
//  }

//const d = dist(this.x, this.y, 200, 200);
//  const overlap = (d < this.size / 2 + 200 / 2);
