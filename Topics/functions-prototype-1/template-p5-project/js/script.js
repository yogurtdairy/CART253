/**
 * Evil Eyes
 * Nicole Tanev
 * 
 * Evil eyes move around seemingly in a hectic way when mouse is moved
 * referenced Pippin's Moving Stones
 */

"use strict";

// eyes that will be moving around
let eye1 = undefined;
let eye2 = undefined;
let eye3 = undefined;
let eye4 = undefined;
let eye5 = undefined;

/**
 * Creates the canvas and the eyes
 */
function setup() {
  createCanvas(500, 500);
   
 eye1 = createEye(100, 100, 100);
  eye2 = createEye(200, 200, 50);
  eye3 = createEye(300, 300, 90);
  eye4 = createEye(300, 300, 60);
  eye5 = createEye(300, 300, 40);
}

/**
 * Creates a JS object representing an eye and using the
 * parameters provided in its properties
 */
function createEye(x, y, size) {
  const eye = {
    // Position and dimensions
    x: x,
    y: y,
    size: size,
    // How it moves
    velocity: {
      x: 0,
      y: 0
    },
    // Appearance
    fill: "#0004f4"
  };
  return eye;
}

/**
 * Updates and draws the eyes
 */
function draw() {
//redraws black background every frame
 background("#00080b");
  
  drawEye(eye1);
  drawEye(eye2);
  drawEye(eye3);
  drawEye(eye4);
  drawEye(eye5);
  eyeballLooking(eye1);
  eyeballLooking(eye2);
  eyeballLooking(eye3);
  eyeballLooking(eye4);
  eyeballLooking(eye4);
}

/**
 * Displays an evil eye made from many overlapping ellipses
 */
function drawEye(eye) {
  push();
  noStroke();
  fill(eye.fill);
  ellipse(eye.x, eye.y, eye.size);
  push();
  fill("#f9faf9")
  ellipse(eye.x, eye.y, eye.size/2);
  pop();
  push();
  fill("#00c8ff")
  ellipse(eye.x, eye.y, eye.size/4);
  pop();
  push();
  fill("#000709")
  ellipse(eye.x, eye.y, eye.size/8);
  pop();
}

/**
 * moves the eyes based on mouse movements on both X and Y
 */
function eyeballLooking(){

    //Mapping the mouse coordinates. Original value set to mouse. Maps Last two arguments create the range of movement (bigger difference bigger range)
    //some are multiplied by a negative to reverse direction (moves away from mouse instead of towards)
    //numbers at end of bracket change position of each individual eye to avoid overlap
    eye1.x = map(mouseX*-2,0,width,235,300) 
    eye1.y = map(mouseY,0,height,235,300)

    eye2.x = (map(mouseX *2,0,width,235,300)-100)
    eye2.y = (map(mouseY *2,0,height,235,300)-100)

   eye3.x = (map(mouseX *-4,0,width,235,300)+100)
   eye3.y = (map(mouseY *-5,0,height,235,300)+30)

   eye4.x = (map(mouseX *-3,0,width,235,300)+150)
   eye4.y = (map(mouseY *3,5,height,235,300))

    eye5.x = (map(mouseX *4,5,width,235,300))
   eye5.y = (map(mouseY *4,5,height,235,300)+100)

}