// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  background(20);
  
   for(let w = 20; w < windowWidth; w += 40){
    for(let h = 20; h < windowHeight; h += 40){
      currColor = color(random(40,100),random(30,250),random(155));
      fill(currColor);
      circle(w,h,60);
    }
  }
}

// Render loop that draws shapes with p5
function draw(){
  // Set the default blend mode
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}