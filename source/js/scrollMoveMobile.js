function goToNewRow() {
    const rect = numberGuess.getBoundingClientRect()
    const y = rect.y + window.scrollY;
    setTimeout(window.scrollTo(0, y),100)
}