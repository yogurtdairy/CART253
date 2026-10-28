/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Fish that will swim and eat
let fish1 = undefined;
let fish2 = undefined;

/**
 * Creates the canvas and the two fish
 */
function setup() {
  createCanvas(500, 500);
  
  fish1 = createFish(100, 100, 100);
  fish2 = createFish(200, 200, 50);
}

/**
 * Creates a JS object representing a stone and using the
 * parameters provided in its properties
 */
function createFish(x, y, size) {
  const fish = {
    // Position and dimensions
    x: x,
    y: y,
    size: size,
    // How it moves!
    velocity: {
      x: 0,
      y: 0
    },
    // Appearance
    fill: "#00a7f4"
  };
  return fish;
}

/**
 * Updates and draws the stone
 */
function draw() {
  background("#87ceeb");
  
  drawFish(fish1);
  drawFish(fish2);
  eyeballLooking(fish1);
  eyeballLooking(fish2);
}

/**
 * Displays a stone as a circle
 */
function drawFish(fish) {
  push();
  noStroke();
  fill(fish.fill);
  ellipse(fish.x, fish.y, fish.size);
  push();
  fill("#180101")
  ellipse(fish.x, fish.y, fish.size/2);
  pop();
}

function eyeballLooking(){
    fish1.x = map(mouseX,0,width,235,260)
    fish1.y = map(mouseY,0,height,235,260)

     fish2.x = (map(mouseX *-1,0,width,235,260)-100)
    fish2.y = (map(mouseY *-1,0,height,235,260)-100)

}