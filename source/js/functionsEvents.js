const radioAttemptsMap = {
  btnradio1: 5,
  btnradio2: 10,
  btnradio3: 99,
};

function handleRadioButtonChange() {
  const selectedRadioBtn = document.querySelector('input[name="attempts"]:checked');
  
  if (selectedRadioBtn) {
    const attemptsLeft = radioAttemptsMap[selectedRadioBtn.id];
    reset();
    updateAttempts(attemptsLeft);
  }
}

function updateAttempts(attemptsLeft) {
  attempts = attemptsLeft;
  progressBar.value = attempts;
  progressBar.max = attempts;
  document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`;
}


function reset() {
  random = getRandomInt(0, 9999)
  randomDigit = addDigitsToRandom(random)
  attempts = attemptsLeft
  spanAttempts.textContent = ` quedan ${attemptsLeft} intentos`
  cleanRows()
  arrayNumbers = []
  progressBar.value = attempts
  numberGuess.value = ""
  numberGuess.disabled = false
  numberGuess.focus()
  resultDiv.classList.add("d-none")
  res.classList.remove("bg-warning")
  res.classList.remove("bg-dark")
  openingSound.play()
  fillNumbers()
  lastAttempt = true
}

function cleanRows() {
  while (rows.firstChild)
    rows.firstChild.remove()
}

function goToInput() {
  setTimeout(() => {
    numberGuess.focus()
  }, 500);
}
function goToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 500);
}

function playPopUpSound() {
  popUpSound.play()
}

function skipSection() {
  infoSection.classList.add("d-none")
  setTimeout(() => {
    gameSection.classList.remove("d-none")
    gameSection.classList.remove("opacity")
    gameSection.classList.add("appear")
    setTimeout(() => {
      gameSection.classList.remove("appear")
    }, 200);
  }, 200);

  window.scrollTo(0, 0);
  openingSound.play()
  setTimeout(() => {
    numberGuess.focus()
  }, 500);
}