function reverseNumber(n) {
    if(n.toString().length===1) return n;
    else if(n>0) return parseInt(n.toString().split("").reverse().join(""));
    else if(n<0) return parseInt("-" + n.toString().substring(1).split("").reverse().join(""));
  }