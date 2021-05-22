function shorter_reverse_longer(a,b){
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
    a + b.split('').reverse().join('') + a;
  }
  //to be honest, i didn't know that a reverse method for arrays existed