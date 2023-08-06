function templateCharacter(number) {
  const rooting = document.createElement("div");
  rooting.setAttribute("id", "rooting");
  rooting.setAttribute("class", "d-flex index-1 position-absolute top-100 start-50 translate-middle-x justify-content-center align-items-center opacity");

  const p = document.createElement("p");
  p.setAttribute('class', `bubble speech text-end bg-white rounded p-2 shadow`);

  let text;
  let imgSrc;

  if (number == 4) {
    imgSrc = "./source/img/character_2.webp";
    text = "¡Just need to order the numbers!";
  } else if (number == 3) {
    text = "Very good, you are very close to getting it!";
    imgSrc = "./source/img/character_1.webp";
  } else {
    imgSrc = "./source/img/character_1.webp";
    text = "Keep trying!";
  }

  const textP = document.createTextNode(text);
  const img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  if (number == 4) {
    rooting.appendChild(img);
    rooting.appendChild(p);
  } else {
    rooting.appendChild(p);
    rooting.appendChild(img);
  }
  p.appendChild(textP);

  document.querySelector("#characterDiv").appendChild(rooting);
  characterEffect();
}


function addCharacter(num) {
  const numbersOks = checkOk(num)
  if (attempts > 1) {
    if (numbersOks == digitLimit && checkIndex(num) <= digitLimit - 2)
      templateCharacter(numbersOks)
    else if (numbersOks == digitLimit - 1)
      templateCharacter(numbersOks)
    else if (numbersOks == 0)
      templateCharacter(numbersOks)
  }
}

function characterEffect() {
  numberGuess.classList.add("d-none")
  numberGuess.disabled = true
  
  const rooting = document.querySelector("#rooting");
  rooting.classList.remove("opacity");
  rooting.classList.add("appearDisappear");
  characterSound.play();

  setTimeout(() => {
    rooting.classList.remove("appearDisappear");
    rooting.remove();
    numberGuess.disabled = false;
    numberGuess.classList.remove("d-none");
    numberGuess.focus();
  }, 5000);
}