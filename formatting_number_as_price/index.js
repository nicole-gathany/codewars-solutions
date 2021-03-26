var numberToPrice = function(number) {
    //first it has has to be a number?
     let start = number.toString().split(".");
     console.log(start)
     if(number>=0||number<=0){
       //i have to account for negative numbers too which is annoying!!!
        let arr = start[0].split("")
      console.log(arr)
         if(arr.length%3>0){
           for(i=arr.length-3; i>0; i-=3){
             arr.splice(i,0, ",")
           }
           console.log(arr.join(""))
         }
       
       
     
     if(start.length === 2){
      console.log(start[0].length)
       console.log(start[0].length%3)
     
       
     }
      else if(start.length==1){
       return start[0] + ".00"
     }
       }
     else  return "" + Number(number)
   }