function shortcut(string){
  
    let vowels = "aeiou"
    
    return string.split("").filter(letter => !vowels.includes(letter)).join("")
    
  }