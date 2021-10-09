let colorFondo = 0;
let onDibujar = true;
let onFondo = false;
let dibujar = document.querySelector("#dibujar");
let fondo = document.querySelector("#fondo");

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