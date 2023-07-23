document.querySelector("#resetButton").addEventListener("click", reset)

function reset() {
  random = getRandomInt(0, 9999)
  randomDigit = addDigitsToRandom(random)
  attempts = attemptsLeft
  spanAttempts.textContent = ` quedan ${attemptsLeft} intentos`
  while(rows.firstChild)
    rows.firstChild.remove()
  arrayNumbers = []
  progressBar.value = attempts
  numberGuess.value = ""
  numberGuess.disabled = false
  numberGuess.focus()
  resultDiv.classList.add("d-none")
  res.classList.remove("bg-warning")
  res.classList.remove("bg-dark")
  openingSound.play()
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