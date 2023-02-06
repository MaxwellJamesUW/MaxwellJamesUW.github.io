// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
   
}
// Render loop that draws shapes with p5
function draw(){
  // Set the default blend mode
  xRand = random(mouseX - 20, mouseX+20);
  yRand = random(mouseY - 20, mouseY+20);
  
  fill((xRand - yRand)%255, (xRand/2)%255, (yRand/2)%255);
  circle(xRand, yRand, random(50));
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}