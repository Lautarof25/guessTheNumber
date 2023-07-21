const digitLimit = 4;

// Numero random
let random = getRandomInt(0, 9999)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let randomDigit = addDigitsToRandom(random)

function addDigitsToRandom(random) {
  // Agregar dígitos cuando el número random es menor a 1000
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