/**
 * Box Game v2
 * Nicole Tanev
 * 
 * A simple game where you must avoid the bigger circle. Updated version actually keeps you contained within box, and makes you
 * lose more points the closer you are to the center of the enemy circle.
 * Referenced Pippin's Overlapping Circles (Functions)
 */


// We start with our enemy circles undefined because we will create
// them with a function in setup
let enemy1 = undefined;
let enemy2 = undefined;
let enemy3 = undefined;

let health = 100;

// The user's circle (they will move it around)
const userCircle = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 20,
  fill: "#000000"
};

/**
 * Create the canvas and the enemys
 */
function setup() {
  createCanvas(400, 400);
  
  enemy1 = createenemy(200, 200, 100);
  enemy2 = createenemy(200, 200, 60);
  enemy3 = createenemy(300, 300, 40);
}

/**
 * Creates a enemy using the provided position and size parameters
 */
function createenemy(x, y, size) {
  // We create a new object in a variable with the properties
  // our enemy needs. Some of them come from the parameters
  // and so are specified when this function is called, some of them
  // are just defaults (like the fills)
  const enemy = {
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
  // We RETURN this new enemy so it can be stored in a variable
  return enemy;
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
  checkOverlap(userCircle, enemy1);
  checkOverlap(userCircle, enemy2);
  checkOverlap(userCircle, enemy3);
  
  // Draw the enemys and the user
  drawElement(enemy1);
  drawElement(enemy2);
  drawElement(enemy3);
  drawElement(userCircle);

  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(32);
  text(round(health) + " health points", 200, 40);
  
  // Did you see how tidy that draw() is???
}

/**
 * Checks overlap between the user circle and a provided enemy.
 * Changes the enemy's fill depending on whether there is an
 * overlap.
 */
function checkOverlap(user, enemy) {

   

    console.log(health);
  // Calculate distance between circles' centres
  const d = dist(user.x, user.y, enemy.x, enemy.y);
  // Check if that distance is smaller than their two radii, 
  // because if it is, they are overlapping by the amazing
  // power of geometry!
  const overlap = (d < user.size/2 + enemy.size/2);
  // Set the enemy's fill based on whether they overlap
  if (overlap) {
    

    enemy.fill = enemy.fills.overlap;
    health -= 0.1
  }
  else {
    enemy.fill = enemy.fills.noOverlap;
  }

  enemy.x = 380 * noise(0.05 * frameCount)
  enemy.y= 380 * noise(0.05 * frameCount + 10000)

  enemy1.x += random(-5,5);
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