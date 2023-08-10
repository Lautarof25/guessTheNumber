function checkOk(num) {
  // retorna la cantidad de correctos que hay
  let count = 0
  const numToArray = num.toString().split("")
  const randomToArray = randomDigit.split("")

  for (const digit of numToArray) {
    const index = randomToArray.indexOf(digit)
    if (index !== -1) {
      randomToArray.splice(index, 1)
      count++
    }
  }

  return count
}

function checkIndex(num) {
  // retorna la cantidad de numeros en posición correcta
  let count = 0
  const numToString = num.toString()
  const randomToString = randomDigit
  for (i = 0; i < digitLimit; i++) {
    if (numToString[i] === randomToString[i]) {
      count++
    }
  }
  
  return count
}