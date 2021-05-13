function plant(seed, water, fert, temp){
    //your code here
     //parameters:
     //seed is a string, water is an integer, fert is an integer and temp is an integer
     // - is the length of the stem
     // flowers are symbols
     let flower = []
     let result = []
     for (let i=0; i<water; i++){
       flower.push("-")
     }
     
     if(temp >=20 && temp <=30){
         for(let i=0; i<fert; i++){
       flower.push(seed)
     }
      for (let i=0; i<water; i++){
       result.push(flower.join(""))
     }
       
     }
   
     else{
       
       for(let i=0; i<water; i++){
         result.push(flower.join(""))
       }
       result.push(seed)
     }
     
     
     
     return result.join("")
   }