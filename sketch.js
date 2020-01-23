// Variables

    var rectY = 0;
var r = 50;
var g= 150;
var b = 250;

var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
    createCanvas(canvasWidth ,canvasHeight)
    
    
}



function draw() {
  

for (var i = 0; i < 15; i++) {
    fill(r,g,b)
    noStroke();
    rect(0,rectY, canvasWidth, canvasHeight/15) ;
    rectY += canvas.height/15;
    r +=13;
    b -=10;
    g=0;

}
    fill(255)
  rect(275, 500, 55, 55);  
}