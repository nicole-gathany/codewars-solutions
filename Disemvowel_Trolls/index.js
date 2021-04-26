function disemvowel(str) {
  
    let array = str.split("");
    
    for(let i=0; i<array.length; i++){
      if(array[i]==="a" || array[i]==="e" || array[i] === "i" || array[i] === "o"|| array[i] === "u"|| array[i]==="A" || array[i]==="E" || array[i] === "I" || array[i] === "O"|| array[i] === "U"){
        array[i] = ""
      }
      
    }
    
    return array.join("");
  }