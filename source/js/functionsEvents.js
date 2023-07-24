function radioDivClick(){
    if(btnradio1.checked){
        reset()
        attemptsLeft = 5;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }else{
        reset()
        attemptsLeft = 10;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }
}