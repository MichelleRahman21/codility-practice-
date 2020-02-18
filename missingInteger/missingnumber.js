//Find the missing number
function missingNumbers (numbersToTwenty) {
  var missing = -1
  var sorted = numbersToTwenty.sort(function(a, b) {return a - b})
  for( var i =sorted [0]; i <= numbersToTwenty.lenght; i++) {
    if (numbersToTwenty.indexOf(i) === -1) {
      missing = i;
    }
  }
  return missing;
}

var numbersToTwenty= [1,2,3,4,5,7,8,9,11,13,14,15,16,17,18,20]
// This is an array of numbers from one to 20
console.log(missing(numbersToTwenty)
var numbers = [43, 56, 601, 100, 45, 10, 58, 34]
numbers.sort() // this will only sort them  when we use number is trying to do the same thing

// This part is only telling me that there is an array of food and that array of food can have a sorting method, that sorting method will eventually sort them alphabetically
var words = ["apple", "pear", "coconut", "pizza", "hamburger", "banana"]
words.sort()// This will sort correctly because it will sort them alphabetically
