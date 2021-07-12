
const repeats = arr => {
    return arr.filter(el => arr.indexOf(el)===arr.lastIndexOf(el)).reduce((acc, curr)=> acc + curr, 0)
   
   }