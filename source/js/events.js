numberGuess.addEventListener("keyup", guessMachine)
document.querySelector("#resetButton").addEventListener("click", reset)
document.querySelector("#infoButton").addEventListener("click", playPopUpSound)
playButton.addEventListener("click", skipSection)
btnradio1.addEventListener("click",function(){
    if(btnradio1.checked){
        reset()
        attemptsLeft = 5;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }
})
btnradio2.addEventListener("click",function(){
    if(btnradio2.checked){
        reset()
        attemptsLeft = 10;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }
})