const resultDiv = document.querySelector("#resultDiv")
const res = document.querySelector("#result")

function displayFinalMessage(num) {
  if (randomDigit == num) {
    resultDiv.classList.remove("d-none")
    res.textContent = "🎉 Acertaste, el numero es " + randomDigit + "🎉"
    res.classList.add("bg-warning")
    numberGuess.disabled = true
  }
  else if (attemps == 0 && num != randomDigit) {
    resultDiv.classList.remove("d-none")
    res.textContent = "❌🎲 Perdiste, el numero es " + randomDigit + "🎲❌"
    res.classList.add("bg-dark")
    numberGuess.disabled = true
  }
}