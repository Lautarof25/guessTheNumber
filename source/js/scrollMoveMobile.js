function goToNewRow(){
    const rect = numberGuess.getBoundingClientRect()
    const y = rect.y +  window.scrollY;
    window.scrollTo(0,y)
    console.log(y)
}