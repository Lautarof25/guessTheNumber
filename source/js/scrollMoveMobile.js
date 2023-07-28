function goToNewRow() {
  setTimeout(() => {
    if (numberGuess) {
      // Scroll to the element
      numberGuess.scrollIntoView({ behavior: "smooth" });
    }
  }, 500);
}