function goToNewRow() {
    if (numberGuess) {
      // Scroll to the element
      numberGuess.scrollIntoView({ behavior: "smooth" });
    }
}