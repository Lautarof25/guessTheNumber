let arrayNumbers = []
numberGuess.focus()
let lastAttempt = true

function spanTextAttemps(attempts){
  return attempts == 1 
  ? ` queda ${attempts} intento` 
  : ` quedan ${attempts} intentos`
}

function getInputValue(e) {
  return e.target.value;
}

function guessMachine(e) {
  let inputLength = getInputValue(e).length;
  const enterKey = e.key === 'Enter';
  let num = getInputValue(e);
  if (enterKey && onlyDigits(num)) {
    if (arrayNumbers.includes(num))
      popUpMessage(1)
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
    if(attempts == 1 && lastAttempt && num != randomDigit){
      popUpMessage(0)
      lastAttempt = false
    }
  }
}