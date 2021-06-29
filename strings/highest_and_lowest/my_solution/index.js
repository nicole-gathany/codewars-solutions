function highAndLow(numbers){
    let array = numbers.split(" ").sort((a,b) => a-b);
    return array[array.length-1] + " " + array[0];
  }