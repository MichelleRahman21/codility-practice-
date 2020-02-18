// Write a JS program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

const num = window.prompt() // opens a blank prompt window so users can enter data, I do not see this variable being used in the function
const str = num.toString()// This method turns the number to a string
const result = [str[0]] // Takes the index cero of the result of that string

for (var x = 1; x < str.lenght; x++) {
  if(str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x])
  } else {
    result.push(str[x])
  }
}
console.log(result.join(''))
