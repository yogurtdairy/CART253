/**
 * Snowfall
 * Nicole Tanev
 * 
 * Snowflakes! You can control the falling speed and wind direction 
 */

"use strict";

// Array to hold all the snowflake objects
let snowflakes = [];

//variable that controls the wind direction (and influences fall speed)
let windDirection = 0;


/**
 * Create the canvas and the snowflakes
 */
function setup() {
    createCanvas(800, 600); // Set canvas size


    // Create 50 snowflakes and store them in an array
    for (let i = 0; i < 50; i++) {
        let x = random(width); // random x position
        let y = random(height); // random y position
        let size = random(10, 30); // random size
        //  let speed = random(2, 3.5); // random speed
        let velocityx = random(-1, 1);
        let velocityy = random(-1, 1);
        let colour = random(170, 240); //random colour

        // Create a new snowflake object and add it to the array
        snowflakes.push(new snowflake(x, y, size, velocityx, velocityy, colour));
    }
}

/**
 * Draw background, Loop snowflakes, call snowflake class functions
 */
function draw() {
    background(20);


    // Loop through each snowflakes, update & show it
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].move();
        snowflakes[i].show();
        snowflakes[i].collision();
        // Display the snowflakes
    }
}


function mouseMoved() {
    if (mouseX > 360) windDirection += 0.20;
    if (mouseX < 440) windDirection -= 0.20;
    if (windDirection < -1) windDirection = -1;
    if (windDirection > 7) windDirection = 7;
    console.log(windDirection);
}

// 
/**
 * Define a class called snowflake
 */
class snowflake {
    // The constructor runs when a new object is created
    constructor(x, y, size, velocityx, velocityy, colour) {
        this.x = x; // x position
        this.y = y; // y position
        this.size = size; // diameter of the snowflake
        this.velocityx = velocityx;
        this.velocityy = velocityy;
        //  this.speed = speed; // fall speed
        this.colour = colour; //snowflake colour
    }

    // Draw the snowflakes
    show() {
        noStroke();
        fill(this.colour);
        ellipse(this.x, this.y, this.size);
    }
    //move the snowflakes
    move() {
        this.x += this.velocityx;
        this.y += this.velocityy;
    }

    collision() {
        if (this.x > width) {
            this.velocityx = this.velocityx * -1
        }
        if (this.x < 0) {
            this.velocityx = this.velocityx * -1
        }
        if (this.y > height) {
            this.velocityy = this.velocityy * -1
        }
        if (this.y < 0) {
            this.velocityy = this.velocityy * -1
        }
    }
}