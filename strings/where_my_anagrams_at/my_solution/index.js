function anagrams(word, words) {
    //params: a string and an array of strings
    //return the stings in the array that are annagrams of the first string
    //i think it would be really cool to sort the word and sort 
    //all strings and if they equal the word sorted return those strings in an array
    //console.log(word.split("").sort().join(""));
    //console.log(words.map(a => a.split("").sort().join("")))
    let wordAlphaOrder = word.split("").sort().join("");
    let list = words.map(a => a.split("").sort().join(""));
    let array = [];
    for(let i=0; i<list.length; i++){
      if(list[i]===wordAlphaOrder){
        array.push(i);
      }
    }
    //console.log(array);
    let result = [];
    for(let i=0; i<array.length; i++){
      result.push(words[array[i]])
    }
    //console.log(result)
    return result;
  }