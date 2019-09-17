
// a website using p5 to track students during emergancies.

new p5();

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(settings.background_color);
}

function setTextColors() {
  textFont(settings.font_);
  textSize(settings.text_size);
  textAlign(CENTER, CENTER);
  fill(settings.text_color);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
