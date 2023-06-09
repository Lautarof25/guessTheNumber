const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")

numberGuess.focus()

const digitNumber = 4;

function checkOk(num) {
  let count = 0
  // retorna la cantidad de correctos que hay
  let numToArray = num.toString().split("")
  let randomToArray = randomDigit.split("")
  for (i = 0; i < digitNumber; i++) {
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
  for (i = 0; i < digitNumber; i++) {
    if (numToString[i] == randomToString[i]) {
      count++
    }
  }
  return count
}

numberGuess.addEventListener("keypress",guess)

function templateRow(attemps){
  let row = `
  <div id="row${attemps}" class="row bg-white opacity rowAnimation text-center">
    <div id="colNum${attemps}" class="col-6 border"></div>
    <div id="colOk${attemps}" class="col-3 border"></div>
    <div id="colPos${attemps}" class="col-3 border"></div>
  </div>
  `
  return row
}

function guess(e){
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps =  attemps > 0;
  if (enterKey && inputLength == digitNumber && zeroAttemps) {
    let num = e.target.value;
    rows.innerHTML += templateRow(attemps)
    document.querySelector(`#colNum${attemps}`).innerText = num
    document.querySelector(`#colOk${attemps}`).innerText = checkOk(num)
    document.querySelector(`#colPos${attemps}`).innerText = checkIndex(num)
    setTimeout(() => {
      var tempRow = document.querySelector(`#row${attemps}`)
      tempRow.classList.remove("opacity")
      tempRow.classList.add("appear")
      setTimeout(() => {
        tempRow.classList.remove("appear")
        attemps--  
        spanAttemps.innerText = attemps
      }, 500);
    }, 500);
    displayMessage(num)
    numberGuess.value = ""
    // estás muy cerca de conseguirlo
    if(checkOk(num) == 3){
      setTimeout(() => {
        addCharacter(1)
      }, 1000);
        
    }
  }
}

function addCharacter(number){
  const rooting = document.querySelector("#rooting")

  switch (number) {
    case 1:
      rooting.innerHTML = `
      <p class="bubble speech text-end bg-white rounded p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos</p>
      <img src="./source/img/character_1.png" alt="rooting character">
      
      `
      break;
    case 2:
      rooting.innerHTML =
      `
      <img src="./source/img/character_2.png" alt="rooting character">
      <p class="bubble speech bg-white rounded p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos</p>
      `
      break;
    case 3:
      rooting.innerHTML =
      `
      <img src="./source/img/character_2.png" alt="rooting character">
      <p class="bubble speech bg-white rounded p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos</p>
      `
      break;
  
    default:

      break;
  }
}

  // Refactorizar
  // Agregar efectos al ganar o perder
  // Agregar pistas con acertijos
  // Agregar pista cuando hay un numero repetido
  // Agregar un comentario cuando se está próximo a resolverlo (3 ok y +2 en pos)
  // Agregar filtros para jugar de manera infinita (después de ganar un juego)
  // Agregar modal

