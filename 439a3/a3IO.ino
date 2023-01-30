/*
    File: a3IO.ino
    Author: Max Coppock
      with some help from the Calibration example:
      https://www.arduino.cc/en/Tutorial/BuiltInExamples/Calibration
*/

//include servo library so we can do things with the servo motor
#include <Servo.h>

//define voltage divider sensor pin
const int sensorPin = A0;
//define pin for night light LED (green)
const int nightLED = 5;
//define pin for LED showing active calibration (red)
const int calibratingLED = 6;

//value of sensor pin
int sensorValue = 0;
//variable to hold minimum value during calibration period
// set to 1023 first because this is the max value we can read, so anything
// lower will set a new minimum
int sensorMin = 1023;
//variable to hold maximum value during calibration
// set to minimum value of 0 first so any value will set a new max
int sensorMax = 0;

//servo object for the motor
Servo myServo;

void setup() {
  // put your setup code here, to run once:
  //set LED pins to output
  pinMode(nightLED, OUTPUT);
  pinMode(calibratingLED, OUTPUT);
  //attach the servo to the servo object in code
  myServo.attach(9);
  
  //start serial monitor w 9600 baud rate
  Serial.begin(9600);

  //CALIBRATION CODE
  //turn on calibrating LED to show calibration in progress
  digitalWrite(calibratingLED, HIGH);

  //spend the first 5 seconds in this loop to calibrate
  while (millis() < 5000) {
    //save the sensorPin's input to sensorValue
    sensorValue = analogRead(sensorPin);

    // if there's a new maximum sensor value
    if (sensorValue > sensorMax) {
      //save it to sensorMax
      sensorMax = sensorValue;
    }

    // if there's a new minimum value
    if (sensorValue < sensorMin) {
      //save it to sensorMin
      sensorMin = sensorValue;
    }
  }

  //turn calibration indicator LED off
  digitalWrite(calibratingLED, LOW);

  //CALIBRATION DONE
  
  //print out the minimum and maximum values during the calibration
  Serial.println("=== Calibrated Sensor Range ===");
  Serial.print("Low: ");
  Serial.print(sensorMin);
  Serial.print("   High: ");
  Serial.println(sensorMax);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  //save the sensor input to val variable
  int val = analogRead(A0);
  //print out the saved sensor input
  Serial.println(val);

  //constrain val to be within the calibrated range
  val = constrain(val, sensorMin, sensorMax);
  //map val to be used for an analogWrite to an LED
  //at 220/255 brightness in low light, off in high light
  int valLED = map(val, sensorMin, sensorMax, 220, 0);
  //map val to be used for an analogWrite to the servo
  //at 0 degrees in low light, 180 in high light
  int valServo = map(val, sensorMin, sensorMax, 0, 180);

  //write the LED value to the night light LED
  analogWrite(nightLED, valLED);
  //write the servo value to the servo
  myServo.write(valServo);

}
