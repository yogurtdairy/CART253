/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Fish that will swim and eat
let fish1 = undefined;
let fish2 = undefined;
let fish3 = undefined;
let fish4 = undefined;
let fish5 = undefined;

/**
 * Creates the canvas and the two fish
 */
function setup() {
  createCanvas(500, 500);
   
  
  fish1 = createFish(100, 100, 100);
  fish2 = createFish(200, 200, 50);
  fish3 = createFish(300, 300, 90);
  fish4 = createFish(300, 300, 60);
  fish5 = createFish(300, 300, 40);
}

/**
 * Creates a JS object representing a stone and using the
 * parameters provided in its properties
 */
function createFish(x, y, size) {
  const fish = {
    // Position and dimensions
    x: x,
    y: y,
    size: size,
    // How it moves!
    velocity: {
      x: 0,
      y: 0
    },
    // Appearance
    fill: "#0004f4"
  };
  return fish;
}

/**
 * Updates and draws the stone
 */
function draw() {
 background("#00080b");
  
  drawFish(fish1);
  drawFish(fish2);
 drawFish(fish3);
  drawFish(fish4);
  drawFish(fish5);
  eyeballLooking(fish1);
  eyeballLooking(fish2);
  eyeballLooking(fish3);
  eyeballLooking(fish4);
  eyeballLooking(fish4);
}

/**
 * Displays a stone as a circle
 */
function drawFish(fish) {
  push();
  noStroke();
  fill(fish.fill);
  ellipse(fish.x, fish.y, fish.size);
  push();
  fill("#f9faf9")
  ellipse(fish.x, fish.y, fish.size/2);
  pop();
  push();
  fill("#00c8ff")
  ellipse(fish.x, fish.y, fish.size/4);
  pop();
  push();
  fill("#000709")
  ellipse(fish.x, fish.y, fish.size/8);
  pop();
}

function eyeballLooking(){
    fish1.x = map(mouseX*-2,0,width,235,300)
    fish1.y = map(mouseY,0,height,235,300)

     fish2.x = (map(mouseX *2,0,width,235,300)-100)
    fish2.y = (map(mouseY *2,0,height,235,300)-100)

   fish3.x = (map(mouseX *-4,0,width,235,300)+100)
   fish3.y = (map(mouseY *-5,0,height,235,300)+30)

   fish4.x = (map(mouseX *-3,0,width,235,300)+150)
   fish4.y = (map(mouseY *3,5,height,235,300))

    fish5.x = (map(mouseX *4,5,width,235,300))
   fish5.y = (map(mouseY *4,5,height,235,300)+100)

}