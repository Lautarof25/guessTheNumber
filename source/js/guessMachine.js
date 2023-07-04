const rows = document.querySelector("#rows")
const numberGuess = document.querySelector("#numberGuess")
const progressBar = document.querySelector("#progressBar")
let numbersAttemps = []
numberGuess.focus()

numberGuess.addEventListener("keypress", guess)

function guess(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  const zeroAttemps = attemps > 0;
  let num = e.target.value;
  if (enterKey) {
    if (numbersAttemps.includes(num)) {
      messageNumberRepeat()
    }
    if (inputLength == digitLimit && zeroAttemps && !numbersAttemps.includes(num)) {
      templateRow(attemps, num, checkOk(num), checkIndex(num))
      addNumber.play()
      numbersAttemps.push(num)
      attemps--
      spanAttemps.innerText = attemps != 1 ? ` quedan ${attemps} intentos` : ` queda ${attemps} intento`
      progressBar.value = attemps
      displayFinalMessage(num)
      checkWinner(num)
      numberGuess.value = ""
      addCharacter(num)
      fillNumbers()
    }
  }
}