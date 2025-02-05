document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const text = "coming soon";
    let index = 0;
    const interval = 200; // Speed of typing

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, interval);
        } else {
            setTimeout(() => {
                textElement.textContent = '';
                index = 0;
                typeText();
            }, 500); // Wait for 5 seconds before repeating
        }
    }

    typeText();

    // Add cursor blinking effect
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    textElement.appendChild(cursor);
});
