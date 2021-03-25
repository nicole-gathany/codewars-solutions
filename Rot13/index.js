function rot13(message){
    //your code here
    let converterArray = []
    for(i=0; i<message.length; i++){
      converterArray.push(message.charCodeAt(i))
    }
   
    
    let finalLetters = converterArray.map(function(letters){
      if(letters+13>90&&letters+13<=103){
        return letters = 65+(letters+13-90-1)
      }
      else if(letters+13>122){
        return letters = 97+(letters+13-122-1)
      }
      else if(letters<65||letters>122){return letters}
      else if(letters>=91&&letters<=96){return letters}
      else return letters + 13;
      
    })
   console.log(finalLetters)
    
    let result = []
    
    for(let i=0; i<finalLetters.length; i++){
      result.push(String.fromCharCode(finalLetters[i]))
    }
   return result.join("")
    
    //i have to account for spaces and special characters
  }