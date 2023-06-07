const background = document.querySelector("#backgroundNumbers")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Agregar evento resize
function fillBackground(){
  addEventListener("load", fillNumbers)
  addEventListener("resize", fillNumbers)
}
  
function fillNumbers(){
  background.innerText = ""
  for(i=0; i < 1000;i++){
    background.innerText += getRandomInt(0, 9)
  }
}

fillBackground()