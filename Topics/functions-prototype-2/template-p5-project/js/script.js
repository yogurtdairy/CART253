/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let slider;

let ellipse1 = undefined;


function setup() {
  createCanvas(400, 400);

  // Create a slider and place it at the top of the canvas.
  // Set its default value to 0.
  // Set its step size to 0 so that it moves smoothly.
  slider = createSlider(1, 255, 0, 0);
  slider.position(600, 400);
  slider.size(200);
}

function draw() {
    theEllipse();
  // Use the slider as a grayscale value.
  let g = slider.value();
  ellipse1 = theEllipse(200,200,g)
  console.log("ellipse1");
  
 drawEllipse(ellipse1);
}

function theEllipse(x, y, size) {

    const shape ={
x: x,
y: y, 
size: size,};
return shape}


function drawEllipse(shape) {
  push();
  fill(255, 0, 100);
  noStroke();
  ellipse(shape.x, shape.y, shape.size);
  pop(); }