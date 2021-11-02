//VARIABLES GENERALES
//color del fondo
let colorFondo = 255;

//color del pincel
colorPincel = colores.negro;

//cambio de true a false para usar los divs de colores para el fondo y el pincel
let onDibujar = true;
let onFondo = false;
const dibujar = document.querySelector("#dibujar");
const fondo = document.querySelector("#fondo");
dibujar.addEventListener("click", cambiarStatus);
fondo.addEventListener("click", cambiarStatus);

// SET UP P5.JS
function setup() {
  //tamano y color del canvas por default
  let canvas = createCanvas(600, 400);
  background(colorFondo);

  //funcion para dibujar un circulo random
  document.querySelector("#circuloRandom").addEventListener("click", () => {
    var valores = '0123456789ABCDEF';
    var colorGenerado = '#';
    for (var i = 0; i < 6; i++) {
      colorGenerado += valores[Math.floor(Math.random() * 16)];
    }
    noStroke()
    fill(colorGenerado)
    ellipse(random(400), random(400), random(400), random(400))
  })

  document.querySelector("#rectanguloRandom").addEventListener("click", () => {
    var valores = '0123456789ABCDEF';
    var colorGenerado = '#';
    for (var i = 0; i < 6; i++) {
      colorGenerado += valores[Math.floor(Math.random() * 16)];
    }
    noStroke()
    fill(colorGenerado)
    rect(random(400), random(400), random(400), random(400))
  })
};

//DRAW P5.JS
function draw() {
  //tamaño del pincel
  let tamanoPincel = document.querySelector("#sliderPincel").value;
  
  //color y tamaño del pincel por defecto
  if(onDibujar == true && mouseIsPressed && mouseX >= 0 && mouseX < 600 && mouseY >= 0 && mouseY <= 400){
    fill(colorPincel);
    noStroke();
    ellipse(mouseX, mouseY, tamanoPincel, tamanoPincel);
  };
  
  borrarDibujo();
  limpiarCanvas();
  // cambiarTamano();
};


