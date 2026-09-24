/* Pastel Landscape prototype!!! by Nikki Tanev
Simpler concept but with more visual details like shading/lighting
*/

//put nostroke in setup because none of my elements will have a stroke
function setup() {
  createCanvas(640, 640);
  background(188,231,253)
  noStroke();
  fill(173,231,200);
  rect(-1, 560, 642, 68);
  noStroke();
  fill(188,231,137);
  rect(-1, 575, 642, 68);
tree1();
  tree2();
  sun();
}

//there are two trees, this one is bigger
function tree1() {
  
  push();
  fill(204,197, 179);
  rect(363, 435, 60, 150);
  
  fill(214,207, 189);
  rect(350, 435, 60, 150);
  
  fill(204,197, 179);
  rect(357, 280, 60, 200);
  
  fill(224,217, 199);
  rect(358, 495, 40, 90);
  
  fill(173,231, 200);
  ellipse(400, 320, 250);
  
  fill(183,241, 210);
  ellipse(380, 320, 250);
  
  fill(193,251, 220);
  ellipse(355, 300, 180);
  pop();
}

//there are two trees, this one is smaller
function tree2() {

   push();
  fill(204,197, 179);
  rect(163, 465, 30, 120);
  
  fill(214,207, 189);
  rect(150, 465, 30, 120);
  
  fill(204,197, 179);
  rect(157, 310, 30, 170);
  
  fill(224,217, 199);
  rect(158, 500, 10, 85);
  
  fill(173,231, 200);
  ellipse(175, 370, 200);
  
  fill(183,241, 210);
  ellipse(160, 370, 200);
  
  fill(193,251, 220);
  ellipse(140, 360, 140);
  pop();
 
}

// it is a sun in the corner
function sun() {
  
fill(234, 243, 211)
ellipse(600,0,350)
  
fill(255, 255, 200)
ellipse(600,0,300)
}
}
