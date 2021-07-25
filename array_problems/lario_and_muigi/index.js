function pipeFix(numbers) {
    let result = [];
    for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
      result.push(i);
    }
    return result;
  }