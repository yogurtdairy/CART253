/**
 * Overlapping Circles (Functions)
 * Pippin Barr
 *
 * Demonstrates the code needed to check if circles overlap.
 * Three are static, one is controlled by the user.
 * This version moves the creation, drawing and overlap check into
 * functions allowing us to check three targets without needing to 
 * repeat code.
 */

// We start with our target circles undefined because we will create
// them with a function in setup
let target1 = undefined;
let target2 = undefined;
let target3 = undefined;

let score = 100;

// The user's circle (they will move it around)
const userCircle = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 20,
  fill: "#000000"
};

/**
 * Create the canvas and the targets
 */
function setup() {
  createCanvas(400, 400);
  
  target1 = createTarget(200, 200, 100);
  target2 = createTarget(200, 200, 60);
  target3 = createTarget(300, 300, 40);
}

/**
 * Creates a target using the provided position and size parameters
 */
function createTarget(x, y, size) {
  // We create a new object in a variable with the properties
  // our target needs. Some of them come from the parameters
  // and so are specified when this function is called, some of them
  // are just defaults (like the fills)
  const target = {
    x: x, // Use the x parameter for the x property
    y: y, // Use the y parameter for the y property
    size: size, // Use the size parameter for size property
    // For the fills, use default settings
    fill: "#000000", // red to start
    fills: {
      noOverlap: "#000000", // red for no overlap
      overlap: "#ff0000" // green for overlap
    }
  };
  // We RETURN this new target so it can be stored in a variable
  return target;
}

/**
 * Move the user circle, check for overlap, draw the circles
 */
function draw() {
  // Aaaaaa!
  background("#000000");
  push();
   rectMode(CENTER);
  fill(255);
  rect(200, 200, 250);
  pop();

  
  // Move user circle
  userCircle.x = constrain(mouseX, 80, 320);
  userCircle.y = constrain(mouseY, 80, 320);
  
  // Check overlap
  checkOverlap(userCircle, target1);
  checkOverlap(userCircle, target2);
  checkOverlap(userCircle, target3);
  
  // Draw the targets and the user
  drawElement(target1);
  drawElement(target2);
  drawElement(target3);
  drawElement(userCircle);

  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(32);
  text(round(score) + " health points", 200, 40);
  
  // Did you see how tidy that draw() is???
}

/**
 * Checks overlap between the user circle and a provided target.
 * Changes the target's fill depending on whether there is an
 * overlap.
 */
function checkOverlap(user, target) {

   

    console.log(score);
  // Calculate distance between circles' centres
  const d = dist(user.x, user.y, target.x, target.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = (d < user.size/2 + target.size/2);
  // Set the target's fill based on whether they overlap
  if (overlap) {
    

    target.fill = target.fills.overlap;
    score -= 0.1
  }
  else {
    target.fill = target.fills.noOverlap;
  }

  target.x = 380 * noise(0.05 * frameCount)
  target.y= 380 * noise(0.05 * frameCount + 10000)

  target1.x += random(-5,5);
}



/**
 * Draws a circle element using its position, size, and fill.
 */
function drawElement(element) {

  push();
  noCursor();
  noStroke();
  fill(element.fill);
  ellipse(element.x, element.y, element.size);
  pop();

  
}