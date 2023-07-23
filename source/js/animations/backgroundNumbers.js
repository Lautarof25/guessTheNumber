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

const fontSize = 64;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let mainHeight = document.getElementById('main').offsetHeight;
let heightTotal = 0;

function fillOnLoad(){
  let widthCalculate = Math.floor(windowWidth / fontSize);
  let heightCalculate = Math.floor(windowHeight / fontSize); 
  let total = widthCalculate * heightCalculate
  background.innerText = ""
  for(i=0; i < total;i++){
    background.innerText += getRandomInt(0, 9)
  }
}

function fillNumbers(){
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  mainHeight = document.getElementById('main').offsetHeight;
  let heightCalculate = 0
  if(windowHeight > mainHeight){
    heightCalculate = Math.floor(windowHeight / fontSize);
  }else {
    heightCalculate = Math.floor(mainHeight / fontSize);
  }
  let widthCalculate = Math.floor(windowWidth / fontSize);
  let total = widthCalculate * heightCalculate
  background.innerText = ""
  for(i=0; i < total;i++){
    background.innerText += getRandomInt(0, 9)
  }
}
fillBackground()