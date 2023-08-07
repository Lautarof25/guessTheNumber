function displayFinalMessage(num) {
  if (randomDigit == num) {
    showMessage("🎉 You won, the number is " + randomDigit + "🎉", "bg-warning");
  } else if (attempts === 0 && num != randomDigit) {
    showMessage("❌🎲 Game over, the number is " + randomDigit + "🎲❌", "bg-dark");
  }
}

function showMessage(message, bgColorClass) {
  resultDiv.classList.remove("d-none");
  result.textContent = message;
  result.classList.add(bgColorClass);
  numberGuess.disabled = true;
}