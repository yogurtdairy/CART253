/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Array to hold all the snowflake objects
let snowflakes = [];

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


function draw() {
  background(20);


  // Loop through each snowflakes, update & show it
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].move();
    snowflakes[i].show();
    // Display the snowflakes
  }
}

// Define a class called snowflake
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

   move() {
    this.y += this.speed // Move down and slow/speed up


    if (this.y > height+20) {
      this.y = -20; // reset snowflakes top to bottom + smoothing
    }
  }
}
