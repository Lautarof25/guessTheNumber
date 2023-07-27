function goToNewRow() {
    const numberGuessElement = document.getElementById("numberGuess");

    if (numberGuessElement) {
      // Scroll to the element
      numberGuessElement.scrollIntoView({ behavior: "smooth" });
    }
}