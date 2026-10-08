/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  mouseClicked;

  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Pick rock", 70, 380);
  text("Pick scissors", 200, 380);
  text("Pick paper", 320, 380);
}

function mouseClicked() {
  rockpaperscissors();

  if (mouseX < 100) {
    textAlign(CENTER);
    // playedRock();
    textSize(32);
    text("🪨", 200, 300);
  } else if (mouseX > 100 && mouseX < 300) {
    textSize(32);
    text("✂️", 200, 300);
  } else if (mouseX > 300) {
    textSize(32);
    text("📃", 200, 300);
  }
}

function rockpaperscissors() {
  background(0);
  let options = ["🪨", "📃", "✂️"];
  let choice = random(options);

  textAlign(CENTER);
  textSize(32);
  text(choice, 200, 200);
}
