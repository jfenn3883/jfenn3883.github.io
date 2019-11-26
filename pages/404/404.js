// manages the 404 page

function setup() {
  let canvas404 = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colors.black);
  textSize(60);
  fill(colors.white);
  textAlign(CENTER, CENTER);
  text("404", windowWidth / 2, windowHeight / 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
