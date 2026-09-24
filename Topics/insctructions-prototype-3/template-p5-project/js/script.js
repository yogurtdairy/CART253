/* Yoyo simulator prototype!!! by Nikki Tanev
can eventually be developped into a game with a point system...
*/

function setup() {
  createCanvas(400, 400);
}
//drawing a yoyo attached to a finger by a string (line)
function draw() {
  noCursor();
  background("#03b5aa");
  
  push();
  strokeWeight(5);
  line(mouseX, mouseY - 20, 200, 80);
  pop();
  
  push();
  stroke(255, 220, 200);
  fill(255, 255, 255);
  ellipse(200, 70, 20, 40);
  pop();
  
  push();
  stroke("#f1bea1");
  strokeWeight(30);
  line(200, 70, 200, 0);
  pop();
  
  push();
  noStroke();
  fill("#f6d4c1");
  ellipse(200, 70, 20, 30);
  pop();
  
  push();
  fill(200, 0, 0);
  ellipse(mouseX, mouseY, 40);
  pop();
  
  push();
  fill(255, 0, 0);
  ellipse(mouseX - 7, mouseY, 40);
  pop();
  
  push();
  strokeWeight(5);
  line(218, 50, 183, 50);
  pop();

  push();
  fill(255, 100, 100);
  noStroke();
  ellipse(mouseX - 10, mouseY, 20);
  pop();

  // title on screen as if it is a game
  fill(0);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(32);
  push();
  textSize(20);
  text("yoyo simulator", 90, 35);
  pop();
}

