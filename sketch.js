function setup() {
    createCanvas(400, 400);
  background("blue")
  }
  function draw() {
  stroke("purple");
    fill("red");
  if(mouseIsPressed)
  rect(mouseX,mouseY,15,23);
  }