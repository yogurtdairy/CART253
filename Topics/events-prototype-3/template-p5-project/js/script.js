/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let r = 0;

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
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(400, 400);
  background(0);

  setInterval(eggisCooked, egg.delay);

  push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("you started cooking your egg", 200, 40);
  pop();
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  

  egg.eggWhite = egg.eggWhite + 0.02;

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

function eggisCooked() {
  
  if (egg.state === egg.states.twominutes) {
    background(0);

    egg.state = egg.states.fourminutes;
    console.log('1');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("2 minute passed, egg not ready", 200, 40);
  pop();

  }
  else if (egg.state === egg.states.fourminutes) {
    background(0);
    console.log('2');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("4 minutes passed, egg not ready", 200, 40);
  pop();
    egg.state = egg.states.sixminutes;
  }
  else if (egg.state === egg.states.sixminutes) {
    background(0);
    console.log('3');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("6 minutes passed, egg is runny", 200, 40);
  pop();
    egg.state = egg.states.sixminutes;
    egg.state = egg.states.eightminutes;
  } else if (egg.state === egg.states.eightminutes) {
    background(0);
    console.log('4');
    push();
    fill('yellow');
    textAlign(CENTER);
  textSize(20);
  text("8 minutes passed, egg is ready!", 200, 40);
  pop();
    egg.state = egg.states.twominutes;
  }

}
