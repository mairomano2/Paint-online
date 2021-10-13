let colorFondo = 0;
let onDibujar = true;
let onFondo = false;
const dibujar = document.querySelector("#dibujar");
const fondo = document.querySelector("#fondo");

dibujar.addEventListener("click", cambiarStatus);
fondo.addEventListener("click", cambiarStatus);

function cambiarStatus(){
  onDibujar = !onDibujar;
  onFondo = !onFondo;
};

function setup() {
  createCanvas(400,400);
  background(colorFondo);
};

function draw(){
  if(onDibujar == true){
      fill(25, 254, 66);
      noStroke();
      ellipse(mouseX, mouseY, 10, 10);
  };
};