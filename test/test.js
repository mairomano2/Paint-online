function setup(){
  createCanvas(400, 400)
  background(0)

  document.querySelector("#boton").addEventListener("click", () => {
  var valores = '0123456789ABCDEF';
  var colorGenerado = '#';

  for (var i = 0; i < 6; i++) {
    colorGenerado += valores[Math.floor(Math.random() * 16)];
  }

    fill(colorGenerado)
    ellipse(random(400), random(400), random(200), random(200))
  })
}

function draw(){
}

function dibujar(){

}
