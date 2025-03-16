let robotoMedium, robotoBold;

function preload() {
  // Load the font file
  robotoMedium = loadFont('Roboto-Medium.ttf');
  robotoBold = loadFont('Roboto-Bold.ttf');
}

function setup() {
  createCanvas(852, 393); // Scale up the canvas size by 3x
}

function draw() {
  background("#0062FF"); // Background color
  fill(255); // Set white text color
  noStroke(); // Make it so there's no stroke on the text
  textAlign(CENTER, TOP); // Center-align the top text

  // Draw the "Rad!" text
  textFont(robotoBold);
  textSize(16); // Scale font size by 3x
  text("RAD!", width / 2, 118); // Scale position by 3x

  // Draw the "XXX, it's time to pass the yap" text
  textSize(34); // Scale font size by 3x
  text("Matt Lau,", width / 2, 157); // Scale position by 3x
  text("it's time to Pass the Yap...", width / 2, 197); // Scale position by 3x

  // Draw the input text or timer
  textFont(robotoMedium);
  textSize(16); // Scale font size by 3x
  text("Push the button to continue - OR, timer?", width / 2, 260); // Scale position by 3x
}