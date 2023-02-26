/*
  File: WebTalks.ino
  Author: Max Coppock
      with help from class code examples of Serial.available() and Serial.read()

*/
void setup() {
  //start serial monitoring, crucial step
  Serial.begin(9600);
}

void loop() {
  //x direction read from the joystick
  int readingX = analogRead(A0);
  //y read from the joystick
  int readingY = analogRead(A2);

  //use serial.print to send data to the web page in [x,y] format
  Serial.print("[");
  Serial.print(readingX);
  Serial.print(",");
  Serial.print(readingY);
  //last one has a '\n' to signal the end of a line for serial.readLine()
  //                                            on the web end
  Serial.println("]");
  //sending about 10 joystick updates every second
  delay(100);

  //if the serial line isn't busy
  if (Serial.available()) {
    //read in serial communication, save it as an int to inByte
    int inByte = Serial.read();
    //send it back as binary data to check
 	  Serial.write(inByte);
    //constrain the key command in case its ascii value is outside the range
    //   of analogWrite()
    inByte = constrain(inByte, 0, 255); 

    //user hit the spacebar
    //   32 is ascii value for Space
    if(inByte == 32){
      //turn LED off
      analogWrite(6, 0);
    //user hit another key
    }else {
      //hit b key:  98 = 'b' in ASCII
      if(inByte == 98){
        //turn LED fully on
        analogWrite(6, 255);

      //not space or b key
      } else {
        //set LED brightness with the ASCII value of the key pressed
        analogWrite(6, inByte);
      }
    }
  }
}

