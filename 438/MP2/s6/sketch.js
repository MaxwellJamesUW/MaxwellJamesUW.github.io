let down = false;
let right = true;
let x, y;
let boxSpeed = 15;

var sounds = [];
var clickSounds = [];
function preload(){
  agoo1 = loadSound('agoo1.mp3');
  agoo2 = loadSound('agoo2.mp3');
  hey = loadSound('hey.mp3');
  huh = loadSound('huh.mp3');
  no2 = loadSound('no-2.mp3');
  cough = loadSound('cough.mp3');
  me = loadSound('me.mp3');
  yum = loadSound('yummy.mp3');
  whynot = loadSound('why-not.mp3');
  yes = loadSound('yes.mp3');
  sounds.push(agoo1,agoo2,hey,huh,yum,cough,me,whynot,yes);
  
  aust = loadSound('australia.mp3');
  dino = loadSound('dinosaurs.mp3');
  good = loadSound('good.mp3');
  goon = loadSound('go-on.mp3');
  so = loadSound('so.mp3');
  hi = loadSound('hi.mp3');
  sure = loadSound('sure.mp3');
  you = loadSound('you.mp3');
  sounds.push(aust,dino,good,goon,so,hi,sure,you);
  
  
  why = loadSound('why.mp3');
  enough = loadSound('enough.mp3');
  shutup = loadSound('shut-up.mp3');
  no = loadSound('no.mp3');
  stopit = loadSound('stop-it.mp3');
  scream = loadSound('scream.mp3');
  clickSounds.push(enough,shutup, no, why, stopit, scream);
}

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);
  rectMode(CENTER);
  fill(40);
  strokeWeight(3);
  
  x = random(windowWidth);
  y = random(windowHeight);
  
  sounds.forEach(function (item, index) {
    item.setVolume(0.2);
  });
  clickSounds.forEach(function (item, index) {
    item.setVolume(1.0);
  });
   
}
// Render loop that draws shapes with p5
function draw(){
  // Set the default blend mode
  stroke((mouseX/2 + random(30))%255,(mouseY/2 + random(30))%255,(mouseY-mouseX + random(30))%255);
  rect(x, y,random(50,80),random(50,80));
  if(down){
    y += random(boxSpeed);
  } else{
    y -= random(boxSpeed);
  }
  if(right){
    x += random(boxSpeed);
  } else {
    x -= random(boxSpeed);
  }
  
  let doSound = false;
  
  if(x>windowWidth){
    x -= boxSpeed;
    right = false;
    doSound = true;
  }
  if(x<0){
    x += boxSpeed;
    right = true;
    doSound = true;
  }
  if(y > windowHeight){
    y -= boxSpeed;
    down = false;
    doSound = true;
  }
  if(y < 0){
    y += boxSpeed;
    down = true;
    doSound = true;
  }
  
  if(doSound){
    randSound = floor(random(sounds.length));
    sounds[randSound].play();
  }
  
}

function mousePressed(){
  randSound = floor(random(clickSounds.length));
    clickSounds[randSound].play();
  strokeWeight(7);
  boxSpeed = 5;
}

function mouseReleased(){
  strokeWeight(3);
  boxSpeed = 15;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    background(40);

}