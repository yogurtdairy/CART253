/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 3
    }
};

const ball2 = {
    x: 400,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 2
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball, ball2);

    handleBounce(ball, paddle, ball2);

    drawPaddle(paddle);
    drawBall(ball, ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
paddle.x = mouseX;
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball, ball2) {
ball.x = ball.x + ball.velocity.x;
ball.y = ball.y + ball.velocity.y;

ball2.x = ball2.x + ball2.velocity.x;
ball2.y = ball2.y + ball2.velocity.y;
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle, ball2) {


// Calculate distance between circles' centres
  const d = dist(ball.x, ball.y, paddle.x, paddle.y);
  // Check if that distance is smaller than their two radii
  let overlap = (d < ball.width + paddle.height/2 );
  // Set the target's fill based on whether they overlap
  if (overlap) {
   ball.velocity.y = ball.velocity.y * -1;
  }

  const d2 = dist(ball2.x, ball2.y, paddle.x, paddle.y);
  // Check if that distance is smaller than their two radii
  let overlap2 = (d2 < ball2.width + paddle.height/2 );
  // Set the target's fill based on whether they overlap
  if (overlap2) {
   ball2.velocity.y = ball2.velocity.y * -1;
  }

  if (ball.y < 0) {
ball.velocity.y = ball.velocity.y * -1;
  }

  if (ball2.y < 0) {
ball2.velocity.y = ball2.velocity.y * -1;
  }
}


/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball, ball2) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();

    push();
    rectMode(CENTER);
    noStroke();
    fill("purple");
    rect(ball2.x, ball2.y, ball2.width, ball2.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}
