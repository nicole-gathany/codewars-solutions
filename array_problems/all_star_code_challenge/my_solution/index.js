function addArrays(array1, array2) {
    //code here
      //parameters: 2 arrays
      //return 
      //if the arrays are not equal in length
      let result = []
      if(array1.length!==array2.length){
        //return "Error"
       throw "Error"
      }
      else {
        for(let i=0; i<array1.length; i++){
          //add [array1[0]+array2[0], array1[1]+array2[1]]
          result.push(array1[i]+array2[i]);
        }
      }
     return result;
    }