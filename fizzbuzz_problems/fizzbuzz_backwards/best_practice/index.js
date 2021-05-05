function reverseFizzBuzz(array) {
    var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz")+1;
    var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz")+1;
  
  return [fizz,buzz];
  
  };

  //i really like how they did the best practice solution. it's like mine but with a lot less mess