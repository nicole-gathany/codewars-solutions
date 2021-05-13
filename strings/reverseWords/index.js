function spinWords(string){
    //TODO Have fun :)
    //Parameters Return Examples Pseudo-Code
    //parameter is string
    //return a new string with words with length>=5 reversed
      let array = string.split(" ");
      let result = [];
      for(let i=0; i<array.length; i++){
        console.log(array[i].length)
        if(array[i].length>=5){
          //reverse the word
          result.push(array[i].split("").reverse().join(""));
        }
        else if(array[i].length<5){
          //keep the word the same
          result.push(array[i]);
        }
      }  
    return result.join(" ");
  }