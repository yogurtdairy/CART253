/**
 * Egg cooking timer
 * Nicole Tanev
 *
 * Timer and visualizer that helps you track how long you must boil your egg
 * referenced Pippin's trafficlight project
 */

"use strict";

// the egg
const egg = {
  // Position and size
 eggWhite: 0,
  delay: 120000,
  state: 1,
  states: {
    twominutes: 1,
    fourminutes: 2,
    sixminutes : 3,
    eightminutes: 4
  }
};

/**
 * calls things upon refrech
 */
function setup() {
  createCanvas(400, 400);
  background(0);

  // timer for the egg cooking that calls the different states of .. wellness? Cooking?
  setInterval(eggisCooked, egg.delay);

  //draws the text displayed upon starting the timer
  push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("you started cooking your egg", 200, 40);
  pop();
}

/**
 * redraws things every frame
 */
function draw() {
  // colors egg white over time to visualize cooking state
  egg.eggWhite = egg.eggWhite + 0.013;

  // draws the egg
  push();
  noStroke();
  fill(egg.eggWhite);
  ellipse(230, 170, 150, 160);
  ellipse(180, 200, 150, 170);
  ellipse(170, 280, 150, 140);
  ellipse(250, 250, 150, 140);

  push();
  fill("#f5c827");
  ellipse(220, 200, 90, 90);
pop();
}

/**
 * gets called when timer sets off (every 2 minutes)
 */
function eggisCooked() {
  
  //switches states
  if (egg.state === egg.states.twominutes) {
    background(0);

    egg.state = egg.states.fourminutes;
    console.log('1');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  //text that lets us know how long it has been
  text("2 minute passed, egg not ready", 200, 40); 
  pop();

  } //switches states
  else if (egg.state === egg.states.fourminutes) {
    background(0);
    console.log('2');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  //text that lets us know how long it has been
  text("4 minutes passed, egg not ready", 200, 40); 
  pop();
    egg.state = egg.states.sixminutes;
  } //switches states
  else if (egg.state === egg.states.sixminutes) {
    background(0);
    console.log('3');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  //text that lets us know how long it has been
  text("6 minutes passed, egg is runny", 200, 40);
  pop();
    egg.state = egg.states.sixminutes;
    egg.state = egg.states.eightminutes;
  } else if //switches states
  (egg.state === egg.states.eightminutes) {
    background(0);
    console.log('4');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  //text that lets us know how long it has been
  text("8 minutes passed, egg is ready!", 200, 40);
  pop();
    egg.state = egg.states.twominutes;
  }

}
