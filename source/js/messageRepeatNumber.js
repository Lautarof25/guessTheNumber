function messageNumberRepeat() {
  // Muestra mensaje de numero repetido
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class", "opacity index-1 position-absolute bottom-0 start-50 translate-middle p-2")
  const p = document.createElement("p")
  p.setAttribute("class", "bg-warning shadow hithere rounded mt-2 p-2 display-6 text-center")
  const messageP = document.createTextNode("Ya ingresó esa combinación");
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  numberGuess.disabled = true
  numberGuess.classList.add("index-0")
  repeatNumber.play()
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.disabled = false
    numberGuess.value = ""
    numberGuess.focus()
    numberGuess.classList.remove("index-0")
  }, 3000);
}