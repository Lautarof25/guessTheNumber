const invalidChars = [
    "-",
    "+",
    "e",
    "."
  ];
  
  numberGuess.addEventListener("input", function(){
    if(this.value.length > this.maxLength)
      this.value = this.value.slice(0, this.maxLength)
  })
  
  numberGuess.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });