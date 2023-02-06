let ahnold, finale, agoo;
function preload(){
  ahnold = loadSound('arnold-noises.mp3');
  finale = loadSound('absolutely.mp3');
  agoo = loadSound('aagghoo-3.mp3');
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(40);
  
  ahnold.play();
  ahnold.onended(doFinale);
}
// Render loop that draws shapes with p5
function draw(){
  for(let i = 20; i < windowWidth; i+= 50){
    for(let j = 20; j < windowWidth; j+= 50){
      fill(i-mouseX, j-mouseY, j-i);
      square(i, j, i-j);
    }
  }
  
}

function doFinale(){
  finale.play();
}
function mousePressed(){
  agoo.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
