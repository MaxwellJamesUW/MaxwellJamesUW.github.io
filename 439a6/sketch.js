//variable to store serialport library
var serial;
//my port name is COM8
var portName = 'COM8';
//array to store data coming in over serial
var dataarray = [];


function setup() {
  //new instance of serialport library saved to serial
  serial = new p5.SerialPort();
  //define callback functions for the following events:
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  //list the serial port options
  serial.list();
  //open the port with the Arduino on it
  serial.open(portName);
  //create a p5js canvas on the page
  createCanvas(1200, 800);
  //set white background
  background(255);
}

//The callback functions here are class code, helpful to track what's going on with the serial line
 
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
   print(i + " " + portList[i]);
 }
}

//console feedback: connected
function serverConnected() {
  print('connected to server.');
}
 
//console feedback: port opened
function portOpen() {
  print('the serial port opened.')
}
 
//console feedback: error
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
 
//console feedback: port closed
function portClose() {
  print('The serial port closed.');
}

//new data has come in over serial
function serialEvent() {
  //if serial is available
  if (serial.available()) {
    //read in the line from the Arduino
    var datastring = serial.readLine();
    //variable for the json parsed datastring
    var newarray; 
    //try to parse the input, don't crash the program if we can't
    try {
      //parse datastring as JSON, save to newarray
      newarray = JSON.parse(datastring);
      //if it's an object like it should be
      if (typeof newarray == 'object') {
        //assign it to the global dataarray variable
        dataarray = newarray;
      }
      //if we couldn't parse that input
      } catch(err) {
      // :(
      // but it doesn't crash
    }
  } 
}

function draw() {
  //clear the text from previous frames
  clear();
  //center text
  textAlign(CENTER);
  //size 40 font
  textSize(40);
  //variables for a red and a green value
  let red, green;
  //map the dataArray input from the joystickX to red
  //turn the range from analogRead 0-1023 to analogWrite 0-255
  red = map(dataarray[0], 0, 1023, 0, 255);
  //map the dataArray input from joystickY to green
  green = map(dataarray[1], 0, 1023, 0, 255);
  //set our text color to use the red and green variables
  fill(red, green, 50);
  
  //write the text to the window
  text(dataarray, windowWidth/2, windowHeight/2);
  
}

//when any key is pressed
function keyPressed(){
  //log the key so I know this event fires
  console.log("writing key: " + key);
  //send the ascii value of that key back over the serial
  serial.write(key);

}
