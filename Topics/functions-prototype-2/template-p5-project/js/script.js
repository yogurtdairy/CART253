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

let ball = {
  w: 10,
  h: 10,

  r: 255,
  g: 255,
  b: 255,
};


function setup() {
  createCanvas(600, 600);

  // Creates a slider and sets its position and size
  slider = createSlider(1, 255, 0, 0);
  slider.position(660, 200);
  slider.size(200);
}

function draw() {
    theEllipse();
  let g = slider.value();
  ellipse1 = theEllipse(300,300,g)
  console.log("ellipse1");
  
 drawEllipse(ellipse1);


  if (ball.w > 50) {
    ball.w = 10;
  }

  if (ball.h > 50) {
    ball.h = 10;
  }

  // reseting color if past 255 or bellow 0, to avoid too much white or black
  if (ball.r > 255) {
    ball.r = 220;
  }
  if (ball.g > 255) {
    ball.g = 220;
  }
  if (ball.b > 255) {
    ball.b = 220;
  }

  if (ball.r < 0) {
    ball.r = 20;
  }
  if (ball.g < 0) {
    ball.g = 20;
  }
  if (ball.b < 0) {
    ball.b = 20;
  }

}

function theEllipse(x, y, size) {

    const shape ={
x: x,
y: y, 
size: size,};
return shape}


function drawEllipse(shape) {
  push();
  fill(ball.r += random(-15, 15), ball.g += random(-15, 15), ball.b += random(-15, 15) );
  noStroke();
  ellipse(shape.x, shape.y, shape.size);
  pop(); }


  