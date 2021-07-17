// Return an array
function fizzbuzz(n)
{
  //given an integer 1 or more
  //return an array containing all of the integers between 1 and n, unless the number is 
  //divisible by 3 or 5
  //if divisible by 3 (and not 5 )then the value in its place should be "Fizz"
  //if divisible by 5 (and not 3) then the value in its place should be "Buzz"
  //if divisible by 15 then the value should be "FizzBuzz"
  //otherwise it should be the number
  //save an empty array
  let result = []
  //loop from 1 to n
  for(let i=1; i<=n; i++){
    if(i%3===0){
      if(i%5===0){
        result.push("FizzBuzz")
      }else {result.push("Fizz")
            }
    }
    if(i%5===0&&i%3!==0){result.push("Buzz")}
    else if(i%3!==0 && i%5!==0){result.push(i)}
  }
  return result;
}