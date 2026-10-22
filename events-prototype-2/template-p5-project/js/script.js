/**
 * Tile Based Movement
 * Pippin Barr
 *
 * Move a shape around with the keys, eat a coin
 */

// The size of a single tile
const tileSize = 32;

// Dimensions of the "world"
const rows = 10;
const columns = 10;

const backgroundColour = "#CE87C9";

// The player
const player = {
  // Position and size
  x: 0,
  y: tileSize * 8,
  size: tileSize,
  // Colour
  fill: "#87ceeb",
  // Sound effect
};

// The coin
const coin = {
  // Position and size
  x: tileSize * 5,
  y: tileSize * 6,
  size: tileSize,
  // Colour
  fill: "#ceeb87",
  // Has it been picked up yet?
  collected: false,
  // Sound effect

};

/**
 * Load the coin collection and player move sounds
 */

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
  strokeWeight(5);
  line(0, tileSize * 7, tileSize * 10, tileSize * 7);
  pop();
  
  // Check if the player got the coin (i.e. is in the same location)
  // Collect it and play the sound if so
  if (player.x === coin.x && player.y === coin.y && !coin.collected) {
    coin.collected = true;
  }
  
  // The coin
  // Only display it if is *hasn't* been collected!
  if (!coin.collected) {
    
  }  
  
  // The player
  push();
  noStroke();
  fill(player.fill);
  rect(player.x, player.y, player.size, player.size);
  pop();
}

/**
 * Respond to a keypress
 */
function keyPressed(event) {
  // Check if it was one of the arrows and choose the move
  // direction
  let move = {
    x: 0,
    y: 0
  };
  if (event.keyCode === RIGHT_ARROW) {
    move.x = random(1,5);
  }
  else if (event.keyCode === LEFT_ARROW) {
    move.x = -tileSize;
  }
  // Apply the movement if there is any
  // and play the sound effect
  if (move.x !== 0 || move.y !== 0) {

    const p = random(0, 100);
    if (p < 10) {
      move.y = -move.y;
    }
    
    player.x += move.x;
    player.y += move.y;
  }
}