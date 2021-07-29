function alphabetWar(fight)
{
  let points = {
    "w": 4,
    "p": 3,
    "b": 2, 
    "s": 1,
    "m": -4,
    "q": -3,
    "d": -2,
    "z": -1
  }
  
  let finalScore = fight.split("").map(letter => Number.isInteger(points[letter]) ? points[letter] : 0 )
                                  .reduce((acc, score) => acc + score, 0)
 
  if(finalScore > 0) return "Left side wins!";
  else if(finalScore < 0) return "Right side wins!"
  
   return "Let's fight again!";
}