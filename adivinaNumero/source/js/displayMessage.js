const res = document.querySelector("#result")
const resultDiv = document.querySelector("#resultDiv")

function displayMessage(num){
    if (randomDigit == num) {
        resultDiv.classList.remove("d-none")
        res.innerText = "🎉 🎈 Acertaste, el numero es " + randomDigit + "🎈 🎉"
        res.classList.add("bg-warning","text-white")
        numberGuess.disabled = true
      } 
      else if (attemps == 0 && randomDigit != num) {
        resultDiv.classList.remove("d-none")
        res.innerText = "❌ 🎲 Perdiste, el numero es " + randomDigit + "🎲❌ "
        res.classList.add("bg-dark","text-white")
        numberGuess.disabled = true
      }
}