function abbreviate(string) {
  // ...
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let punctuationObj = {};
  let punctuationArray = []
  let result = ""
  
  let placeHolder = string.split("").map(el => !alphabet.includes(el.toLowerCase()) ? el.replace(el, " ") : el).join("");
  if(placeHolder.split(" ").length===1){
    if(placeHolder.length>=4){
      return string[0] + (string.length-2).toString() + string[string.length-1];
    }
    else return string;
  }
  
  for (let i=0; i<string.length; i++){
      if(!alphabet.includes(string[i].toLowerCase()) && string[i]!==" "){
        punctuationArray.push([`${string[i-1] + " " + string[i+1]}`, `${string[i-1] + string[i] + string[i+1]}`])
      }
  }
  
  console.log(punctuationArray)
  for(let i=0; i<string.length; i++){
    if(!alphabet.includes(string[i].toLowerCase()) && string[i]!==" " && !punctuationObj[string[i]]){
      punctuationObj[string[i]] = [`${string[i-1] + string[i] + string[i+1]}`, `${string[i-1] + " " + string[i+1]}`];
    }
    else if( punctuationObj[string[i]] ){
      punctuationObj[string[i]].push(`${string[i-1] + string[i] + string[i+1]}`, `${string[i-1] + " " + string[i+1]}`)
    }
  }
  //no punctuation
  result = placeHolder.split(" ").map( el => el.length >= 4 ? el[0] + (el.length-2).toString() + el[el.length-1] : el).join(" ");

  if(punctuationArray.length===0){ 
    //console.log("hello")
    //console.log(placeHolder.split(" ").map( el => el.length >= 4 ? el[0] + (el.length-2).toString() + el[el.length-1] : el));
    return result;
  }
  else if(punctuationArray.length===1){
    console.log(punctuationArray[0])
    return result.replace(punctuationArray[0][0], punctuationArray[0][1])
  }
  
   else if(punctuationArray.length>1){
  punctuationArray.forEach(el => result = result.replace(el[0], el[1]))
    
     }
    return result;
  
  console.log(placeHolder.split(" ").map( el => el.length >= 4 ? el[0] + (el.length-2).toString() + el[el.length-1] : el));
  
  console.log(Object.keys(punctuationObj).length)
  
  console.log(punctuationObj)
}

//string
  //return a string with abrevations
  //if the letters are the length of found and greater
  //First letter, Number of letters in between, last letter
  //edge cases:
    //puncuations remain in place
    //, and space or . and space because space is not part of any letter
  //creating another string that replaces all non letters with space, then trims,
  //then creates array with space as delimiter 
  //maps through the array and same that any element whose lenght is four or more
  // is `${el[0]}${el.length-2}el[0].slice(-1)`
  //join the array back together
  //save the punctuation that we lost