/**
 *Teeth gnawing on my flesh yummy
 * By Nikki Tanev!!
 * 
 * Set of teeth closing as if biting.
 */

let leftwalls = {
  x: -50,
};

let rightwalls = {
  x: 450,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(160, 0, 0);
  rectMode(CENTER);

  noStroke();
  push();
  fill(255, 0, 0);
  rect(leftwalls.x, 200, 200, 200);
  rect(leftwalls.x, 0, 200, 200);
  rect(leftwalls.x, 400, 200, 200);
  rect(leftwalls.x - 200, 400, 200, 800);
  pop();

  leftwalls.x += 0.7;

  push();
  triangle(leftwalls.x + 100, 0, leftwalls.x + 200, 50, leftwalls.x + 100, 100);
  triangle(leftwalls.x + 100, 100, leftwalls.x + 200, 150, leftwalls.x + 100, 200);
  triangle(leftwalls.x + 100, 200, leftwalls.x + 200, 250, leftwalls.x + 100, 300);
  triangle(leftwalls.x + 100, 300, leftwalls.x + 200, 350, leftwalls.x + 100, 400);
  pop();

  if (leftwalls.x > width /8) {
    leftwalls.x = -50;
  }

  
//_______
  
  
   noStroke();
  push();
  fill(255, 0, 0);
  rect(rightwalls.x, 200, 200, 200);
  rect(rightwalls.x, 0, 200, 200);
  rect(rightwalls.x, 400, 200, 200);
  rect(rightwalls.x +200, 400, 200, 800);
  pop();

 rightwalls.x -= 0.7;

  push();
  triangle(rightwalls.x -100, -50, rightwalls.x -100, 50,rightwalls.x -200, 0);
  triangle(rightwalls.x -100, 50, rightwalls.x -100, 150,rightwalls.x -200, 100);
  triangle(rightwalls.x -100, 150, rightwalls.x -100, 250,rightwalls.x -200, 200);
  triangle(rightwalls.x -100, 250, rightwalls.x -100, 350,rightwalls.x -200, 300);
  triangle(rightwalls.x -100, 350, rightwalls.x -100, 450,rightwalls.x -200, 400);
  pop();
  
   if (rightwalls.x < 350) {
    rightwalls.x = 450;
  }
}
