/**
 * My bubbles hate me
 * Nicole Tanev
 * 
 * blue and pink bubbles that float around in a space! they run away from your curser
 * Referenced arrays prototype 1 and Pippin's Moving Stones
 */

"use strict";

// Array to hold all the bubble objects
let bubbles = [];

/**
 * Create the canvas and the bubbles
 */
function setup() {
    createCanvas(800, 600); // Set canvas size



    // Create 200 bubbles and store them in an array
    for (let i = 0; i < 200; i++) {
        let x = random(width); // random x position
        let y = random(height); // random y position
        let size = random(10, 50); // random size
        //  let speed = random(2, 3.5); // random speed
        let velocityx = random(-1, 1); // random velocity for x
        let velocityy = random(-1, 1); // random velocity for y
        let pink = color(255, 97, 160); // the pink color
        let blue = color(0, 0, 255); // the blue color
        let mapping = undefined // mapping will be assigned
        let colour = random(170, 240); //random colour

        // Create a new bubble object and add it to the array
        bubbles.push(new bubble(x, y, size, velocityx, velocityy, pink, blue, mapping, colour));
    }
}

/**
 * Draw background, Loop bubbles, call bubble class functions
 */
function draw() {
    background(20);


    // Loop through each bubbles, update & show it
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
        bubbles[i].collision();
        bubbles[i].repulsion();
        // Display the bubbles and their behaviors
    }
}


// 
/**
 * Define a class called bubble
 */
class bubble {
    // The constructor runs when a new object is created
    constructor(x, y, size, velocityx, velocityy, pink, blue, colour) {
        this.x = x; // x position
        this.y = y; // y position
        this.size = size; // diameter of the bubble
        this.velocityx = velocityx; // velocity on x
        this.velocityy = velocityy; // velocity on x
        this.pink = pink; //pink color
        this.blue = blue; //blue color

        this.colour = colour; //bubble colour
    }

    // Draw the bubbles
    show() {
        this.mapping = map(this.x, 0, width, 0, 1.0); // maps x on canvas width
        noStroke();
        fill(lerpColor(this.blue, this.pink, this.mapping)); //lerps between pink and blue
        ellipse(this.x, this.y, this.size);
    }
    //move the bubbles
    move() {
        this.x += this.velocityx;
        this.y += this.velocityy;



    }
    //push bubbles away with cursor
    repulsion() {
        // If the mouse is in range it affects the stone...
        const d = dist(mouseX, mouseY, this.x, this.y);

        if (d < this.size + 50) {
            // Change the stone's velocity based on the mouse position 
            // relative to the stone position
            // (Essentially it accelerates away from the mouse)
            this.velocityx += (this.x - mouseX) * 0.5;
            this.velocityy += (this.y - mouseY) * 0.5;
        }

        //return to random velocities if velocity is too accelerated on either axis (also creates shake)
        if (this.velocityx > 1) { this.velocityx = random(0, 5) }
        if (this.velocityy > 1) { this.velocityy = random(0, 5) }
        if (this.velocityx < -1) { this.velocityx = random(-5, 0) }
        if (this.velocityy < -1) { this.velocityy = random(-5, 0) }


    }
    //bubbles collide with "walls" (canvas boundaries)
    collision() {
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