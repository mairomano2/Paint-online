let colorFondo = 255;
let colorPincel = 0;

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(colorFondo);
  fill(colorPincel);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
  seleccionar("#red", 125)
};

function seleccionar(id, color){
  document.querySelector(id).addEventListener("click", function(){
    colorPincel = color
    console.log(colorPincel)
  })
}