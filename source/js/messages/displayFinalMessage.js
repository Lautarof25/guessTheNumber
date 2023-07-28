function displayFinalMessage(num) {
  if (randomDigit == num) {
    showMessage("🎉 Acertaste, el numero es " + randomDigit + "🎉", "bg-warning");
  } else if (attempts === 0 && num != randomDigit) {
    showMessage("❌🎲 Perdiste, el numero es " + randomDigit + "🎲❌", "bg-dark");
  }
}

function showMessage(message, bgColorClass) {
  resultDiv.classList.remove("d-none");
  res.textContent = message;
  res.classList.add(bgColorClass);
  numberGuess.disabled = true;
}