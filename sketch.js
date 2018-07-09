function setup() {
  // put setup code here
  createCanvas(600,400);
    background('black');
}


function draw() {
  // put drawing code here


//this circle will follow my mouse
fill("pink");
ellipse(mouseX,mouseY,5,5);
 noStroke();

 fill("green");
 ellipse(mouseX-6,mouseY+20,2,2);
  noStroke();

fill("white");
 triangle(30, 75, 58, 20, 86, 75);

fill("white");
textSize(40);
text("happy days", 300,300);
fill("gray");
text("happy days", 300,250);
}
