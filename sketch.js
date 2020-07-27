var hr, mn, sc;
var scAngle, mnAngle, hrAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(400,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,90,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(95,245,13);
  strokeWeight(7);
  line(0,0,110,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(248,233,26);
  strokeWeight(8);
  line(0,0,80,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0, 0, 290, 290, 0,scAngle);

  stroke(95,245,13);
  arc(0, 0, 320, 320, 0,mnAngle);

  stroke(248,233,26);
  arc(0, 0, 350, 350, 0,hrAngle);

  drawSprites();
}