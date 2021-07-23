function greatestCommonFactor(ar){
    const gcf = (a,b) => !b ? a : gcf(b, a%b);
    return ar.reduce((a,e) => gcf(a,e));
  }