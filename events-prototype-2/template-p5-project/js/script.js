/**
 * Track and Field
 * Nicole Tanev
 *
 * Use the D key to propel your racer forward againt your opponents
 * referenced Tile Based Movement by Pippin Barr
 */


// Boolean that controls opponent movement start/stop
let opponentStart = true;

// The size of a single tile
const tileSize = 32;

// Dimensions of the "world"
const rows = 10;
const columns = 10;

const backgroundColour = "#0b8028";

// The player
let player = {
  // Position and size
  x: 0,
  y: tileSize * 8,
  size: tileSize,
  // Colour
  fill: "#87ceeb",
};

const opponentOne = {
  // Position and size
  x: 0,
  y: tileSize * 5,
  size: tileSize,
  // Colour
  fill: "#f3260b",
};

const opponentTwo = {
  // Position and size
  x: 0,
  y: tileSize * 2,
  size: tileSize,
  // Colour
  fill: "#f30bef",
};

/**
 * Create the canvas
 */
async function setup() {
  // A 10x10 world
  createCanvas(tileSize * columns, tileSize * rows);

  await preload();
}

/**
 * Display the player and coin, check overlap
 */
function draw() {
  background(backgroundColour);

  push();
  // track lines to seperate runners
  strokeWeight(5);
  line(0, tileSize * 7, tileSize * 10, tileSize * 7);
  line(0, tileSize * 4, tileSize * 10, tileSize * 4);
  line(0, tileSize * 1, tileSize * 10, tileSize * 1);

  //start and finish lines
  line(tileSize * 1.5, 35, tileSize * 1.5, tileSize * 10);
  line(tileSize *9, 35, tileSize * 9, tileSize * 10);
  pop();
  
 
  // Numbers on ground to mark runner order
push();
textSize(50);
 fill('white');
  text('1', tileSize * 2, tileSize * 3);
  text('2', tileSize * 2, tileSize * 6);
  text('3', tileSize * 2, tileSize * 9);
  pop();

  push();
  fill(255);
  textSize(10);
  // instructions 
 text('you are cyan, click to start/pause, spam D key to move ', 35, 19);
  pop();


  // Draw player
  push();
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);
  pop();

  // Draw first opponent
  push();
  noStroke();
  fill(opponentOne.fill);
  rect(opponentOne.x, opponentOne.y, opponentOne.size, opponentOne.size);
  pop();

  // draw second opponent
   push();
  noStroke();
  fill(opponentTwo.fill);
  rect(opponentTwo.x, opponentTwo.y, opponentTwo.size, opponentTwo.size);
  pop();

  // If race has begun, opponents move forward at their personal speeds
 if (!opponentStart) {
  opponentOne.x+= random(-0.2, 0.55);
  opponentTwo.x+= random(-0.1,0.4); };

// win condition, if player passes finish line.x while opponenets have not, displays win message
  if (player.x >= tileSize * 8 - 5 && opponentOne.x < tileSize * 8 - 5 && opponentTwo.x ) {
    textSize(50);
    fill(255);
    text('YOU WON', 50, 200);
    // if not, displays encouraging defeat message
  } else if (player.x >= tileSize * 8 - 5) {
    textSize(50);
    fill(0);
    text('Good try', 70, 200);
  }
}

/**
 * Respond to a keypress
 */
function keyPressed(event) {
  // direction
  let move = {
    x: 0,
    y: 0
  };
  if (event.keyCode === 68 && !opponentStart) {
    move.x = random(-0.1,4);
  }
 
  
  // Apply the movement if there is any
  if (move.x !== 0 || move.y !== 0) {

    const p = random(0, 100);
    if (p < 10) {
      move.y = -move.y;
    }
    
    player.x += move.x;
    player.y += move.y;
  }
}

/**
 * Starts and stops the race on mouse click
 */
function mouseClicked() {
opponentStart = !opponentStart;
}
