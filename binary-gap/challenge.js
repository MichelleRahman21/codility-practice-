// Exercise: Suppose a positive integer N is given. Determine the binary representation of N, and find the longest subsequence of form 10*1 in this representation, where 0* stands for any number of zeros in the sequence. Examples: 11, 101, 1001, 10001 etc. Return the number of zeros in the longest sequence you found. If you didn’t find such a sequence, return zero.

// Convert N into a binary string
// Set a sequence counter to zero. Set a max sequence counter to zero
// Iterate over each digit of the binary representation
// a) if you find a zero, increase the sequence counter by one
// b) if you find one, compare the sequence counter to the maximum sequence counter and save the higher value in the maximum sequence counter. Then set the sequence counter to zero to read the upcoming sequence lengths.
// Once you finish, return the maximum sequence counter value.
//  THE WHY OF USING A TOSTRING METHOD : You may or may not know that integers have a toString method, and the first argument of toString is the base in which the number should be interpreted. Base 2 is binary, so all you need to do to convert an integer into its binary representation.

const n1 = 256, n2= 257;

n1.toString(2)

n2.toString(2)
// Now, let's say that this is a problem that needs to be solved with paper, we can approach this problem like this:
// 18 / 2 = 9, and the remainder is 0.
// 9 / 2 = 4, and the remainder is 1.
// 4 / 2 = 2, and the remainder is 0.
// 2 / 2 = 1, and the remainder is 0.
// 1 / 2 = 0, and the remainder is 1.
// Read the digits from bottom-up to get the result: 10010.
// now lets do that in code:
const inToBinary = N => {
  let result = '';
  while (N > 0) {
    result = (N % 2) + result;
    N = Math.trunc(N / 2); // The trunc function truncs the result so= 9.5 will be equal to 9
  }
  return result;
}

// Now determining the state space
function solution( N ) {
  let str = N.toString( 2 ),
  zeroCount = 0,
  result = 0;
  //NOW: iteration; we have to read eaxch digit of the solution one by one. The traditional way is with a for loop so:
  for (let i = 0; i < str.lenght; ++i) {
  }
  return result;
}
