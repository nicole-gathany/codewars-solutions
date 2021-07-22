function alphabetWar(fight)
{
    let leftSide =  "tsbpw";
    let rightSide = "jzdqm";
    let leftScore = 0;
    let rightScore = 0;
  //Fight: pjbdtwa
  //p-3 for left
  //j-0 for right
  //b-2 for left
  //d-2 for right
  //t-0
  //w-4 for left
  //a-nothing, no power
// Expected result: Left side wins!
 
  
  
    for(let i=0; i<fight.length; i++){
      if(leftSide.includes(fight[i])){
        if(fight[i-1]!=="j" && fight[i+1]!=="j"){
           leftScore += leftSide.indexOf(fight[i]);
        } else if(fight[i-1]==="j" && fight[i+1]==="t"){
            leftScore += leftSide.indexOf(fight[i]);
        } else if(fight[i-1]==="t" && fight[i+1]==="j"){
          leftScore += leftSide.indexOf(fight[i]);
        } else if(fight[i-1]==="j" && fight[i+1]!=="t"){
          rightScore += leftSide.indexOf(fight[i]);
        } else if(fight[i+1]==="j" && fight[i-1]!=="t"){
            rightScore += leftSide.indexOf(fight[i]);
        }
       
      } else if(rightSide.includes(fight[i])){
          if(fight[i-1]!=="t" && fight[i+1]!=="t"){
            rightScore += rightSide.indexOf(fight[i]);
          } else if(fight[i-1]==="j" && fight[i+1]==="t"){
             rightScore += rightSide.indexOf(fight[i]);
          } else if(fight[i-1]==="t" && fight[i+1]==="j"){
             rightScore += rightSide.indexOf(fight[i]);
          } else if(fight[i+1]==="t" && fight[i-1]!=="j"){
            leftScore += rightSide.indexOf(fight[i]);
          } else if(fight[i+1]!=="j" && fight[i-1]==="t"){
            leftScore += rightSide.indexOf(fight[i]);
          }
        
      }
    }
 
    //if string includes t but not j, change all the letters to its leftside counterpart
    if(leftScore > rightScore) return "Left side wins!";
    else if(rightScore > leftScore) return "Right side wins!"
    else if (leftScore === rightScore) return "Let's fight again!"
   
    //if string includes j but not t change all the letters to its rightside counterpart
}