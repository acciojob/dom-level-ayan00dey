//your JS code here. If required.
// Get the target element by its ID
const targetElement = document.getElementById('level');

// Initialize DOM level counter
let level = 1;

// Traverse up the parent nodes until reaching the root html element
let currentElement = targetElement;
while (currentElement.parentElement) {
    level++;
    currentElement = currentElement.parentElement;
}

// Display the DOM level
alert(`The level of the element is: ${level}`);
