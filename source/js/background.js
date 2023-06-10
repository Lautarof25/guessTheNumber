const background = document.querySelector("#backgroundNumbers")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Agregar evento resize
function fillBackground(){
  addEventListener("load", fillOnLoad)
  addEventListener("resize", fillNumbers)
}

let fontSize = 64;
let totalWidth = window.innerWidth;
let totalHeight = window.innerHeight;

function fillOnLoad(){
  let widthCalculate = Math.floor(totalWidth / fontSize);
  let heightCalculate = Math.floor(totalHeight / fontSize); 
  let total = widthCalculate * heightCalculate
  background.innerText = ""
  for(i=0; i < total;i++){
    background.innerText += getRandomInt(0, 9)
  }
}

function fillNumbers(){
  totalWidth = window.innerWidth;
  totalHeight = document.getElementById('main').offsetHeight;
  let widthCalculate = Math.floor(totalWidth / fontSize);
  let heightCalculate = Math.floor(totalHeight / fontSize); 
  let total = widthCalculate * heightCalculate
  background.innerText = ""
  for(i=0; i < total;i++){
    background.innerText += getRandomInt(0, 9)
  }
}

fillBackground()