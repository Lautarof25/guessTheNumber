const rows = document.querySelector("#rows")
const zeroAttemps = attemps > 0;

const progressBar = document.querySelector("#progressBar")
let numbersAttemps = []
numberGuess.focus()

numberGuess.addEventListener("keyup", guessMachine)

function guessMachine(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  let num = e.target.value;
  if (enterKey && Number.isInteger(Number(num))) {
    if (numbersAttemps.includes(num)) {
      messageNumberRepeat()
    }else if(inputLength == digitLimit && zeroAttemps){
      addTemplateRow(attemps, num, checkOk(num), checkIndex(num))
      addNumberSound.play()
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
        goToNewRow()
    }
  }
}