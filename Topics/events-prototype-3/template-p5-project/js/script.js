/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let r = 0;

let egg = {
  // Position and size
 eggWhite: 0
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
  background(0);

  egg.eggWhite = egg.eggWhite + 1;

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
