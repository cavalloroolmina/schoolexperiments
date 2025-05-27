function calculateSum(a, b) {
  return a + b;
}

function compareValues(x, y, z) {
  if (x < y && x < z) {
    return "x is the smallest";
  } else if (y < x && y < z) {
    return "y is the smallest";
  } else if (z < x && z < y) {
    return "z is the smallest";
  } else {
    return "all values are equal";
  }
}

function displayMenu(options) {
  const optionsWithDescriptions = options.map(option => ({
    label: option.label,
    description: option.description
  }));

  console.log('Displaying menu with:', optionsWithDescriptions);
}

// Example usage of the functions
calculateSum(10, 5); // Output: 15
compareValues(3, 7, 9); // Output: "y is the smallest"
displayMenu([{"label": "First Option", "description": "This option has some description"}, {"label": "Second Option", "description": "Another option with different content"}]);
