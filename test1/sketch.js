let robotoMedium;

function preload() {
  // Load the font file
  robotoMedium = loadFont('Roboto-Medium.ttf');
}

function setup() {
  createCanvas(852, 393); // Canvas size

  // Set the font for the text
  textFont(robotoMedium);
}

function draw() {
  background("#0062FF"); // Background color

  // Draw the text at the top of the screen with size 24
  fill(255); // Set white text color for the top text
  textSize(24); // Set text size to 24 for the top text
  textAlign(CENTER, TOP); // Center-align the top text
  text("Results", width / 2, 72); // Center the text horizontally
  
  // Draw the text at the bottom of the screen with size 16 - note - not sure how we plan to progress the flow forward from here in terms of having them use an input or just having a timer, but this is here for now
  textSize(16); // Set text size to 16 for the bottom text
  text("Spin the dial to continue", width / 2, 305); // Center the text horizontally

  // Draw the red card with rounded corners
  fill("#FF2C2C");
  stroke(255);
  strokeWeight(2);
  rect(388, 121, 483, 70, 20);
  
  // Draw the purple card with rounded corners
  fill("#9267FF");
  rect(388, 202, 483, 70, 20);
  
  // Pie graph (currently just a circle stand-in to represent dimensions + placement)
  circle(256, 196, 206); // placement and size
  
  // Draw the text on the red card with size 16
  fill(255); // Set white text color for the card text
  noStroke(); // Make it so there's no stroke on the text
  textAlign(LEFT, TOP);
  text("Have the ability to read your", 412, 138); // First line
  text("coworker's minds", 412, 158); // Second line with a manual line break
  
  // Draw the text on the purple card with size 16
  text("Have the power to make your boss", 412, 218); // First line
  text("agree with all your ideas", 412, 238); // Second line with a manual line break

}