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
    }
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
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }

    draw() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}
