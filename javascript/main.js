//VARIABLES GENERALES
//color del fondo
let colorFondo = 255;

//color del pincel
colorPincel = {
  r: 0,
  g: 0,
  b: 0
};

//tamaño del pincel
let tamanoPincel = 10;

// SET UP P5.JS
function setup() {
  //slider para el tamaño del canvas
  sliderX = createSlider(100, 800, 100);
  sliderX.position(250, 30)
  sliderY = createSlider(100, 800, 100);
  sliderY.position(400, 30);

  //slider del tamano del pincel
  sliderPincel = createSlider (10, 400, 10);
  sliderPincel.position(550, 30);

  //tamano y color del canvas por default
  let canvas = createCanvas(400, 400);
  canvas.position(50, 150)
  background(0);
}

//DRAW P5.JS
function draw() {
  //slider para modificar el tamaño del canvas
  let valX = sliderX.value();
  let valY = sliderY.value()
  resizeCanvas(valX, valY);

  //color y tamaño del pincel por defecto
  fill(colorPincel.r, colorPincel.g, colorPincel.b);
  noStroke();
  ellipse(mouseX, mouseY, tamanoPincel, tamanoPincel);
  cambiarTamanoPincel();

  
  // cambiarColorCanvas();
  limpiarCanvas();
}

//FUNCIONES GENERALES
//cambiar el tamano del pincel
function cambiarTamanoPincel(){
  tamanoPincel = sliderPincel.value();
};

//cambiar el color del canvas
let rosa = document.querySelector("#rosa");
rosa.addEventListener("click", function cambiarColorCanvas(){
  colorFondo = colores.rosa;
});

function cambiarColorCanvas(){
  document.querySelector("#rosa").addEventListener("click", function(){
    colorFondo = colores.rosa ;
  });
};

//cambiar el color del pincel a un color random
let colorRandom = document.querySelector("#colorRandom");
colorRandom.addEventListener("click", function(){
  colorPincel.r = random(255);
  colorPincel.g = random(255);
  colorPincel.b = random (255);
});
  
//limpiar el canvas
function limpiarCanvas(){
  document.querySelector("#limpiarCanvas").addEventListener("click", function(){
    clear();
    colorFondo = 255;
  });
};