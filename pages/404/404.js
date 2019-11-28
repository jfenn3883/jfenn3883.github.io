// manages the 404 page

function setup() {
  let canvas404 = createCanvas(windowWidth, windowHeight); // creates a canvas
}

function draw() {
  background(settings.background_color); // changes the background color to what is set in assets/info/settings.js (defaults to offblack)

  textFont(settings.font_, 100); // sets font to what is in assets/info/settings.js (defaults) to white and text size to 100
  fill(settings.text_color); // sets background color to what is in assets/info/settings.js (defaults) to white
  textAlign(CENTER, CENTER); // sets the alignment of the texbox
  text("404", windowWidth / 2, 150 + windowHeight / 5); // places the "404" text in the center of the page horizontally, and a custom aliment vertically

  textFont(settings.font_, 24)
  fill(settings.text_color);
  textAlign(CENTER, CENTER);
  text("sowwy, we couwd not find the wequested wink", windowWidth / 2, 230 + windowHeight / 5);
}

function windowResized() { // a function that resizes the canvas if it changes size
  resizeCanvas(windowWidth, windowHeight);
}
