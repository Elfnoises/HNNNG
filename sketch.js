//based //based on https://www.openprocessing.org/sketch/424072 by Abdelrhman Wassim

var rad = 6; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

var x= 280;
var moonRadius = 17;

function setup() {
  var canvas = createCanvas(600, 400);
	 noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  
}

function draw() {

	background (1);
	
	 //buildings
	stroke(147, 255,0);
	line(0,300,300,300); //first stright line
	line(300,300,300,200); //backbone of H
	line(300,250,350,250); //bar across H
	line(350,200,350,300); //second line of H
	line(340,300,340,100); //backbone of E
	line(340,100,400,100); //top bar of E
	line(340,190,400,190); //2nd bar of E
	line(340,290,400,290); //3rd bar of E
	line(420,300,375,300); //bottom bar of C
	line(375,300,375,150); //back of C
	line(375,150,420,150); //top bar of C
	line(400,120,400,290); //backbone of K
	line(400,220,450,300); //downward slant of K
	line(400,220,450,125); //upward slant of K
	line(450,300,6000,300); //first stright line
	
	
	
	
	 //name
	textSize(30);
	fill(60,150);
	text("Alicia",50,200); //shadow
	text("Beznoska",50,225); //shadow
	fill(500);
	text("Alicia",48,198);
	text("Beznoska",48,223);
	
	console.log(mouseX,mouseY);
	
	if (x>width+moonRadius){
		x=-moonRadius;
	}
	
	// Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
	

	
