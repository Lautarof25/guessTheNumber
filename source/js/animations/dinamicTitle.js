// CHATGPT

// HTML element where the dynamic title will be displayed
let titleElement = document.getElementById('dynamic-title');

// Array of words to display in the title
let words = ["Gu3ss Th3 Numb3r"];

// Index to keep track of the current word
let wordIndex = 0;

// Index to keep track of the current letter
let letterIndex = 0;

// Flag to determine whether to add or remove letters
let addingLetters = true;

// Function to update the title letter by letter
function updateTitle() {
  let currentWord = words[wordIndex];
  let displayText = currentWord.slice(0, letterIndex);

  titleElement.textContent = displayText;

  if (addingLetters) {
    letterIndex++;
    if (letterIndex > currentWord.length) {
      addingLetters = false;
      setTimeout(updateTitle, 1000); // Wait for 1 second before removing letters
    }
  } else {
    letterIndex--;
    if (letterIndex === 0) {
      addingLetters = true;
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }
  }
  
}

// Initial call to start the dynamic title
updateTitle();

// Call the updateTitle function every 100 milliseconds
setInterval(updateTitle, 200);
