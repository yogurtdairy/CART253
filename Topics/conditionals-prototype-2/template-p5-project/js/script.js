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
var playerSize = 15;
var enmySize = 40;
var enmyX;
var enmyY;
var score = 0;
var reColors = ["#f94144", "#f3722c", "#f9c74f"];


function setup() {
  createCanvas(400, 400);

  enmyX = random(width - enmySize);
  enmyY = random(height - enmySize);
}

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

function checkCollision() {
  offX += 0.02;
  offY += 0.02;
  let elX = map(noise(offX), 0, 1, 0, 400);
  let elY = map(noise(offY), 0, 1, 0, 400);
  fill(random(reColors));
  noStroke();
  ellipse(elX, elY, enmySize);
 
  let distAway = dist(mouseX, mouseY, elX, elY);

  
  let threshold = playerSize / 2 + enmySize / 2;

  if (distAway < threshold) {
    score += -1
  }
}