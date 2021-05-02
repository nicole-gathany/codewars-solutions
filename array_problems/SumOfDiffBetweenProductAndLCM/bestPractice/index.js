function sumDifferencesBetweenProductsAndLCMs(pairs){
    const gcd = (x,y) => x == 0 ? y : gcd(y % x, x)
    const lcm = (x,y) => x * y == 0 ? 0 : x * y / gcd(x,y)  
    return pairs.map(c => c[0] * c[1] - lcm(c[0],c[1])).reduce((a,c) => a + c, 0);
  }

  //very similar to mine but uses ternary operators