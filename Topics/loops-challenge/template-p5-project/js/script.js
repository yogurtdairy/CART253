/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(350, 350);
    colorMode(HSB);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {


    let i = 10;
    let j = 10;

    for (let k = 0; k < 500; k += 1) {
        push();
        stroke(k, 67, 95);
        strokeWeight(20);
        line(0, k, width, k);
        pop();
    }

    while (i < 500) {

        line(i, 0, i, height);

        i += 20;

    }

    while (j < 500) {

        line(0, j, width, j);

        j += 20;
    }





}