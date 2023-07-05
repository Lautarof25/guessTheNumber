const rows = document.querySelector("#rows")

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
    }else if(inputLength == digitLimit && zeroAttemps){
      addTemplateRow(attemps, num, checkOk(num), checkIndex(num))
      addNumber.play()
      numbersAttemps.push(num)
      attemps--
      spanAttemps.textContent = attemps != 1 ? ` quedan ${attemps} intentos` 
                                             : ` queda ${attemps} intento`
      progressBar.value = attemps
      numberGuess.value = ""
      displayFinalMessage(num)
      checkWinner(num)
      addCharacter(num)
      fillNumbers()
      if(window.innerWidth <= 560)
        downToNewRow()
    }
  }
}