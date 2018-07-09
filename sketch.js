function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here
  background('green');

//this circle will follow my mouse
fill("gray");
ellipse(mouseX,mouseY,40,40);

fill("white");
textSize(40);
text("happy days", 90,100);
}
