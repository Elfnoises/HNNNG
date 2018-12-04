//based //based on https://www.openprocessing.org/sketch/424072 by Abdelrhman Wassim

var x= 280;
var moonRadius = 17;

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('header');
}

function draw() {

	background (0,100,100);
  
	//the moon :)
  fill(255);
  noStroke();
  ellipse(x,140,40,40);
  x = x + 0.1 ;
  fill(0,100,100);
  rect(340,100,60,100);
	
	 //buildings
	stroke(1);
	line(0,300,300,300);
	line(300,300,300,200);
	line(300,200,350,200);
	line(350,200,350,300);
	line(350,300,340,300);
	line(340,300,340,100);
	line(340,100,370,65);
	line(370,65,400,100);
	line(400,100,400,300);
	line(400,300,375,300);
	line(375,300,375,150);
	line(375,150,430,180);
	line(430,180,430,300);
	line(430,300,600,300);
	
	 //tree
	fill(10,100,0); //green
	ellipse(450,284,moonRadius,moonRadius);
	line(450,300,450,280);
	line(455,285,450,290);
	line(445,281,450,286);
	
	 //name
	textSize(30);
	fill(60,150);
	text("Abdelrhman",50,200); //shadow
	text("Wassim",50,225); //shadow
	fill(155);
	text("Abdelrhman",48,198);
	text("Wassim",48,223);
	
	console.log(mouseX,mouseY);
	
	if (x>width+moonRadius){
		x=-moonRadius;
	}
	
}