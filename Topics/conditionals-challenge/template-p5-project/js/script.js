/**
 * Circle Master
 *Nicole Tanev and Sydney Perror
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
  filluser: "#ff0000",
};

const target = {
  x: 300,
  y: 300,
  size: 30,
  filltarget: "#000000",
  fills: {
    noOverlap: "#000000", // red for no overlap
    overlap: "#00ff04", // green for overlap
  },
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
  textSize(20);
  text(round(dist(puck.x, puck.y, target.x, target.y) - puck.size/2 - 10) + " pixels away from target", 50, 35); //shows how far we are from target

  // Move user circle
  moveUser();

  // Draw the user and puck
  drawUser();
  drawPuck();
  movePuck();
  drawTarget();
  touchTarget();
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
  fill(user.filluser);
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
  fill(target.filltarget);
  ellipse(target.x, target.y, target.size);
  pop();
}

function touchTarget() {
  const da = dist(puck.x, puck.y, target.x, target.y);
  // Check if that distance is smaller than their two radii,
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlape = da < puck.size / 2 + target.size / 2;

  if (overlape) {
   target.filltarget = target.fills.overlap;
  }
  else {
    target.filltarget = target.fills.No0verlap;
  }
}

