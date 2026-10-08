/**
 * Rock Paper Scissors
 * Nicole
 * 
 * A simple but functional game of rock paper scissors. You can pick what you want to play and the computer will randomly pick as well.
 */

"use strict";

// create canvas
function setup() {
  createCanvas(400, 400);
  background(0);
}

// draws the text that will not change
function draw() {
  mouseClicked;

  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("[Pick rock]", 70, 380);
  text("[Pick scissors]", 192, 380);
  text("[Pick paper]", 320, 380);

  push();
  textSize(20);
  text("<- your opponent", 300, 200);
  text("you ->", 146, 300);
  pop();
}

//knows where you clicked to display your choice
function mouseClicked() {
  rockpaperscissors();
textAlign(CENTER);
    textSize(32)
  if (mouseX < 150) {;
    text("🪨", 200, 300);
  } else if (mouseX > 150 && mouseX < 250) {
    textSize(32);
    text("✂️", 200, 300);
  } else if (mouseX > 250) {
    textSize(32);
    text("📃", 200, 300);
  }
}

function rockpaperscissors() {
    //redraws the backgroud so that the text and choices don't overlap
  background(0);
  let options = ["🪨", "📃", "✂️"];
  let choice = random(options);

  textAlign(CENTER);
  textSize(32);
  text(choice, 200, 200);

  //checks your choice compared to the computer's and displays the outcome
  if (choice == "📃" && mouseX < 150) {
    text("you lost..", 200, 50);
  } else if (choice == "📃" && mouseX > 150 && mouseX < 250)
    text("you won!!", 200, 50);
  else if (choice == "📃" && mouseX > 250) {
    text("you tied", 200, 50);
  }

  if (choice == "🪨" && mouseX < 150) {
    text("you tied", 200, 50);
  } else if (choice == "🪨" && mouseX > 150 && mouseX < 250)
    text("you lost..", 200, 50);
  else if (choice == "🪨" && mouseX > 250) {
    text("you won!!", 200, 50);
  }

  if (choice == "✂️" && mouseX < 150) {
    text("you won!!", 200, 50);
  } else if (choice == "✂️" && mouseX > 150 && mouseX < 250)
    text("you tied", 200, 50);
  else if (choice == "✂️" && mouseX > 250) {
    text("you lost..", 200, 50);
  }
}
