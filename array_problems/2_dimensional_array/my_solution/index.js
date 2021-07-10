function matrix(array) {
  
    //an array of arrays
    //return a new array of arrays where on the main diagnol 
    //the negative integers are changed to 0 
    //and all numbers 0 and above are changed to 1
    //can mutate but better not to
    //making a copy of the array
    let result = array.concat();
    
    //loop thru the result
    //change result[i][i]: result[0][0], result[1][1], result[2][2]...
    
    for(let i=0; i<result.length; i++){
      if(result[i][i]<0){
        result[i][i]=0;
        
      }
      else if(result[i][i]>=0){
        result[i][i]=1
      }
      console.log(result, " is the new array")
    }
    
    return result;
      
  }
  
  
  // [[0, 4, 5, 9],
  //  [5, 0, -7, 4],
  //  [3, 5, 1, -9],
  //  [1, 5, -7, 0],
  
  //  i: 0:0, 1:1, 2:2, 3:3, 4:4
  // ]