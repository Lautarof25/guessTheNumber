const fontSize = 64;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function fillBackground() {
  fillNumbers();
  window.addEventListener("resize", fillNumbers);
}

function fillNumbers() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const mainHeight = document.getElementById('main').offsetHeight;
  let heightCalculate = Math.floor(windowHeight / fontSize);

  if (windowHeight <= mainHeight) {
    heightCalculate = Math.floor(mainHeight / fontSize);
  }

  const widthCalculate = Math.floor(windowWidth / fontSize);
  const total = widthCalculate * heightCalculate;
  background.innerText = "";
  
  for (let i = 0; i < total; i++) {
    background.innerText += getRandomInt(0, 9);
  }
}

fillBackground();