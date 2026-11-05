/**
 * Party Party Party
 * Nicole Tanev
 * 
 * Make confetti fall using a popper! It is an infinite supply, amazing!
 * referenced array prototype 1 (Snowfall)
 */

"use strict";

// Array to hold all the confetti objects
let confettis = [];


/**
 * Create the canvas and the confettis
 */
function setup() {
  createCanvas(800, 600); // Set canvas size
  const colorArray = [color(255,20,20), color(20,255,20), color(20,20,255)]; //store all confetti colors in array
 

  // Create 50 confettis and store them in an array
  for (let i = 0; i < 50; i++) {
    let x = random(width); // random x position
    let y = random(height); // random y position
    let size = random(10, 30); // random size
    let speedx = 0; // initial speed on y
    let speedy = 0; // initial speed on y
    let colour = random(colorArray); //random colour picked from array

    // Create a new confetti object and add it to the array
    confettis.push(new confetti(x, y, size, speedx, speedy, colour));
  }
}

/**
 * Draw background, Loop confettis, call confetti class functions
 */
function draw() {
  background(20);


  // Loop through each confettis, update & show it
  for (let i = 0; i < confettis.length; i++) {
    confettis[i].move();
    confettis[i].show();
    // Display the confettis
  }

  noCursor();
  rectMode(CENTER);

  //draws confetti popper where your curser would be
  push();
fill(255);
rect(mouseX,mouseY +50, 5,30);
pop();

push();
fill("red")
rect(mouseX,mouseY +20, 20,40);
pop();


}

/**
 * Starts explode where your mouse clicked
 */
function mouseClicked() {
  for (let c of confettis) {
    c.explode(mouseX, mouseY);
}
}

// 
/**
 * Define a class called confetti
 */
class confetti {
  // The constructor runs when a new object is created
  constructor(x, y, size, speedx,speedy, colour) {
    this.x = x; // x position
    this.y = y; // y position
    this.size = size; // diameter of the confetti
    this.speedx = speedx; // fall speed
    this.speedx = speedy;
    this.colour = colour; //confetti colour
  }

  // Draw the confettis
  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size, this.size);
  }
    //moves the confettis after explosion
    move() {
    this.y += this.speedy 
    this.x += this.speedx; 
    this.speedy += 0.1; // gravity full confetti back down
    }
  
 //begins the confetti explosion
  explode(x, y) {
    this.x = x + this.speedx;
    this.y = y += this.speedy;
    this.speedx = random(-5,5);
    this.speedy = random(-5,2);
    this.speedy -= 5; // confetti goes up because y is lowered
  }
}