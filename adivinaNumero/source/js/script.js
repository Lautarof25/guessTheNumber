// Obtenemos un numero random de 4 dígitos
// 5 Intentos
// En cada intento verifica correctos y posición
// Agrega una nueva fila si no acierta
// Plantilla

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  const random = getRandomInt(0, 9999)
  const randomDigit = addDigits(random)
  
  
  function addDigits(random){
    const randomToString = random.toString()
    if(randomToString.length < 4){
      let numCaracteres = randomToString.length
  
  let stringAArray = randomToString.split("");
  
  let newString;
  
  for(i = 0; i < 4-numCaracteres;i++){
    stringAArray.unshift("0")
  }
  
  let digit = stringAArray.join("")
    return digit
    }
    return randomToString
  }
  
  
  const rows = document.querySelector("#rows")
  const number = document.querySelector("#number")
  
  
  
  function comprobarCorrectos(num){
    let count = 0
    // retorna la cantidad de correctos que hay
    let numToArray = num.toString().split("")
    let randomToArray = randomDigit.split("")
    for(i=0;i < 4;i++){
      const index = randomToArray.indexOf(numToArray[i]);
      if(randomToArray.includes(numToArray[i])){
        randomToArray.splice(index, 1);
        numToArray.shift(numToArray[i])
        i--
        count++
      }
    }
    return count
  }
  
  
  function comprobarPosicion(num){
    // retorna la cantidad de numeros en posición correcta
    let count = 0
    let numToString = num.toString()
    let randomToString = randomDigit
    for(i=0;i < 4;i++){
      if(numToString[i] == randomToString[i]){
        count++
      }
    }
    return count
  }
  
  
  let intentos = 0
  
  
  number.addEventListener("keypress", function(e){
      
     if (e.key === 'Enter' && e.target.value.length == 4 && intentos < 5) {
       let num = e.target.value;
       console.log(num == randomDigit)
       console.log(randomDigit)
       const row = 
  `
  <div id="row${intentos}" class="row text-center">
    <div id="colNum${intentos}" class="col-6 border"></div>
    <div id="colOk${intentos}" class="col-3 border"></div>
    <div id="colPos${intentos}" class="col-3 border"></div>
  </div>
  
  ` 
    rows.innerHTML += row
    document.querySelector(`#colNum${intentos}`).innerText = num
    document.querySelector(`#colOk${intentos}`).innerText = comprobarCorrectos(num)
    document.querySelector(`#colPos${intentos}`).innerText = comprobarPosicion(num)
    intentos++
    
      if(intentos == 5 && randomDigit != num){
      let res = document.querySelector("#resultado")
      res.innerText = "❌ 🎲 Perdiste, el numero es " + randomDigit +"🎲❌ "
      
      number.disabled = true
      
    }else if(randomDigit == num){
      document.querySelector("#resultado").innerText = "🎉 🎈 Acertaste, el numero es " + randomDigit + "🎈 🎉"
      number.disabled = true
    }
      number.value = "" 
    }
    
  })
  
  
  
  // Refactorizar
  // Agregar efectos al ganar o perder
  // Agregar contador de intentos
  // Agregar reseteo de juego
  
  
  
  
  
  
  
  
  
  
  