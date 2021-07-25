function vowelBack(s){
    //make a few strings
    //all letters
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    //vowels sans exception aiu
    let vowels = "aiu";
    //co -> move back one place
    let code = "code"
    //separte conditionals for d and e
    //
    let original = s.split("");
    console.log(s)
    //make s and array
    let arr = s.split("")
    //loop through s
    for(let i=0; i<arr.length; i++){
      //if it's not vowels or c or d
      if(vowels.indexOf(s[i])===-1 && code.indexOf(s[i])===-1){
        if(alpha.indexOf(s[i])+9>25){
           arr[i] = alpha[alpha.indexOf(s[i])+9-26];
        }
        else {
          arr[i] = alpha[alpha.indexOf(s[i])+9];
        }
      }
      else if(vowels.includes(s[i])){
        if(alpha.indexOf(s[i])-5<0){
          arr[i] = alpha[26+alpha.indexOf(s[i])-5];
        }
        else{
          arr[i] = alpha[alpha.indexOf(s[i])-5]
        }
      } else if (s[i]==="c"|| s[i]==="o"){
         arr[i] = alpha[alpha.indexOf(s[i])-1];
      }
      else if(s[i]==="d"){
        arr[i]="a"
      }
      else if(s[i]==="e"){
        arr[i]="a"
      }
    }
    
    for(let i=0; i<arr.length; i++){
      if(code.includes(arr[i])){
        arr[i]=s[i]
      }
    }
    console.log(arr)
    
    return arr.join("")
    //change to index of letters index
    //if the index+9 is more than s.length then index is s.length-newIndex
    
    //if it's aiu then newIndex is alpha.indexOf(s[i])-5. if i-5 is negative then newIndex is s.length+(i-n)
    
    //if it's c or o move new index is alpha.indexOf(s[i])-1.
    
    //d: alphs.indexOf(s[i])-3
    //e: alpha.indexOf(s[i])-4
    
    //if in new string any letters are code then change back to original
    
    //join it and return 
    
  
  }  
  