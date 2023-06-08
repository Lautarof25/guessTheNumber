const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")

numberGuess.focus()

function comprobarCorrectos(num) {
  let count = 0
  // retorna la cantidad de correctos que hay
  let numToArray = num.toString().split("")
  let randomToArray = randomDigit.split("")
  for (i = 0; i < 4; i++) {
    const index = randomToArray.indexOf(numToArray[i]);
    if (randomToArray.includes(numToArray[i])) {
      randomToArray.splice(index, 1);
      numToArray.shift(numToArray[i])
      i--
      count++
    }
  }
  return count
}

function comprobarPosicion(num) {
  // retorna la cantidad de numeros en posición correcta
  let count = 0
  let numToString = num.toString()
  let randomToString = randomDigit
  for (i = 0; i < 4; i++) {
    if (numToString[i] == randomToString[i]) {
      count++
    }
  }
  return count
}

let attempsLeft = 10
let attemps = attempsLeft
let spanAttemps = document.querySelector("#spanAttemps")
spanAttemps.innerText = attemps

numberGuess.addEventListener("keypress",guess)

function guess(e){
  if (e.key === 'Enter' && e.target.value.length == 4 && attemps > 0) {
    let num = e.target.value;
    const row =
      `
    <div id="row${attemps}" class="row bg-white rowAnimation text-center">
      <div id="colNum${attemps}" class="col-6 border"></div>
      <div id="colOk${attemps}" class="col-3 border"></div>
      <div id="colPos${attemps}" class="col-3 border"></div>
    </div>
    
    ` 
    rows.innerHTML += row
    document.querySelector(`#colNum${attemps}`).innerText = num
    document.querySelector(`#colOk${attemps}`).innerText = comprobarCorrectos(num)
    document.querySelector(`#colPos${attemps}`).innerText = comprobarPosicion(num)
    attemps--
    
    displayMessage(num)
    numberGuess.value = ""
  }
  spanAttemps.innerText = attemps
}

  // Refactorizar
  // Agregar efectos al ganar o perder
  // Agregar pistas con acertijos
  // Agregar pista cuando hay un numero repetido
  // Agregar un comentario cuando se está próximo a resolverlo (3 ok y +2 en pos)
  // Agregar filtros para jugar de manera infinita (después de ganar un juego)
  // Agregar modal


  const five = "Los tienes en las manos y los tienes en los pies, y en seguida sabrás qué número es."

  const eight = "Hay un número que muy valiente se creía, pero al quitarle su cinturón todo su valor perdía."

  const one = "Cuando te pones a contar por mí tienes que empezar."