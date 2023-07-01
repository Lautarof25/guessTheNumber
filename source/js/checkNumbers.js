function checkOk(num) {
    let count = 0
    // retorna la cantidad de correctos que hay
    let numToArray = num.toString().split("")
    let randomToArray = randomDigit.split("")
    for (i = 0; i < digitLimit; i++) {
      const index = randomToArray.indexOf(numToArray[i]);
      if (randomToArray.includes(numToArray[i])) {
        randomToArray.splice(index, 1);
        numToArray.shift(numToArray[i])
        i--
        count++
      }
    }
    return count
  }
  
  function checkIndex(num) {
    // retorna la cantidad de numeros en posición correcta
    let count = 0
    let numToString = num.toString()
    let randomToString = randomDigit
    for (i = 0; i < digitLimit; i++) {
      if (numToString[i] == randomToString[i]) {
        count++
      }
    }
    return count
  }