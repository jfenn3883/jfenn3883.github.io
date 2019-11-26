// manages the 404 page

function setup() {
  let canvas404 = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colors.offblack);
  
  textFont(settings.font_, 100);
  fill(colors.white);
  textAlign(CENTER, CENTER);
  text("404 Error", windowWidth / 2, 150 + windowHeight / 5);
  
  textFont(settings.font_, 24)
  fill(colors.white);
  textAlign(CENTER, CENTER);
  text("sowwy, we couwd not find the wequested wink", windowWidth / 2, 200 + windowHeight / 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
