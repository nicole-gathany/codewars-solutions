function reverseWords(str){
    let result = []
    let array = str.split(" ");
    for(let i=array.length-1; i>=0; i--){
      result.push(array[i]);
    }
    return result.join(" "); // reverse those words
  }