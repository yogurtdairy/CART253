/**
 * Slot machine v2
 * Nicole
 * 
 * This is a continuation of my slot machine prototype
 * I will attempt to make it functional
 */

"use strict";

let value = 300;
let dropOne = undefined;
let dropTwo = undefined;
let dropThree = undefined;
let dropFour = undefined;

function setup() {
  createCanvas(600, 600);
  background(220);
  const pOne = random();
  const pTwo = random();
  const pThree = random();
  const pFour = random();

  if (pOne < 0.01) {
    dropOne = "🦁";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pOne < 0.21) {
    dropOne = "🐯";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pOne < 0.51) {
    dropOne = "🐻"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropOne = "🍇"
  }

  if (pTwo < 0.01) {
    dropTwo = "🦁";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pTwo < 0.21) {
    dropTwo = "🐯";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pTwo < 0.51) {
    dropTwo = "🐻"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropTwo = "🍇"
  }

  if (pThree < 0.01) {
    dropThree = "🦁";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pThree < 0.21) {
    dropThree = "🐯";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pThree < 0.51) {
    dropThree = "🐻"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropThree = "🍇"
  }

  if (dropOne === dropTwo && dropTwo === dropThree) {
   push();
   noStroke();
  textSize(40);
  fill(0, 0, 0);
  text("YOU WIN!", width/2 -100, 50);
  pop() 
}
}

function draw() {
  //slotRolling();
  slotmachine();
  lucky();
  rectMode(CENTER);
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(500, value, 40);
  pop();
  push();
  noStroke();
  fill(255, 120, 120);
  ellipse(498, value - 3, 18, 22);
  pop();
}

function slotmachine() {
  push();
  noStroke();
  fill(255, 208, 0);
  ellipse(300, 212, 250, 200);
  pop();

  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(300, 222, 230, 200);
  pop();

  push();
  noStroke();
  fill(255, 255, 0);
  rect(300, 470, 350, 140);
  pop();

  push();
  strokeWeight(20);
  line(400, 390, 500, 300);
  pop();

  push();
  noStroke();
  fill(255, 208, 0);
  rect(300, 300, 250, 200);
  pop();

  push();
  fill(255, 255, 255);
  strokeWeight(4);
  rect(230, 300, 70, 100);
  pop();

  push();
  fill(255, 255, 255);
  strokeWeight(4);
  rect(300, 300, 70, 100);
  pop();

  push();
  fill(255, 255, 255);
  strokeWeight(4);
  rect(370, 300, 70, 100);
  pop();

  push();
  fill(0, 0, 0);
  strokeWeight(4);
  rect(300, 480, 150, 50);
  pop();

  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(200, 425, 80, 30);
  pop();

  push();
  noStroke();
  fill(0, 255, 0);
  ellipse(300, 425, 80, 30);
  pop();

  push();
  noStroke();
  fill(0, 0, 255);
  ellipse(400, 425, 80, 30);
  pop();
}

function lucky() {
  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropOne, 211, 325);
  pop();

  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropTwo, 281, 325);
  pop();

  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropThree, 351, 325);
  pop();

  push();
  noStroke();
  textSize(40);
  fill(0, 0, 0);
  text("Jackpot", 230, 180);
  pop();
}

//this is to move the slot machine handle on click
/*function slotRolling() {
  if (value > 300) {
    textAlign(CENTER, CENTER);
    textSize(20);
  }
  if (value < 300) {
    textAlign(CENTER, CENTER);
    textSize(20);
  } /*
}
//this is to move the slot machine handle on click
/*function mousePressed() {
  //console.log("mouse click");
  console.log(value);
  value += 200;
  if (value > 500) {
    value = 300;
  }
} */
