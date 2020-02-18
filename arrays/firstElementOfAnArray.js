// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

first = function(array, n) { // first is equal to a func that takes two parameters; array and n
  if (array == null) // if the array is null
  return void 0; // This returns the undefined primitive value
  if (n == null) // if n is equal to null
  return array [0] // return the index 0 of that array
  if (n < 0) // If n is greater than 0
  return [] // return an empty array
  return array.slice(0, n) // The slice() method returns a shallow copy of a portion of an array into a new array object, selected from begin to end(end not included) where begin and end represent the index of the items in an array. The original array won't be modify.
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// WATCH A VIDEO OF THIS FOR BETTER EXPLANATION 
