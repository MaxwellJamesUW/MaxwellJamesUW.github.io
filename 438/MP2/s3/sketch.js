let down = true;
let right = true;
let x, y;

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  x = random(windowWidth);
  y = random(windowHeight);
   
}
// Render loop that draws shapes with p5
function draw(){
  // Set the default blend mode
  stroke(random(255));
  strokeWeight(3);
  fill(40);
  rect(x, y,random(50,80),random(50,80));
  if(down){
    y += random(15);
  } else{
    y -= 15;
  }
  if(right){
    x += random(30);
  } else {
    x -= 15;
  }
  
  if(x>windowWidth){
    x -= 10;
    right = false;
  }
  if(x<0){
    x += 10;
    right = true;
  }
  if(y > windowHeight){
    y -= 10;
    down = false;
  }
  if(y < 0){
    y += 10;
    down = true;
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    background(40);

}
