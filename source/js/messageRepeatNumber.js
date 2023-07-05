function messageNumberRepeat() {
  // Muestra mensaje de numero repetido
  numberGuess.disabled = true
  const messageRepeat = document.createElement("div")
  messageRepeat.setAttribute("class", "opacity index-1 position-fixed top-50 p-2")
  const p = document.createElement("p")
  p.setAttribute("class", "bg-warning shadow hithere rounded mt-2 p-2 display-6 text-center")
  const messageP = document.createTextNode("Ya ingresó esa combinación");
  p.appendChild(messageP)
  messageRepeat.appendChild(p)
  document.getElementById("body").appendChild(messageRepeat)
  messageRepeat.classList.remove("opacity")
  messageRepeat.classList.add("appear")
  repeatNumber.play()
  setTimeout(() => {
    messageRepeat.remove()
    numberGuess.disabled = false
    numberGuess.value = ""
    numberGuess.focus()
  }, 3000);
}