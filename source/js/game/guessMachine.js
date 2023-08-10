let arrayNumbers = []
numberGuess.focus()
let lastAttempt = true

function spanTextAttemps(attempts){
  return attempts === 1 
  ? ` have ${attempts} attempt` 
  : ` have ${attempts} attempts`
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
      popUpMessage("repeat")
    else if(inputLength === digitLimit &&  attempts > 0){
      addTemplateRow(attempts, num, checkOk(num), checkIndex(num))
      addNumberSound.play()
      arrayNumbers.push(num)
      decreaseAttempts()
      updateSpanAndBarAttemps()
      cleanInput()
      displayFinalMessage(num)
      checkWinner(num)
      addCharacter(num)
      fillNumbers()
      if(window.innerWidth <= 560)
        goToNewRow()
    }
    if(attempts === 1 && lastAttempt && num != randomDigit){
      popUpMessage("last attempt")
      lastAttempt = false
    }
  }
}

function updateSpanAndBarAttemps(){
  spanAttempts.textContent = spanTextAttemps(attempts)
  progressBar.value = attempts
}

function decreaseAttempts(){
  attempts--
}

function cleanInput(){
  numberGuess.value = ""
}