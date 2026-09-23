/* Slot Machine prototype!!! by Nikki Tanev
Was originally planning on having the handle move by switching between two states but I never completed that idea
*/


// unused value for slot handle movement
let value = 300;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  //slotRolling();
  slotmachine();
  lucky();
  rectMode(CENTER);
  //handle red ball
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

//the main parts that compose the slot machine
function slotmachine() {

  push();
  noStroke();
  fill(255, 208, 0);
  ellipse(300,212,250,200);
  pop();

  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(300,222,230,200);
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
  fill(255,255,255)
  strokeWeight(4);
  rect(230, 300, 70, 100);
  pop();

  push();
  fill(255,255,255)
  strokeWeight(4);
  rect(300, 300, 70, 100);
  pop();

  push();
  fill(255,255,255)
  strokeWeight(4);
  rect(370, 300, 70, 100);
  pop();

  push();
  fill(0,0,0)
  strokeWeight(4);
  rect(300, 480, 150, 50);
  pop();

  push();
  noStroke();
  fill(255,0,0);
  ellipse(200, 425, 80, 30);
  pop();

  push();
  noStroke();
  fill(0,255,0);
  ellipse(300, 425, 80, 30);
  pop();

   push();
  noStroke();
  fill(0,0,255);
  ellipse(400, 425, 80, 30);
  pop();
  
}
// the text elements
  function lucky() {
  push();
  noStroke();
  textSize(70);
  fill(255,0,0);
  text('7', 211, 325);
  pop();
  
  push();
  noStroke();
  textSize(70);
  fill(255,0,0);
  text('7', 281, 325);
  pop();

  push();
  noStroke();
  textSize(70);
  fill(255,0,0);
  text('7', 351, 325);
  pop();

  push();
  noStroke();
  textSize(40);
  fill(0,0,0);
  text('Jackpot', 230, 180);
  pop();
}

//unused handle movement code
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
