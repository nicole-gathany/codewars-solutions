//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {
    // TODO: Program me
    //params an array with booleans, integers, and strings
    //return a new array with all the items in the array in the same order
    //except the zeros which will be at the end
    //examples:
    //[false,1,1,2,1,3,"a", 0, 0]
    //[1,2,1,1,0,3,0,1, 0, 0]
    // 0 1 2 3 4 5 6 7 8 9
    //this code made the code last forever
    console.log(arr)
    let count = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]===0 || arr[i]==="0"){
        arr.splice(i, 1);
        i--; // so that it will go back and not skip zeros that are next to each other
        count++;
      }
    }
    
   for(let i=0; i<count; i++){
     arr.push(0);
   }
    return arr;
  }