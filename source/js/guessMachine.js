const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")
const message = document.querySelector("#message")

numberGuess.focus()
let numbersAttemps = []


function checkOk(num) {
  let count = 0
  // retorna la cantidad de correctos que hay
  let numToArray = num.toString().split("")
  let randomToArray = randomDigit.split("")
  for (i = 0; i < digitLimit; i++) {
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

function checkIndex(num) {
  // retorna la cantidad de numeros en posición correcta
  let count = 0
  let numToString = num.toString()
  let randomToString = randomDigit
  for (i = 0; i < digitLimit; i++) {
    if (numToString[i] == randomToString[i]) {
      count++
    }
  }
  return count
}

numberGuess.addEventListener("keypress", guess)
const progressBar = document.querySelector("#progressBar")

function templateRow(attemps) {
  let row = `
  <div id="row${attemps}" class="row bg-white opacity rowAnimation text-center">
    <div id="colNum${attemps}" class="col-6 border"></div>
    <div id="colOk${attemps}" class="col-3 border"></div>
    <div id="colPos${attemps}" class="col-3 border"></div>
  </div>
  `
  return row
}

function guess(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps = attemps > 0;
  let num = e.target.value;
  if(numbersAttemps.includes(num)){
    message.innerHTML = "Ya ingresó esa combinación"
    message.classList.add("p-2")
    setTimeout(() => {
      message.innerHTML = ""
      message.classList.remove("p-2")
      numberGuess.value = ""
    }, 3000);
  }
  if (enterKey && inputLength == digitLimit && zeroAttemps && !numbersAttemps.includes(num)) {
    rows.innerHTML += templateRow(attemps)
    document.querySelector(`#colNum${attemps}`).innerText = num
    document.querySelector(`#colOk${attemps}`).innerText = checkOk(num)
    document.querySelector(`#colPos${attemps}`).innerText = checkIndex(num)
    let currentAttemps = attemps
    setTimeout(() => {
      var tempRow = document.querySelector(`#row${currentAttemps}`)
      tempRow.classList.remove("opacity")
      tempRow.classList.add("appear")
      spanAttemps.classList.add("opacity")
      setTimeout(() => {
        tempRow.classList.remove("appear")
        spanAttemps.classList.remove("opacity")
        spanAttemps.classList.add("appear")
      }, 200);
    }, 200);
    numbersAttemps.push(num)
    attemps--
    spanAttemps.innerText = attemps
    progressBar.value = attemps
    displayMessage(num)
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
