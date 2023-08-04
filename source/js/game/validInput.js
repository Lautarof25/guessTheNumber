const invalidChars = ["-","+","e","."];

numberGuess.addEventListener("input", function () {
  if (this.value.length > this.maxLength)
    this.value = this.value.slice(0, this.maxLength)
})
function onlyDigits(num){
  return num.match(/^[0-9]+$/) != null
}

numberGuess.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
numberGuess.addEventListener('paste', e => e.preventDefault());