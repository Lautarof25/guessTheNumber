function messageNumberRepeat() {
  // Muestra mensaje de numero repetido
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class", "position-absolute  opacity top-0 start-50 translate-middle-x p-2")
  const p = document.createElement("p")
  const messageP = document.createTextNode("Ya ingresó esa combinación");
  p.setAttribute("class", "bg-warning shadow hithere rounded mt-2 p-2 display-6 text-center")
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  repeatNumber.play()
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  numberGuess.disabled = true
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.disabled = false
    numberGuess.value = ""
    numberGuess.focus()
  }, 3000);
}