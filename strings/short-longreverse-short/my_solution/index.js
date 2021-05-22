function shorter_reverse_longer(a,b){
    //params-two strings
    //return 
    //if a.length<b.length return a + b reverse + a
    //if b.length<a.length return b a reversed + b
    let shorter;
    let longer;
    let longerReversed = [];
      if(a.length < b.length){ 
        shorter = a;
        longer = b;
          }else if(a.length >= b.length){ 
            shorter = b;
            longer = a;
          };
    //console.log(shorter, longer);
    for(let i=longer.length; i>=0; i--){
      longerReversed.push(longer[i]);
    };
   // console.log(longerReversed.join(""))
    
     return shorter + longerReversed.join("") + shorter;
  };