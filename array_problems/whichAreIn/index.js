function inArray(array1,array2){
    let result = []
    //...
  let i=0;
    //we want to know if array2 includes the words in array1 then return array1
    console.log(array1, array2)
    for(i=0; i<array2.length; i++)
    {
      for(let j=0; j<array1.length; j++){
        if (array2[i].includes(array1[j])===true && !result.includes(array1[j])){
          result.push(array1[j])
        } 
      }
    }
    return result.sort();
  }