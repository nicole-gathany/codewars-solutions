function switcher(x){
    //parameter is an array of strings
    //the strings are usually numbers.
    //sometimes they are "!", "?", or " "
    //we want to return a string in which a letter corresponds to a number
    //examples
   //1 is 26
   //2 is 25
   //3 is 24
   //abcdefgh
   let reverse = ["z", "y", "x", "w", "v", "u", "t","s", "r","q","p","o","n","m","l", "k", "j", "i", "h", "g","f","e","d","c","b","a", "!", "?", " " ];
    let numbers = x.map(number => parseInt(number, 10));
    return numbers.map(number => reverse[number-1]).join(""); 
  }