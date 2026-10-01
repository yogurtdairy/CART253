/**
 * Circle Master
 * Nicole Tanev and Sydney Perron
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#383838",
  fills: {
    noOverlap: "#383838", // red for no overlap
    overlap: "#383838", // green for overlap
  },
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000",
};

const target = {
  x: 300,
  y: 300,
  size: 30,
  fill: "#ff0000",
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  // Draw the user and puck
  drawUser();
  drawPuck();
  movePuck();
  drawTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function movePuck() {
  const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii,
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = d < user.size / 2 + puck.size / 2;

  if (overlap) {
    if (user.x > puck.x) {
      //to check if user is on left or right
      puck.x -= 10;
    } else {
      puck.x += 10;
    }
  } else {
    puck.fill = puck.fills.noOverlap;
  }

  if (overlap) {
    if (user.y > puck.y) {
      //to check if user is on left or right
      puck.y -= 10;
    } else {
      puck.y += 10;
    }
  } else {
    puck.fill = puck.fills.noOverlap;
  }
}

function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
