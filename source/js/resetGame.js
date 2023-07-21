document.querySelector("#resetButton").addEventListener("click", reset)

function reset() {
  random = getRandomInt(0, 9999)
  randomDigit = addDigitsToRandom(random)
  attempts = attemptsLeft
  spanAttempts.textContent = ` quedan ${attemptsLeft} intentos`
  rows.innerHTML = ""
  arrayNumbers = []
  progressBar.value = attempts
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