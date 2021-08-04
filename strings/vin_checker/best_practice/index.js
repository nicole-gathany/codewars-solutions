const checkVin = (vin) => {
  if(vin.length !== 17 || vin.includes('I') || vin.includes('O') || vin.includes('Q')) return false
  
  const VIN = {
    A: 1, B: 2, C: 3, D: 4,
    E: 5, F: 6, G: 7, H: 8,
    I: false, J: 1, K: 2, L: 3,
    M: 4, N: 5, O: false, P: 7,
    Q: false, R: 9, S: 2, T: 3,
    U: 4, V: 5, W: 6, X: 7,
    Y: 8, Z: 9
  }
  const WEIGHTS =  [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2]
  
  const decoded = vin.split('').map(d => !isNaN(d) ? d : VIN[d])
  
  const sum = decoded.reduce((acc,cur,index)=>{
    acc += cur * WEIGHTS[index]
   return acc
  },0)
 
  return vin[8] == (+sum % 11 < 10 ? +sum % 11 : 'X');
  
};