// Given an array of integers, return the difference between the largest and smallest integers in the array.
//
// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18
//
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24
//
// difference([4, 17, 12, 2, 10, 2]) ➞ 15
// Notes
// N/A

function difference(nums) {
	return Math.max(...nums) - Math.min(...nums)
}
// Spread erator creates a new array with the maximum element of the array and will throw that result. Same for the minimun array and all that it is left is to make the substraction so that we get the difference of the array
