const rows = document.querySelector("#rows")
const zeroAttempts = attempts > 0;

const progressBar = document.querySelector("#progressBar")
let numbersAttempts = []
numberGuess.focus()

numberGuess.addEventListener("keyup", guessMachine)

function guessMachine(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  let num = e.target.value;
  if (enterKey && Number.isInteger(Number(num)) && Number(num) >= 0) {
    if (numbersAttempts.includes(num))
      messageNumberRepeat()
    else if(inputLength == digitLimit && zeroAttempts){
      addTemplateRow(attempts, num, checkOk(num), checkIndex(num))
      addNumberSound.play()
      numbersAttempts.push(num)
      attempts--
      spanAttempts.textContent = attempts != 1 
                                        ? ` quedan ${attempts} intentos` 
                                        : ` queda ${attempts} intento`
      progressBar.value = attempts
      numberGuess.value = ""
      displayFinalMessage(num)
      checkWinner(num)
      addCharacter(num)
      fillNumbers()
      if(window.innerWidth <= 560)
        goToNewRow()
    }
  }
}