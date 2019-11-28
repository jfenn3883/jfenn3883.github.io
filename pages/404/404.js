// manages the 404 page
let canvas404
let back_button // creates the back back_button

function setup() {
  canvas404 = createCanvas(windowWidth, windowHeight); // creates a canvas

  back_button = new Clickable(); // ensure changes to these are replicated in windowResized
  back_button.locate(windowWidth / 2, 250 + windowHeight / 5); // puts the button in the right place
  back_button.resize(2 * windowWidth / 6, windowHeight / 10); // makes the button the right size
  back_button.cornerRadius = 2; // the radius of the corner
  back_button.text = "Go Back"; // sets the text

  // this function is ran when the clickable is hovered but not pressed.
  back_button.onHover = function() {
    this.color = colors.offwhite;
    this.textColor = colors.offblack;
  }

  // this function is ran when the clickable is not hovered
  back_button.onOutside = function() {
    back_button.color = colors.offwhite; // color of the button
    back_button.textColor = colors.offblack; // sets the text color
  }

  // this function is run when the button is released
  back_button.onRelease = function() {
    
  }
}

function draw() {
  background(settings.background_color); // changes the background color to what is set in assets/info/settings.js (defaults to offblack)

  textFont(settings.font_, 100); // sets font to what is in assets/info/settings.js (defaults) to white and text size to 100
  fill(settings.text_color); // sets background color to what is in assets/info/settings.js (defaults) to white
  textAlign(CENTER, CENTER); // sets the alignment of the texbox
  text("404", windowWidth / 2, 1 + windowHeight / 5); // places the "404" text in the center horizontally, and a custom aliment vertically

  textFont(settings.font_, 24)
  fill(settings.text_color);
  textAlign(CENTER, CENTER);
  text("sowwy, we couwd not find the wequested wink", windowWidth / 2, 180 + windowHeight / 5);

  back_button.draw();
}

function windowResized() { // a function that resizes the canvas if it changes size
  resizeCanvas(windowWidth, windowHeight);

  // puts the button back in the right place if it is resized
  back_button.locate(windowWidth / 2, 250 + windowHeight / 5);
  back_button.resize(2 * windowWidth / 6, windowHeight / 10);
}
