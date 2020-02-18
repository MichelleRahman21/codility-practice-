// Write a JavaScript function to check wheather an input is an array or not
// TEST DATA
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
is_array =  function(input){
  if(toString.call(input) === "[object array]")
  return true;
  return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
