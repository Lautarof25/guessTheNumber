function templateCharacter(number){
  const rooting = document.createElement("div")
  rooting.setAttribute("id","rooting")
  rooting.setAttribute("class","d-flex index-1 position-absolute bottom-25 start-50 translate-middle-x justify-content-center align-items-center opacity")
  const p = document.createElement("p")
  const img = document.createElement("img")
  const textThree = "Muy bien, estás muy cerca de conseguirlo!"
  const textFour = "¡Solo falta acomodar los números!"
  p.setAttribute('class', `bubble speech text-end bg-white rounded p-2 shadow `)
  if(number == 1){
    const textP = document.createTextNode(textThree);
    img.setAttribute("src","./source/img/character_1.webp")
    p.appendChild(textP)
    rooting.appendChild(p)
    rooting.appendChild(img)
  }else {
    const textP = document.createTextNode(textFour);
    img.setAttribute("src","./source/img/character_2.webp")
    p.appendChild(textP)
    rooting.appendChild(img)
    rooting.appendChild(p)
  }
  document.querySelector("#rows").appendChild(rooting)
}

function addCharacter(num) {
  if (checkOk(num) == digitLimit - 1 && attemps > 1) {
    templateCharacter(1)
    document.querySelector("#rooting").classList.remove("opacity")
    document.querySelector("#rooting").classList.add("appearDisappear")
    characterSound.play()
    setTimeout(() => {
      document.querySelector("#rooting").classList.remove("appearDisappear")
      document.querySelector("#rooting").remove()
    }, 5000);
  } else if (checkOk(num) == digitLimit && checkIndex(num) <= digitLimit-1 && attemps > 1) {
    templateCharacter(2)
    document.querySelector("#rooting").classList.remove("opacity")
    document.querySelector("#rooting").classList.add("appearDisappear")
    characterSound.play()
    setTimeout(() => {
      document.querySelector("#rooting").classList.remove("appearDisappear")
      document.querySelector("#rooting").remove()
    }, 5000);
  }
}