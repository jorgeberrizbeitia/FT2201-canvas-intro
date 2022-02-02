
console.log("YAY! vamos a dibujar");

let canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightgray";

let ctx = canvas.getContext("2d"); // el pincel



// metodos y propiedades de FILL


ctx.fillStyle = "green"; // da color a mis dibujos de tipo fill

// syntax
// ctx.fillRect( posicionX, posicionY, width, heigth )

ctx.fillRect( 50, 50, 100, 50 ); // dibuja el rectangulo
ctx.fillRect( 200, 50, 100, 50 );

ctx.fillStyle = "red";
// ctx.fillRect( canvas.width / 2,  canvas.height / 2, 80, 80 );
ctx.fillRect( 50, 100, 80, 80 );

ctx.fillStyle = "blue";
ctx.fillRect( 90, 160, 80, 80 );

// para borrar
ctx.clearRect( 100, 200, 100, 100 )



// strokes metodos y propiedades

ctx.strokeStyle = "blue";
ctx.strokeRect( 50, 300, 100, 100 );

ctx.strokeStyle = "red";
ctx.strokeRect( 50, 300, 150, 150 );


// para trazar las lineas

ctx.beginPath() // inicia el trazado
ctx.strokeStyle = "orange"; // color del trazado
ctx.lineWidth = 12; // width del trazado

ctx.moveTo(50, 500) // el cursor empieza aqui
ctx.lineTo(180, 550) // dibuja hasta aqui
ctx.lineTo(100, 540)
ctx.lineTo(100, 640)
ctx.lineTo(60, 540)

ctx.stroke(); // dibuja la linea basada en las posiciones anteriores
ctx.closePath(); // cierra el trazado



// arc metodos y propiedades

// syntax
// ctx.arc( x, y, radio, anguloInicial, anguloFinal, anticlockwise )

ctx.beginPath()
ctx.strokeStyle = "magenta"
ctx.arc( 400, 100, 80, 0, 1.5 * Math.PI, true )
ctx.arc( 400, 100, 80, 0, 1.5 * Math.PI, false )

ctx.fill() // cierra el trazado y lo rellena

ctx.stroke()
ctx.closePath()


// metodos para texto

ctx.fillStyle = "purple"; // textos usan fillStyle para su color
ctx.font = "100px serif";
ctx.fillText( "HOLA", 300, 300 )

// syntax
// ctx.fillText( texto, posX, posY )



// imagenes en canvas

let img = new Image()
img.src = "https://tinyurl.com/ironhack-pokemons/39.svg"

let img2 = new Image()
img2.src = "https://tinyurl.com/ironhack-pokemons/133.svg"

// para evitar bugs
img.addEventListener("load", () => {
  ctx.drawImage(img, 300, 360) // si los omitimos dibuja en tamaño original
})

img2.addEventListener("load", () => {
  ctx.drawImage(img2, 400, 360, 80, 100)
})





// 

let controlVar = 0;

let printSomething = () => {

  console.log("WOOOOOO")

  controlVar++

  if( controlVar < 100) {
    printSomething()
  }

}

printSomething()



// efecto de recursion para crear animaciones en canvas

let boxPositionX = 50
let boxPositionY = 720

let controlBoxAnim = 0;

let boxAnimation = () => {

  // acciones
  // 1. pantalla de borra
  ctx.clearRect(0, 0, 600, 800)

  // 2. elementos de mueven
  boxPositionX += 3
  boxPositionY--

  // 3. elementos de dibujan
  ctx.fillRect(boxPositionX, boxPositionY, 50, 50)
  
  
  
  // 4. todo de nuevo
  controlBoxAnim++
  if (boxPositionX < 300) {
    // boxAnimation()
    // requestAnimationFrame se utiliza para animaciones
    requestAnimationFrame(boxAnimation) 
  }

}

boxAnimation()