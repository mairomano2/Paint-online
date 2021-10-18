//VARIABLES GENERALES
//color del fondo
let colorFondo = 255;

//color del pincel
colorPincel = colores.negro

//cambio de true a false para usar los divs de colores para el fondo y el pincel
let onDibujar = true;
let onFondo = false;
const dibujar = document.querySelector("#dibujar");
const fondo = document.querySelector("#fondo");
dibujar.addEventListener("click", cambiarStatus);
fondo.addEventListener("click", cambiarStatus);

// SET UP P5.JS
function setup() {
  // //slider del tamano del pincel
  // sliderPincel = createSlider (10, 400, 10);
  // sliderPincel.position(550, 30);

  //tamano y color del canvas por default
  let canvas = createCanvas(600, 400);
  canvas.position(50, 150)
  background(colorFondo);
}

//DRAW P5.JS
function draw() {
  //tamaño del pincel
  let tamanoPincel = document.querySelector("#sliderPincel").value;

  borrarDibujo();
  limpiarCanvas();

  //color y tamaño del pincel por defecto
  if(onDibujar == true && mouseIsPressed && mouseX >= 0 && mouseX < 600 && mouseY >= 0 && mouseY <= 400){
    fill(colorPincel.r, colorPincel.g, colorPincel.b);
    noStroke();
    ellipse(mouseX, mouseY, tamanoPincel, tamanoPincel);
  };
};