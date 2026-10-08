/**
 * Box Game
 * Nicole
 * 
 * A simple game where you must avoid the bigger circle.
 * 
 */

"use strict";

var offX = 1;
var offY = 2;

// Player Size
var playerSize = 15;

// Enemy Size
var enmySize = 40;

// Enemy Position
var enmyX;
var enmyY;

// Score counter
var score = 0;

var reColors = ["#f94144", "#f3722c", "#f9c74f"];

// create canvas
function setup() {
  createCanvas(400, 400);

  // Place enemy at random start position
  enmyX = random(width - enmySize);
  enmyY = random(height - enmySize);
}
// draw player and text
function draw() {
  noCursor();
  background(0, 0, 0);
  rectMode(CENTER);
  fill(255);
  rect(200, 200, 250);
  checkCollision();


  fill(0);
  ellipse(mouseX, mouseY, playerSize);

  
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(32);
  text(round(score + 50) + " health points", 200, 40);

  if (score < -50) {text("GAME OVER", 200, 375);}
}

// calculates distance between player and enemy to figure out collision
function checkCollision() {
  offX += 0.02;
  offY += 0.02;
  let elX = map(noise(offX), 0, 1, 0, 400);
  let elY = map(noise(offY), 0, 1, 0, 400);
  fill(random(reColors));
  noStroke();
  ellipse(elX, elY, enmySize);
  // Distance between player and enemy centers
  let distAway = dist(mouseX, mouseY, elX, elY);

  // Threshold for collision: half player + half enemy "size"
  let threshold = playerSize / 2 + enmySize / 2;

  if (distAway < threshold) {
    score += -1
  }
}