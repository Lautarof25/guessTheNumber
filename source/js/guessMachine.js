const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")
const progressBar = document.querySelector("#progressBar")
let numbersAttemps = []
numberGuess.focus()

numberGuess.addEventListener("keypress", guess)

function guess(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps = attemps > 0;
  let num = e.target.value;
  if (numbersAttemps.includes(num)) {
    messageNumberRepeat()
  }
  if (enterKey && inputLength == digitLimit && zeroAttemps && !numbersAttemps.includes(num)) {
    templateRow(attemps, num, checkOk(num), checkIndex(num))
    addNumber.play()
    numbersAttemps.push(num)
    attemps--
    spanAttemps.innerText = attemps > 1 ? ` quedan ${attemps} intentos` : ` queda ${attemps} intento`
    progressBar.value = attemps
    displayFinalMessage(num)
    numberGuess.value = ""
    character(num)
  }
}

  // Refactorizar
  // Agregar pistas con acertijos
  // Agregar pista cuando hay un numero repetido
  // Agregar un comentario cuando se está próximo a resolverlo (3 ok y +2 en pos)
  // Agregar filtros para jugar de manera infinita (después de ganar un juego)
  // Agregar modal