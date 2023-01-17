/*
  Blink3

  Turns 3 LEDs on and off across a few seconds.

  Started with example: Blink
  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  modified 16 Jan 2023
  by Max Coppock
*/

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pins 2, 4, and 6 as outputs.
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  //set pin 2 to power, turning on its LED (red)
  digitalWrite(2, HIGH);
  //wait .2s
  delay(200);
  //set pin 4 to power, turning on its LED (blue)
  digitalWrite(4, HIGH);
  //wait .2s
  delay(200);
  //set pin 2 to ground, turning off its LED (red)
  digitalWrite(2, LOW);
  //wait .3s
  delay(300);
  //set pin 6 to power, turning on its LED (yellow)
  digitalWrite(6, HIGH);
  //wait .1s
  delay(100);
  //set pin 4 to ground, turning off its LED (blue)
  digitalWrite(4, LOW);
  //wait .5s
  delay(500);
  //set pin 2 to power, turning on its LED (red)
  digitalWrite(2, HIGH);
  //set pin 4 to power, turning on its LED (blue)
  digitalWrite(4, HIGH);
  //wait .4s
  delay(400);
  //set pin 2 to ground, turning off its LED (red)
  digitalWrite(2, LOW);
  //wait .4s
  delay(400);
  //set pin 6 to ground, turning off its LED (yellow)
  digitalWrite(6, LOW);
  //wait .3s
  delay(300);

}
