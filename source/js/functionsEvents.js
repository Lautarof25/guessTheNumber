function radioDivClick() {
  if (btnradio1.checked) {
    reset()
    attemptsLeft = 5;
    attempsTemplate();
  } else if (btnradio2.checked) {
    reset()
    attemptsLeft = 10;
    attempsTemplate();
  } else if (btnradio3.checked) {
    reset()
    attemptsLeft = 99;
    attempsTemplate();
  }
  function attempsTemplate() {
    attempts = attemptsLeft;
    progressBar.value = attempts;
    progressBar.max = attempts;
    document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`;
  }
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