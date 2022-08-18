//FUNCIONES GENERALES
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
seleccionarColor("#marron", colores.marron);

function seleccionarColor(id, color){
  document.querySelector(id).addEventListener("click", () => {
    if (onDibujar == true){
      colorPincel = color
    }else if (onFondo == true){
    };
  });
};

//cambiar el color del pincel a un color random
let colorRandom = document.querySelector("#colorRandom");
colorRandom.addEventListener("click", function(){
    var valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "F"];
    var colorGenerado = '#';
    for (var i = 0; i < 6; i++) {
      colorPincel =colorGenerado += random(valores);
    } 
});

//borrar parte del dibujo 
function borrarDibujo(){
  document.querySelector("#borrar").addEventListener("click", () => {
    colorPincel = colorFondo;
  });
};
  
//limpiar el canvas
function limpiarCanvas(){
  document.querySelector("#limpiarCanvas").addEventListener("click", () =>{
    clear();
    background(255)
  });
};

//guardar el dibujo
document.querySelector("#descargar").addEventListener("click", () => {
  saveCanvas(canvas, 'myCanvas', 'png');
})