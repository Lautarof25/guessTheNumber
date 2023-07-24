let arrayNumbers = []
numberGuess.focus()

function spanTextAttemps(attempts){
  return attempts == 1 
  ? ` queda ${attempts} intento` 
  : ` quedan ${attempts} intentos`
}

function guessMachine(e) {
  let inputLength = e.target.value.length;
  const enterKey = e.key === 'Enter';
  let num = e.target.value;
  if (enterKey && onlyDigits(num)) {
    if (arrayNumbers.includes(num))
      messageNumberRepeat()
    else if(inputLength == digitLimit &&  attempts > 0){
      addTemplateRow(attempts, num, checkOk(num), checkIndex(num))
      addNumberSound.play()
      arrayNumbers.push(num)
      attempts--
      spanAttempts.textContent = spanTextAttemps(attempts)
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