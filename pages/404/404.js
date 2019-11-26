// manages the 404 page

function setup() {
  let canvas404 = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(colors.black);
   
  textSize(100); // 404 text
  fill(colors.white);
  textAlign(CENTER, CENTER);
  text("404", windowWidth / 2, windowHeight / 5);
  
  textSize(48);
  fill(colors.white);
  textAlign(CENTER, CENTER);
  text("sowwy, we couwd not find the wequested wink", windowWidth / 2, 2 * windowHeight / 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
