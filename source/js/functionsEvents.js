function radioDivClick(){
    if(btnradio1.checked){
        reset()
        attemptsLeft = 5;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }else if(btnradio2.checked){
        reset()
        attemptsLeft = 10;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }else if(btnradio3.checked){
        reset()
        attemptsLeft = 99;
        attempts = attemptsLeft
        progressBar.value = attempts
        progressBar.max = attempts
        document.querySelector("#spanAttempts").textContent = ` quedan ${attemptsLeft} intentos`
    }
}