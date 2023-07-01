const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")
const message = document.querySelector("#message")
const progressBar = document.querySelector("#progressBar")
let numbersAttemps = []
numberGuess.focus()

numberGuess.addEventListener("keypress", guess)

function guess(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps = attemps > 0;
  let num = e.target.value;
  if(numbersAttemps.includes(num)){
    messageNumberRepeat()
  }
  if (enterKey && inputLength == digitLimit && zeroAttemps && !numbersAttemps.includes(num)) {
    templateRow(attemps,num,checkOk(num),checkIndex(num))
    inserNumber.play()
    numbersAttemps.push(num)
    attemps--
    spanAttemps.innerText = attemps > 1 ? ` quedan ${attemps} intentos` : ` queda ${attemps} intento`
    progressBar.value = attemps
    displayFinalMessage(num)
    numberGuess.value = ""
    character(num)
  }
}

function messageNumberRepeat(){
  // Muestra mensaje de numero repetido
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class","position-absolute opacity top-0 start-50 translate-middle-x p-2")
  const p = document.createElement("p")
  const messageP = document.createTextNode("Ya ingresó esa combinación");
  p.setAttribute("class","bg-warning rounded mt-2 p-2 display-6 text-center")
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  repeat.play()
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.value = ""
  }, 3000);
}

  // Refactorizar
  // Agregar pistas con acertijos
  // Agregar pista cuando hay un numero repetido
  // Agregar un comentario cuando se está próximo a resolverlo (3 ok y +2 en pos)
  // Agregar filtros para jugar de manera infinita (después de ganar un juego)
  // Agregar modal