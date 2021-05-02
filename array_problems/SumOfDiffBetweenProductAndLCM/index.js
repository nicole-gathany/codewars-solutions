function gcd(a, b){
    if(a === 0)
      return b
     return gcd(b%a, a)
 }
 
 function lcm(a, b){
   if(a===0|| b===0){return 0}
   else return Math.abs(a*b)/gcd(a, b)
 }
 
 
 function sumDifferencesBetweenProductsAndLCMs(pairs){
   //function lcm(pairs) = Math.abs(pairs[i][0], pairs[i][1])/gcd(pairs[i][0], pairs[i][1])
   if(pairs.length ===0){return 0}
   let result = []
   
   //your code here
    let product = pairs.map(a => a.reduce((total, currentVal) => total * currentVal) );
    let lowCommonMult = pairs.map(a => a.reduce((total, currentVal) => lcm(total, currentVal)))
   for(let i=0; i<pairs.length; i++){
     result.push(product[i]-lowCommonMult[i])
   }  
   
   return result.reduce((total, curr)=> total + curr)
 }