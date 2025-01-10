function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }

  // Explicit type checking to avoid type coercion errors
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo('hello', 20)); // Output: NaN
console.log(foo(10, 'world')); // Output: NaN