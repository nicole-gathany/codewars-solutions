function shoot(x){
  
  let petePoints = x.map(round => round[1]? round[0].P1.split("O")
                                                        .join("")
                                                        .length * 2: round[0].P1.split("O")
                                                        .join("").length)
                                                        .reduce((a, b) => a+b, 0);
  let philPoints = x.map(round => round[1]? round[0].P2.split("O")
                                                        .join("")
                                                        .length * 2: round[0].P2.split("O")
                                                        .join("").length)
                                                        .reduce((a,b) => a+b, 0);
 
  if(petePoints > philPoints) return  "Pete Wins!";
  else if ( petePoints < philPoints) return  "Phil Wins!";
  else if (petePoints === philPoints) return "Draw!";

}