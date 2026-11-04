/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Array to hold all the snowflake objects
let snowflakess = [];

function setup() {
  createCanvas(800, 600); // Set canvas size
 

  // Create 50 snowflakes and store them in an array
  for (let i = 0; i < 50; i++) {
    let x = random(width); // random x position
    let y = random(height); // random y position
    let size = random(10, 30); // random size
    let colour = random(170, 240); //random colour

    // Create a new snowflake object and add it to the array
    snowflakess.push(new snowflake(x, y, size, colour));
  }
}


function draw() {
  background(20);


  // Loop through each snowflakes, update & show it
  for (let i = 0; i < snowflakess.length; i++) {
    snowflakess[i].show();
    // Display the snowflakes
  }
}

// Define a class called snowflake
class snowflake {
  // The constructor runs when a new object is created
  constructor(x, y, size, colour) {
    this.x = x; // x position
    this.y = y; // y position
    this.size = size; // diameter of the snowflake
    this.colour = colour; //snowflake colour
  }

  // Draw the snowflakes
  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size);
  }
}
