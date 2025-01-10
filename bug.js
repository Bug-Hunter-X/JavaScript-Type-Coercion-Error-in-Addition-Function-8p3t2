function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Potential error if a or b are not numbers
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo('hello', 20)); // Output: Uncaught TypeError: Cannot convert value of type string to number