let value = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  slotRolling();
  rectMode(CENTER);
  // rect(150, 200, 250, 200);
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

function slotRolling() {
  if (value > 200) {
    //this is where code for slot rolling will begin
    textAlign(CENTER, CENTER);
    textSize(20);
    text("🌸", 50, 50);
  }
  if (value < 200) {
    textAlign(CENTER, CENTER);
    textSize(20);
    text(" ", 50, 50);
  }
}

function mousePressed() {
  //console.log("mouse click");
  console.log(value);
  value += 200;
  if (value > 300) {
    value = 100;
  }
}