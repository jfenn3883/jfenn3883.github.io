
// a website using p5 to track students during emergancies.

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
}

function draw() {
  background(settings.background_color);
  let thermo = createDiv(<a><img border="0" src="http://www.coolfundraisingideas.net/thermometer/thermometer.php?currency=none&goal=600&raised=12&color=red&size=large"></a>)
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
