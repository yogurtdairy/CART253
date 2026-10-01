/**
 * Whimsical drawing machine
 * Nikki Tanev
 * 
 * Inspired by the projects seen in class but all the code is my own.
 * The brush has a mind of it's own! It resets every time mouse is pressed.
 */

let ball = {
  w: 10,
  h: 10,

  r: 255,
  g: 255,
  b: 255,
};

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  rectMode(CENTER);
  ball.w += random(-2, 2);
  ball.h += random(-2, 2);

  if (ball.w > 50) {
    ball.w = 10;
  }

  if (ball.h > 50) {
    ball.h = 10;
  }

  if (ball.r > 255) {
    ball.r = 220;
  }
  if (ball.g > 255) {
    ball.g = 220;
  }
  if (ball.b > 255) {
    ball.b = 220;
  }

  if (ball.r < 0) {
    ball.r = 20;
  }
  if (ball.g < 0) {
    ball.g = 20;
  }
  if (ball.b < 0) {
    ball.b = 20;
  }
}

function mouseDragged() {
  grow();
}

function mousePressed() {
  createCanvas(400, 400);
  background(255);
  ball.w = 10;
  ball.h = 10;
}

function grow() {
  noStroke();
  fill(
    (ball.r += random(-50, 50)),
    (ball.g += random(-50, 50)),
    (ball.b += random(-50, 50))
  );
  ellipse(
    (mouseX += random(-10, 10)),
    (mouseY += random(-10, 10)),
    ball.w,
    ball.h
  );
}
