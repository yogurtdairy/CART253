// made by joel and nikki yayyyyy

// this scene is based on hollow knight silksong's "bone bottom" area, with a few creative liberties. if something doesn't make sense feel free to look it up and see what we were trying to portray here :o)

function setup() {
  createCanvas(900,450);
  angleMode(DEGREES);
  rectMode(CENTER);
  
}

function draw() {
  background(19, 16, 36);
  tent();
  ground();
  moon();
  silkflies();
  myfriend();
  bush();
}

// functions vv
function ground(){
  push();
  noStroke();
  fill(44, 42, 51);
  rect(450, 450, 900, 150);
  pop();
}

function tent(){
  // tent 1
  push();
  noStroke();
  fill(74, 54, 37);
  triangle(50, 400, 300, 400, 175, 100);
  pop();
   // tent opening
  push();
  noStroke();
  fill(36, 26, 19);
  ellipse(190, 400, 100, 240);
  pop();

  // tent 2
  push();
  noStroke();
  fill(74, 54, 37);
  triangle(585, 400, 865, 400, 725, 150);
  pop();
   // tent opening
  push();
  noStroke();
  fill(36, 26, 19);
  ellipse(700, 400, 100, 240);
  pop();
}

function moon(){
  // base shape vvv
  push();
  noStroke();
  fill(138, 169, 227);
  circle(600, 50, 140);
  pop();

  // crescent vvv
  push();
  noStroke();
  fill(19, 16, 36);
  circle(565, 30, 100);
  pop();
}

function silkflies(){
  //fly 1 vvv
  push();
  noStroke();
  fill(173, 233, 240);
  circle(290, 300, 14);
  fill(173, 233, 240, 40);
  circle(290, 300, 30);
  pop();

  push();
  noStroke();
  fill(173, 233, 240);
  ellipse(300, 295, 15, 6);
  pop();
  
// fly 2 vvv
  push();
  noStroke();
  fill(173, 233, 240);
  circle(600, 200, 14);
  fill(173, 233, 240, 40);
  circle(600, 200, 30);
  pop();

  push();
  noStroke();
  fill(173, 233, 240);
  ellipse(590, 195, 15, 6);
  pop();
  
// fly 3 vvv
  push();
  noStroke();
  fill(173, 233, 240);
  circle(400, 340, 14);
  fill(173, 233, 240, 40);
  circle(400, 340, 30);
  pop();

  push();
  noStroke();
  fill(173, 233, 240);
  ellipse(410, 335, 15, 6);
  pop();
}

function myfriend(){
    // horns were requested so i have to add them now vvv
  push();
  noStroke();
  fill(179, 159, 178);
  ellipse(535, 290, 15, 20);
  pop();

  push();
  noStroke();
  fill(179, 159, 178);
  ellipse(565, 290, 15, 20);
  pop();
  
    // limbs vv
  push();
  noStroke();
  fill(36, 19, 35);
  ellipse(535, 390, 10, 50);

  push();
  noStroke();
  fill(36, 19, 35);
  ellipse(560, 390, 10, 50);
  pop();
  
  // body vvv
  push();
  noStroke();
  fill(82, 45, 80);
  ellipse(550, 340, 70, 100);
  pop();

  // face shape vv
  push();
  noStroke();
  fill(179, 159, 178);
  ellipse(550, 310, 64, 55);

  // eyes vv
  push();
  noStroke();
  fill(36, 19, 35);
  ellipse(535, 305, 15, 20);

  push();
  noStroke();
  fill(36, 19, 35);
  ellipse(557, 305, 15, 20);
  pop();

}

function bush(){
  // a handful of scattered greenery like the reference scene
  push();
  noStroke();
  fill(131, 161, 63);
  circle(20, 430, 90);
  pop();

  push();
  noStroke();
  fill(131, 161, 63);
  circle(70, 400, 60);
  pop();
  
  push();
  noStroke();
  fill(131, 161, 63);
  circle(120, 430, 50);
  pop();
  
  push();
  noStroke();
  fill(131, 161, 63);
  circle(820, 430, 90);
  pop();
  
  push();
  noStroke();
  fill(131, 161, 63);
  circle(875, 410, 60);
  pop();

  push();
  noStroke();
  fill(131, 161, 63);
  circle(760, 390, 50);
  pop();
}
