function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

//so bold of them to just alter the numbers variable
//i need to get used to using Math.max()