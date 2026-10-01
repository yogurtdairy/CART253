/**
 * The rot consumes us all
 * Nikki Tanev
 * 
 * It is an apple that rots over time.
 */

//variables for the rot
var rotting = 10;
var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(400, 400);

  apple();

  rectMode(CENTER);
}

function draw() {
  rotting += 0.1; //increases size of rot
  r -= 0.1; // shift color so it gets darker
  g -= 0.13;
  b -= 0.2;
  rot();
  erase();   //i have never used erase() before but it was very useful
  ellipse(80, 200, 200);
  ellipse(330, 200, 200);
  noErase();

  // makes rot restart from original size once it gets to a certain size
  if (rotting > 100) {
    rotting = 10;
  }
}


function rot() {
  fill(r, g, b);
  ellipse(220, 220, rotting - 10); //size offset so not all rot dots start the same size
  ellipse(170, 190, rotting + 5);
  ellipse(230, 180, rotting + 5);
  ellipse(200, 230, rotting);
}

// draw the apple
function apple() {
  noStroke();
  fill(255, 255, 255);
  ellipse(200, 200, 200);

  fill(255, 0, 0);
  ellipse(200, 120, 200, 50);

  fill(255, 0, 0);
  ellipse(200, 280, 200, 50);

  fill(100, 50, 0);
  rect(195, 60, 20, 60);

  fill(255, 0, 0);
  ellipse(205, 130, 70, 30);
}
