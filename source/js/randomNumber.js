const digitLimit = 4;
// Numero random
let randomDigit = getRandomInt(0, 9999).toString()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}