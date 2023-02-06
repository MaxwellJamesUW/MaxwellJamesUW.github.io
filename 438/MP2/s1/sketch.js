// Create a new canvas to the browser size
function setup () {
    createCanvas(windowWidth, windowHeight);
  }
  
  // On window resize, update the canvas size
  function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  // Render loop that draws shapes with p5
  function draw(){
    // Set the default blend mode
    blendMode(BLEND);
    
    // White background
    background(0,40,120);
    
    // Set foreground as black
    fill(255);
    
    // Set x-or / difference blend mode
    blendMode(DIFFERENCE);
    
    // Disable stroke
    noStroke();
    
      // Center of screen
    const midx = width / 2;
    const midy = height / 2;
    
    rotate(-.2);
    for(let i=0; i<width; i+=50){
      for(let j=0; j<height; j+=60){
        if(i%150 == 0){
          rect(i, j, 50, 30);
        } else {
        ellipse(j, height-j, 80, 130);
        }
      }
      translate(30,60);
    }
    for(let i=0; i<width/2
        ; i+=50){
      for(let j=0; j<height; j+=60){
        ellipse(j, height-j, 80, 130);
      }
      translate(30,60);
    }
    
  }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
  }