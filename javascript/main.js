//VARIABLES GENERALES
//color del fondo
let colorFondo = 255;

//color del pincel
colorPincel = {
  r: 0,
  g: 0,
  b: 0
};

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
    //funciones del draw
    // cambiarColorCanvas();
  borrarDibujo();
  limpiarCanvas();

  //color y tamaño del pincel por defecto
  if(onDibujar == true && mouseIsPressed && mouseX >= 0 && mouseX < 600 && mouseY >= 0 && mouseY <= 400){
    fill(colorPincel.r, colorPincel.g, colorPincel.b);
    noStroke();
    ellipse(mouseX, mouseY, tamanoPincel, tamanoPincel);
  };
};

//FUNCIONES GENERALES
//cambiar de on a off dibujar y fondo
function cambiarStatus(){
  onDibujar = !onDibujar;
  onFondo = !onFondo;
};

//cambiar el color del pincel a un color random
let colorRandom = document.querySelector("#colorRandom");
colorRandom.addEventListener("click", function(){
  colorPincel.r = random(255);
  colorPincel.g = random(255);
  colorPincel.b = random (255);
});

//borrar parte del dibujo 
function borrarDibujo(){
  document.querySelector("#borrar").addEventListener("click", function(){
    erase(colorFondo);
  });
};
  
//limpiar el canvas
function limpiarCanvas(){
  document.querySelector("#limpiarCanvas").addEventListener("click", function(){
    clear();
    colorFondo = 255;
  });
};