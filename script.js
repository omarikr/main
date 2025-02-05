// Typewriter effect for the text
let text = 'Coming Soon....';  // The text to display
let index = 0;  // The current character index
let textElement = document.getElementById('coming-text');  // The element to display the text

// Function to type the text one character at a time
function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);  // Add the next character to the element
    index++;  // Move to the next character
    setTimeout(typeWriter, 300);  // Adjust the typing speed here (300ms between each character)
  }
}

// Call the typeWriter function to start the typing effect
typeWriter();
