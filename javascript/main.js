let colorFondo = colores.blanco;

//CAMBIAR DE COLOR EL FONDO

document.querySelector("#negro").addEventListener("click", function(){
  return colorFondo = colores.negro;
});

document.querySelector("#blanco").addEventListener("click", function(){
  return colorFondo = colores.blanco;
});

document.querySelector("#grisClaro").addEventListener("click", function(){
  return colorFondo = colores.grisClaro;
});

document.querySelector("#grisMedio").addEventListener("click", function(){
  return colorFondo = colores.grisMedio;
});

document.querySelector("#grisOscuro").addEventListener("click", function(){
  return colorFondo = colores.grisOscuro;
});

document.querySelector("#rojo").addEventListener("click", function(){
  return colorFondo = colores.rojo ;
});

document.querySelector("#rosa").addEventListener("click", function(){
  return colorFondo = colores.rosa ;
});

document.querySelector("#naranja").addEventListener("click", function(){
  return colorFondo = colores.naranja ;
});

document.querySelector("#amarillo").addEventListener("click", function(){
  return colorFondo = colores.amarillo ;
});

document.querySelector("#verdeClaro").addEventListener("click", function(){
  return colorFondo = colores.verdeClaro ;
});

document.querySelector("#verdeOscuro").addEventListener("click", function(){
  return colorFondo = colores.verdeOscuro ;
});

document.querySelector("#celeste").addEventListener("click", function(){
  return colorFondo = colores.celeste ;
});

document.querySelector("#azul").addEventListener("click", function(){
  return colorFondo = colores.azul ;
});

document.querySelector("#violeta").addEventListener("click", function(){
  return colorFondo = colores.violeta ;
});

let slider;

function setup() {
  slider = createSlider(100, 1000, 100);
  slider.position(10, 100);
  createCanvas(400, 400);
}

function draw() {
  let val = slider.value();
  resizeCanvas(val, val)
  background(colorFondo);
  if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
