function commas(num){
  //Add some commas!
  //given a number
  //return a string with where the number has a comma where it needs it
  // console.log(Math.round(num));
    let result = [];
    let threeDecimals = ""
  if(num<1000 && num>-1000){
    if(Math.round(num) === num) return num.toString();
    else if (Math.round(num) !== num) {
      console.log(num.toString().split(".")[1])
      console.log(num.toString().split(".")[1].length>3)
      if(num.toFixed(3).toString().slice(-1)==0){
        return num.toFixed(2).toString();
      }
      return num.toFixed(3).toString();
    }
  }
  
 
  
  else if(num>=1000){
    let decimalParse = num.toString().split(".");
    let reverseWhole = decimalParse[0].split("").reverse();
      for(let i=0; i<reverseWhole.length; i++){
        if(i%3!==0 || i===0){
           result.push(reverseWhole[i])
           }
        else {
          result.push(",",  reverseWhole[i])
        }
      }
   
      result = result.reverse().join("");
    
     if(decimalParse.length===2){
      //result += "." +  decimalParse[1];
       threeDecimals = num.toFixed(3).split(".").slice(-1);
         if(num.toFixed(3).split(".").slice(-1)){
           console.log(num.toFixed(3).split(".").slice(-1), " is the 3 decimals")
           console.log(threeDecimals[0].slice(-1))
           if(threeDecimals[0].slice(-1)!=="0"){
             result += "." + threeDecimals[0]
           } else if(threeDecimals[0].slice(-1)==="0"){
              result += "." + threeDecimals[0].slice(0, 2)
            }
          }
      
    }
 } 
    else if(num<=-1000){
      let decimalParse = num.toString().split(".");
      let reverseWhole = decimalParse[0].split("").slice(1).reverse()
      console.log(reverseWhole);
      for(let i=0; i<reverseWhole.length; i++){
        if(i%3!==0 || i===0){
           result.push(reverseWhole[i])
           }
        else {
          result.push(",",  reverseWhole[i])
        }
      }
       result = "-" + result.reverse().join("");
      
      if(decimalParse.length===2){
      //result += "." +  decimalParse[1];
       threeDecimals = num.toFixed(3).split(".").slice(-1);
         if(num.toFixed(3).split(".").slice(-1)){
           console.log(num.toFixed(3).split(".").slice(-1), " is the 3 decimals")
           console.log(threeDecimals[0].slice(-1))
           if(threeDecimals[0].slice(-1)!=="0"){
             result += "." + threeDecimals[0]
           } else if(threeDecimals[0].slice(-1)==="0"){
              result += "." + threeDecimals[0].slice(0, 2)
            }
          }
      }
  }
   
  return result;
}
//1 return "1"
//100 return "100"
//1000 reutrn "1,000"