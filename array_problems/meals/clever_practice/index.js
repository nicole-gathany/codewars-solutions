//my solution is very similar to the best practice solution
//but this is a clever solution i wanted to understand
const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;
