document.querySelector("#resetButton").addEventListener("click", reset)

function reset() {
  randomDigit = getRandomInt(0, 9999).toString()
  attempsLeft = 10
  attemps = attempsLeft
  spanAttemps.textContent = attemps != 1 ? ` quedan ${attemps} intentos` : ` queda ${attemps} intento`
  rows.innerHTML = ""
  numbersAttemps = []
  progressBar.value = attemps
  numberGuess.value = ""
  numberGuess.disabled = false
  numberGuess.focus()
  resultDiv.classList.add("d-none")
  res.classList.remove("bg-warning")
  res.classList.remove("bg-dark")
  openingSound.play()
  heightRow = 0
  fillNumbers()
}

function goToInput(){
  setTimeout(() => {
    numberGuess.focus()  
  }, 500);
}
function goToTop(){
  setTimeout(() => {
    window.scrollTo(0,0)
  }, 500);
}

document.querySelector("#infoButton").addEventListener("click", playPopUpSound)

function playPopUpSound(){
  popUpSound.play()
}