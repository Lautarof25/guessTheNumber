
let attempsLeft = 10
let attemps = attempsLeft
let spanAttemps = document.querySelector("#spanAttemps")
spanAttemps.innerText = attemps > 1 ? attemps + " intentos" : attemps + " intento"
