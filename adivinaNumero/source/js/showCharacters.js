function removeCharacter() {
  document.querySelector("#rooting").innerHTML = ""
}

function addCharacter(number) {
  const rooting = document.querySelector("#rooting")

  switch (number) {
    case 1:
      rooting.innerHTML = `
        <p class="bubble speech text-end bg-white rounded p-1">Muy bien, están muy cerca de conseguirlo!</p>
        <img src="./source/img/character_1.png" alt="rooting character">
        `
      break;
    case 2:
      rooting.innerHTML =
        `
        <img src="./source/img/character_2.png" alt="rooting character">
        <p class="bubble speech bg-white rounded p-1">¡Solo falta acomodar los números!</p>
        `
      break;
    case 3:
      rooting.innerHTML =
        `
        <img src="./source/img/character_2.png" alt="rooting character">
        <p class="bubble speech bg-white rounded p-1"></p>
        `
      break;

    default:

      break;
  }
}

// estás muy cerca de conseguirlo
function character(num) {
  if (checkOk(num) == digitLimit - 1 && checkIndex(num) < digitLimit) {
    setTimeout(() => {
      addCharacter(1)
      setTimeout(() => {
        removeCharacter()
      }, 1000);
    }, 1000);
  } else if (checkOk(num) == digitLimit && checkIndex(num) <= digitLimit - 2) {
    setTimeout(() => {
      addCharacter(2)
      setTimeout(() => {
        removeCharacter()
      }, 1000);
    }, 1000);
  }
}