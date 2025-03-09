// Randomly generates a number between 1 and 50
function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

// Returns true or false based on if the number is even or odd
function isEven(num) {
  return num % 2 === 0;
}

// Returns the number that is the sum of the two given numbers
function add(a, b) {
  return a + b;
}

// Returns the product of the two given numbers
function multiply(a, b) {
  return a * b;
}

// Returns true if the two given numbers are equal
function isEqual(a, b) {
  return a === b;
}

// Returns the number that is the result of subtracting the second number from the first
function subtract(a, b) {
  return a - b;
}

// Returns the remainder of dividing the two given numbers
function modulo(a, b) {
  return a % b;
}
