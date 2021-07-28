function alphabetWar(fight)
{
    //obj
  let points = {
    "w": -4,
    "p": -3, 
    "b": -2,
    "s": -1,
    "m": 4,
    "q": 3,
    "d": 2,
    "z": 1
  }
  
  
 let score = fight.split("")
                  .map((letter, index, array)=> array[index-1]!=="*" && array[index+1]!=="*"? points[letter] : 0 )
                  .filter(letter => letter)
                  .reduce((a,b)=> a+b, 0);
  
  if(score ===0 ) return "Let's fight again!";
  else if (score>0) return "Right side wins!"
  else {return "Left side wins!";}
  
}