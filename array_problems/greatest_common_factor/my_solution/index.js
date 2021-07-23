function greatestCommonFactor(array) {
    // your code here
    
    //the highest common factor is not going to more than the minimum number
    let minimum = Math.min(...array) //smallest number in array
    let smallFactorsMin = [1]; //smallest factors
    let bigFactorsMin = [minimum];
    let num = minimum;
    
    for(let i=2; i<num; i++){ //looking for all the factors of the smallest number
      if(minimum%i===0){
        smallFactorsMin.push(i);
        bigFactorsMin.push(minimum/i)
      }
      num = minimum/i; // this helps us to avoid checking every single number between 2 and the minimum
    }
    
    
    let factorsOfMin = smallFactorsMin.concat(bigFactorsMin //bringing all the factors into one array
                        .filter(a=> !smallFactorsMin.includes(a))) // taking out duplicates
                            .sort((a, b) => b-a); //sorting from biggest to smallest
    
    for(let i=0; i<factorsOfMin.length; i++){
      if(array.every(num => num%factorsOfMin[i]===0)){ return factorsOfMin[i]} //returning the largest factor of the smallest number that is a factor of all of the numbers inthe array.
    }
  };