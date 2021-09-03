function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }


//also did this but it didn't pass the really big integers

// function mygcd2(x, y){
//     if(x === y) return x;
//     else if(x > y){
//         return mygcd2(x-y, y);
//     }
//     else if(y>x){
//         return mygcd2(y-x, x)
//     }
// }