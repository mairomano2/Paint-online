//FUNCIONES GENERALES
//cambiar de on a off dibujar y fondo
function cambiarStatus(){
  onDibujar = !onDibujar;
  onFondo = !onFondo;
  console.log(` ${onDibujar} ${onFondo}`)
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

//funciones para seleccionar el color del pincel o del fondo

seleccionarColor("#blanco", colores.blanco);
seleccionarColor("#grisClaro", colores.grisClaro);
seleccionarColor("#grisMedio", colores.grisMedio);
seleccionarColor("#grisOscuro", colores.grisOscuro);
seleccionarColor("#negro", colores.negro);
seleccionarColor("#rojo", colores.rojo);
seleccionarColor("#rosa", colores.rosa);
seleccionarColor("#naranja", colores.naranja);
seleccionarColor("#amarillo", colores.amarillo);
seleccionarColor("#verdeClaro", colores.verdeClaro);
seleccionarColor("#verdeOscuro", colores.verdeOscuro);
seleccionarColor("#celeste", colores.celeste);
seleccionarColor("#azul", colores.azul);
seleccionarColor("#violeta", colores.violeta);

function seleccionarColor(id, color){
  document.querySelector(id).addEventListener("click", function(){
    if (onDibujar == true){
      colorPincel = color
    }else if (onFondo == true){
      onFondo = color
    };
  });
};