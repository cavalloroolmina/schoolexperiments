// Create an array of numbers between 1 and 10
const arr = Array(10).fill().map((_, i) => i + 1);

// Shuffle the array using Fisher-Yates algorithm
for (let i = 0; i < arr.length - 1; i++) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Return the first number in the array
return arr[0];
