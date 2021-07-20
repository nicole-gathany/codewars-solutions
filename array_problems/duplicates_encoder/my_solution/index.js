function duplicateEncode(word){
    // ...
  //given string
  //return a string
  //if the character in the string has duplicates The character should be )
  //if the character has no duplicates then the character should (
  let obj = {};
  word = word.toLowerCase()
  for(let i=0; i<word.length; i++){
    if(!obj[word[i]]){
      obj[word[i]]=1;
    } else if(obj[word[i]]){
      obj[word[i]]++
    }
  }

  
  return word.split("").map(letter => obj[letter]>1? ")" : "(").join("");
  
}
