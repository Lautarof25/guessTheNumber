const rooting = document.querySelector("#rooting")

function removeCharacter() {
  rooting.innerHTML = ""
}

function addCharacter(number) {
  switch (number) {
    case 1:
      rooting.innerHTML = `
        <p class="bubble speech text-end bg-white rounded p-1 shadow ">Muy bien, estás muy cerca de conseguirlo!</p>
        <img src="./source/img/character_1.webp" alt="rooting character">
        `
      break;
    case 2:
      rooting.innerHTML =
        `
        <img src="./source/img/character_2.webp" alt="rooting character">
        <p class="bubble speech bg-white rounded p-1 shadow ">¡Solo falta acomodar los números!</p>
        `
      break;
  }
}

function character(num) {
  if (checkOk(num) == digitLimit - 1) {
    rooting.classList.remove("opacity")
    rooting.classList.add("appearDisappear")
    addCharacter(1)
    setTimeout(() => {
      rooting.classList.remove("appearDisappear")
      removeCharacter()
    }, 5000);
  } else if (checkOk(num) == digitLimit && checkIndex(num) <= digitLimit-1) {
    rooting.classList.remove("opacity")
    rooting.classList.add("appearDisappear")
    addCharacter(2)
    setTimeout(() => {
      rooting.classList.remove("appearDisappear")
      removeCharacter()
    }, 5000);
  }
}