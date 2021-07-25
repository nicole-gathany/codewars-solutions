function last(x){
    return x.split(" ").sort((a, b)=> b[b.length-1] < a[a.length-1]);
 }

 //i honestly didn't know sort could do this