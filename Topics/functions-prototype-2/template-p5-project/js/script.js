/**
 * Make a target
 * Nicole Tanev
 * 
 * slider controls size of circle that is constantly shifting colors
 * referenced my own code for variables prototype 2
 */

"use strict";

let slider;

//the ellipse
let ellipse1 = undefined;

//the variables to influence ellipse colors
let ellipseColors = {
  r: 255,
  g: 255,
  b: 255,
};

/**
 * Creates the canvas and slider
 */
function setup() {
  createCanvas(600, 600);

  // Creates a slider and sets its position and size
  slider = createSlider(1, 255, 0, 0);
  slider.position(660, 200);
  slider.size(200);
}

/**
 * Updates and draws the ellipse
 */
function draw() {
    theEllipse();
  let g = slider.value();
  ellipse1 = theEllipse(300,300,g)
  console.log("ellipse1");
  
 drawEllipse(ellipse1);


  // reseting color if past 255 or below 0, to avoid too much white or black
  if (ellipseColors.r > 255) {
    ellipseColors.r = 220;
  }
  if (ellipseColors.g > 255) {
    ellipseColors.g = 220;
  }
  if (ellipseColors.b > 255) {
    ellipseColors.b = 220;
  }

  if (ellipseColors.r < 0) {
    ellipseColors.r = 20;
  }
  if (ellipseColors.g < 0) {
    ellipseColors.g = 20;
  }
  if (ellipseColors.b < 0) {
    ellipseColors.b = 20;
  }

}

/**
 * Creates a JS object representing an ellipse and using the
 * parameters provided in its properties
 */
function theEllipse(x, y, size) {

    const shape ={
x: x,
y: y, 
size: size,};
return shape}

/**
 * displays the ellipse and it's color
 */
function drawEllipse(shape) {
  push();
  //color is increasing and decreasing in rgb values at random
  fill(ellipseColors.r += random(-15, 15), ellipseColors.g += random(-15, 15), ellipseColors.b += random(-15, 15) );
  noStroke();
  ellipse(shape.x, shape.y, shape.size);
  pop(); }


  