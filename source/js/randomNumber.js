const digitLimit = 4;
// Numero random
let random = getRandomInt(0, 9999)
// Agregar dígitos cuando el número random es menor a 1000
let randomDigit = addDigitsToRandom(random)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function addDigitsToRandom(random) {
  let randomToString = random.toString()
  if (randomToString.length < 4) {
    let numCaracteres = randomToString.length
    let stringToArray = randomToString.split("");
    for (i = 0; i < 4 - numCaracteres; i++) {
      stringToArray.unshift("0")
    }
    randomToString = stringToArray.join("")
    return randomToString
  }
  return randomToString
}