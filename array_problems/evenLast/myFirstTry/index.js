function evenLast(numbers) {
    // Good luck
    if (numbers.length===0) return 0;
    else return numbers[numbers.length-1] * numbers.reduce((total, currentVal, index) => index%2===0? total + currentVal : total +0);
  }