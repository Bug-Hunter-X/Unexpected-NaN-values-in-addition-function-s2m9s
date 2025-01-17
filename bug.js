function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

//Incorrect handling of NaN values
console.log(foo(NaN, 5)); //Output: NaN
console.log(foo(5,NaN)); //Output: NaN