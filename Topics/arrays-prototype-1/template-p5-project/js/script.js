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
    let speed = random(2, 3.5); // random speed
    let colour = random(170, 240); //random colour

    // Create a new snowflake object and add it to the array
    snowflakes.push(new snowflake(x, y, size, speed, colour));
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
  constructor(x, y, size, speed, colour) {
    this.x = x; // x position
    this.y = y; // y position
    this.size = size; // diameter of the snowflake
    this.speed = speed; // fall speed
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
    this.y += this.speed + windDirection; // Move down and slow/speed up
    this.x += windDirection - 1; // change wind direction
    if (this.x > 820) this.x = -20;
    if (this.x < -20) this.x = 820; // reset snowflakes side to side + smoothing

    if (this.y > height + 20) {
      this.y = -20; // reset snowflakes top to bottom + smoothing
    }
  }
}
