/**
 * Slot machine v2
 * Nicole
 * 
 * This is a continuation of my slot machine prototype. It can now roll and display winning messages depending on the rarity of the outcome. 
 * Referenced Pippin Barr's random() and probability
 */

"use strict";

let value = 300;
let dropOne = undefined;
let dropTwo = undefined;
let dropThree = undefined;
let dropFour = undefined;
let currency = 20;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  
  
}

function draw() {
noLoop();
  background(220);

  textSize(20);
  text(round(currency) + "$ in bank account", 370, 35);
  push();
  fill(255,0,0);
  if (currency < 0) {text("You are in DEBT", 390, 60);}
  pop();
  slotmachine();
  lucky();


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
  


  //checks if all three drops are the same and displays a winning message depending on the rarity of the outcome
  if (dropOne === dropTwo && dropTwo === dropThree) {
    if (dropOne === "7️⃣") {
   push();
  textSize(40);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(0);
strokeWeight(2);
  text("YOU WIN A MILLION DOLLARS", width/2, 70);
  pop() 
  currency+=1000001;
  push();
  noStroke();
  fill('orange');
  ellipse(280,500,300);
  ellipse(320,480,300);
  ellipse(310,492,300);
  ellipse(250,488,300);
  ellipse(270,468,300);
  ellipse(350,465,300);
  ellipse(370,490,300);
  pop();
  
} else if (dropOne === "🍒") {
  push();
  textSize(40);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(0);
strokeWeight(2);
  text("YOU WIN $1,000", width/2, 90);
  pop()
  currency+=1001;push();
  noStroke();
  fill('orange');
  ellipse(280,500,70);
  ellipse(320,480,70);
  ellipse(310,492,70);
  ellipse(250,488,70);
  ellipse(270,468,70);
  ellipse(350,465,70);
  ellipse(370,490,70);
  pop();

} else if (dropOne === "🍋") {
  push();
  textSize(40);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(0);
strokeWeight(2);
  text("YOU WIN $100", width/2, 90);
  pop()
  currency+=101;
   push();
  noStroke();
  fill('orange');
  ellipse(280,500,30);
  ellipse(320,480,30);
  ellipse(310,492,30);
  ellipse(250,488,30);
  ellipse(270,468,30);
  ellipse(350,465,30);
  ellipse(370,490,30);
  pop();

} else if (dropOne === "🍇") {
  push();
  textSize(40);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  stroke(0);
strokeWeight(2);
  text("YOU WIN $2", width/2, 90);
  pop()
  currency+=3;
  push();
  noStroke();
  fill('orange');
  ellipse(280,500,30);
  ellipse(320,480,30);
  pop();
}
}
}

function mousePressed() {
loop();
currency-=3;

// rolls the p value for every slot on refresh
const pOne = random();
  const pTwo = random();
  const pThree = random();

if (pOne < 0.01) {

    dropOne = "7️⃣";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pOne < 0.21) {
    dropOne = "🍒";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pOne < 0.51) {
    dropOne = "🍋"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropOne = "🍇"
  }

  if (pTwo < 0.01) {
    dropTwo = "7️⃣";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pTwo < 0.21) {
    dropTwo = "🍒";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pTwo < 0.51) {
    dropTwo = "🍋"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropTwo = "🍇"
  }

  if (pThree < 0.01) {
    dropThree = "7️⃣";
  }
  // Between 0.01 and 0.21 means this one is 20% of the time
  else if (pThree < 0.21) {
    dropThree = "🍒";
  }
  // Between 0.21 and 0.51 means this one is 30% of the time
  else if (pThree < 0.51) {
    dropThree = "🍋"
  }
  // Between 0.51 and 1.0 means this one is 49% of the time
  else {
    dropThree = "🍇"
  }


   
  
}


//draws the slot machine
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
// draws the slots
function lucky() {
  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropOne, 188, 325);
  pop();

  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropTwo, 258, 325);
  pop();

  push();
  noStroke();
  textSize(60);
  fill(255, 0, 0);
  text(dropThree, 327, 325);
  pop();

  push();
  noStroke();
  textSize(40);
  fill(0, 0, 0);
  text("Jackpot", 230, 180);
  pop();
}

