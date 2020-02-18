// Cloning an array; ever since ES6 dropped, this has been the most popular method, it is a brief syntax and you'll find it incredibly useful when using libraries like React and Redux
// TEST DATA
// [1, 2, 4, 0]

// Let's put that example in code
const numbers = [1, 2, 4, 0]
const numbersCopy = [...numbers]
console.log(numbersCopy)
