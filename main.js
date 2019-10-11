
// a website using p5 to track students during emergancies.

new p5();

settings_button = new Clickable();
settings_button.color = colors.white;
settings_button.textColor = colors.black;
settings_button.locate(200, 200);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(settings.background_color);
  settings_button.draw();
}

settings_button.onOutside = function() {
  settings_button.text = "Click Me OwO"
}

settings_button.onHover = function() {
  settings_button.text = "Please Yes Daddy";
}

settings_button.onPress = function() {
  settings_button.text = "Uhhhhhhh yeah";
}

settings_button.onRelease = function() {
  settings_button.text = "harder daddy";
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
