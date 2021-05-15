// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    // Good luck
    if (numbers.length===0) return 0;
    else return numbers[numbers.length-1] * numbers.reduce((total, currentVal, index) => index%2===0? total + currentVal : total +0);
  }