function templateCharacter(number) {
  const rooting = document.createElement("div")
  rooting.setAttribute("id", "rooting")
  rooting.setAttribute("class", "d-flex index-1 position-absolute bottom-25 start-50 translate-middle-x justify-content-center align-items-center opacity")
  const p = document.createElement("p")
  const img = document.createElement("img")
  p.setAttribute('class', `bubble speech text-end bg-white rounded p-2 shadow `)
  if (number == 4) {
    const textFour = "¡Solo falta ordenar los números!"
    var textP = document.createTextNode(textFour);
    img.setAttribute("src", "./source/img/character_2.webp")
    rooting.appendChild(img)
    rooting.appendChild(p)
  } else {
    if (number == 3) {
      var textThree = "Muy bien, estás muy cerca de conseguirlo!"
      var textP = document.createTextNode(textThree);
    }
    else {
      var textZero = "¡Sigue adelante!"
      var textP = document.createTextNode(textZero);
    }
    img.setAttribute("src", "./source/img/character_1.webp")
    rooting.appendChild(p)
    rooting.appendChild(img)
  }
  p.appendChild(textP)
  document.querySelector("#rows").appendChild(rooting)
  characterEffect()
}

function addCharacter(num) {
  const numbersOks = checkOk(num)
  if(attempts > 1){
    if(numbersOks == digitLimit && checkIndex(num)<= digitLimit - 2)
      templateCharacter(numbersOks)
    else if(numbersOks == digitLimit - 1)
      templateCharacter(numbersOks)
    else if(numbersOks == 0)
      templateCharacter(numbersOks)
  }
}

function characterEffect() {
  numberGuess.classList.add("d-none")
  numberGuess.disabled = true
  document.querySelector("#rooting").classList.remove("opacity")
  document.querySelector("#rooting").classList.add("appearDisappear")
  characterSound.play()
  setTimeout(() => {
    document.querySelector("#rooting").classList.remove("appearDisappear")
    document.querySelector("#rooting").remove()
    numberGuess.disabled = false
    numberGuess.classList.remove("d-none")
    numberGuess.focus()
    goToNewRow()
  }, 5000);
}