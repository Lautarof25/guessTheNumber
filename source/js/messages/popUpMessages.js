function popUpMessage(num) {
  // Muestra mensaje de numero repetido
  const messageText = num === 1 ? "Ya ingresó esa combinación" : "¡Último intento!";
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("opacity", "index-1", "position-fixed", "start-50", "top-50", "translate-middle", "p-2");

  const messageElement = document.createElement("p");
  messageElement.textContent = messageText;
  messageElement.classList.add("bg-warning", "shadow", "hithere", "rounded", "mt-2", "p-2", "display-6", "text-center");

  messageContainer.appendChild(messageElement);
  document.getElementById("body").appendChild(messageContainer);

  messageContainer.classList.remove("opacity");
  messageContainer.classList.add("appear");

  numberGuess.disabled = true;
  numberGuess.classList.add("d-none");
  repeatNumber.play();

  setTimeout(() => {
    messageContainer.remove();
    numberGuess.disabled = false;
    numberGuess.value = "";
    numberGuess.classList.remove("d-none");
    numberGuess.focus();
  }, 3000);
}