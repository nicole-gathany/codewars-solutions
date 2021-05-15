function reverseFizzBuzz(array) {
    // your code
    //parameter is an array
    console.log(array)
    let fizz = []; 
    let buzz = [];
    let fizzbuzz = [];
    let result = []
    for(let i=0; i<array.length; i++){
      if(array[i]==="Fizz"){fizz.push(i+1)}
      else if(array[i]==="Buzz"){buzz.push(i+1)}
      else if(array[i]==="FizzBuzz"){fizzbuzz.push(i+1)}
    }
    console.log("fizz is " + fizz);
    console.log("buzz is " + buzz);
    console.log("fizzbuzz is" + fizzbuzz);
    if(fizzbuzz.length === 0 ){ result.push(fizz[0], buzz[0])}
    else if(fizz.length!==0 && fizzbuzz.length!==0){
      result.push(fizz[0], fizzbuzz[0]/fizz[0])
    } else if(fizz.length===0&&buzz.length===0&&fizzbuzz.length!==0){
      result.push(fizzbuzz[0], fizzbuzz[0])
    } else if(fizz.length===0&&buzz.length!==0&&fizzbuzz.length!==0){
      result.push( fizzbuzz[0], buzz[0])
    }
    
    return result;
  };