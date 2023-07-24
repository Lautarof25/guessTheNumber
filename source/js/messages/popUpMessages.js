function messageNumberRepeat() {
  // Muestra mensaje de numero repetido
  numberGuess.disabled = true
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class", "opacity index-1 position-fixed start-50 top-50 translate-middle p-2")
  const p = document.createElement("p")
  p.setAttribute("class", "bg-warning shadow hithere rounded mt-2 p-2 display-6 text-center")
  const messageP = document.createTextNode("Ya ingresó esa combinación");
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  numberGuess.classList.add("d-none")
  repeatNumber.play()
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.disabled = false
    numberGuess.value = ""
    numberGuess.classList.remove("d-none")
    numberGuess.focus()
  }, 3000);
}

function messageLastAttempt() {
  // Muestra mensaje de numero repetido
  numberGuess.disabled = true
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class", "opacity index-1 position-fixed start-50 top-50 translate-middle p-2")
  const p = document.createElement("p")
  p.setAttribute("class", "bg-warning shadow hithere rounded mt-2 p-2 display-6 text-center")
  const messageP = document.createTextNode("¡Último intento!");
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  numberGuess.classList.add("d-none")
  repeatNumber.play()
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.disabled = false
    numberGuess.value = ""
    numberGuess.classList.remove("d-none")
    numberGuess.focus()
  }, 3000);
}