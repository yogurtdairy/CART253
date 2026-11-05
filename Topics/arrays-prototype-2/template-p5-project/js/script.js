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
  const colorArray = [color(255,20,20), color(20,255,20), color(20,20,255)];
 

  // Create 50 snowflakes and store them in an array
  for (let i = 0; i < 50; i++) {
    let x = random(width); // random x position
    let y = random(height); // random y position
    let size = random(10, 30); // random size
    let speedx = 0;
    let speedy = 0; // random speed
    let colour = random(colorArray); //random colour

    // Create a new snowflake object and add it to the array
    snowflakes.push(new snowflake(x, y, size, speedx, speedy, colour));
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

  noCursor();
  rectMode(CENTER);

  push();
fill(255);
rect(mouseX,mouseY +50, 5,30);
pop();

push();
fill("red")
rect(mouseX,mouseY +20, 20,40);
pop();


}

function mouseClicked() {
  for (let c of snowflakes) {
    c.burst(mouseX, mouseY);
}




}

// 
/**
 * Define a class called snowflake
 */
class snowflake {
  // The constructor runs when a new object is created
  constructor(x, y, size, speedx,speedy, colour) {
    this.x = x; // x position
    this.y = y; // y position
    this.size = size; // diameter of the snowflake
    this.speedx = speedx; // fall speed
    this.speedx = speedy;
    this.colour = colour; //snowflake colour
  }

  // Draw the snowflakes
  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size, this.size);
  }
    //move the snowflakes
    move() {
    this.y += this.speedy // Move down and slow/speed up
    this.x += this.speedx; // change wind direction
    this.speedy += 0.1;
    }
  

  burst(x, y) {
    this.x = x + this.speedx;
    this.y = y += this.speedy;
    this.speedx = random(-5,5);
    this.speedy = random(-5,2);
    this.speedy -= 5;
  }
}