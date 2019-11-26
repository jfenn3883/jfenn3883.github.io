// manages the 404 page

let canvas404; // creating a global canvas

function setup() {
  canvas404 = createCanvas(windowWidth, windowHeight);
}

function draw() {
  canvas404.background(colors.black)
}

function windowResized() {
  canvas404.resizeCanvas(windowWidth, windowHeight);
}
