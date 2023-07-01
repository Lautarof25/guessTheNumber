document.querySelector("#resetButton").addEventListener("click",reset)

function reset(){
  random = getRandomInt(0, 9999)
  randomDigit = addDigitsToRandom(random)
  addDigitsToRandom(random)
  attempsLeft = 10
  attemps = attempsLeft
  spanAttemps.innerText = attemps > 1 ? ` quedan ${attemps} intentos` : ` queda ${attemps} intento`
  rows.innerHTML = ""
  numbersAttemps = []
  progressBar.value = attemps
  numberGuess.value = ""
  numberGuess.disabled = false
  numberGuess.focus()
  resultDiv.classList.add("d-none")
  res.classList.remove("bg-warning","text-white")
  res.classList.remove("bg-dark","text-white")
  opening.play()
}