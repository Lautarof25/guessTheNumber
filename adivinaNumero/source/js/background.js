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

let fontSize = 64;
let totalWidth = 0;
let totalHeight = 0;
  
function fillNumbers(){
  let widthWindows = window.innerWidth
  let heightWindows = window.innerHeight
  totalWidth = Math.trunc(widthWindows / fontSize - 1)*2;
  totalHeight = Math.trunc(heightWindows / fontSize - 1); 
  let total = totalWidth * totalHeight
  background.innerText = ""
  for(i=0; i < (total);i++){
    background.innerText += getRandomInt(0, 9)
  }
}

fillBackground()