// ** Convertir esto en un modal**
const resultDiv = document.querySelector("#resultDiv")
const res = document.querySelector("#result")

function displayFinalMessage(num) {
  if (randomDigit == num) {
    resultDiv.classList.remove("d-none")
    res.innerText = "🎉 🎈 Acertaste, el numero es " + randomDigit + "🎈 🎉"
    res.classList.add("bg-warning", "text-white")
    numberGuess.disabled = true
    winner.play()
  }
  else if (attemps == 0 && num != randomDigit) {
    resultDiv.classList.remove("d-none")
    res.innerText = "❌ 🎲 Perdiste, el numero es " + randomDigit + "🎲❌ "
    res.classList.add("bg-dark", "text-white")
    numberGuess.disabled = true
    gameOver.play()
  }
}

