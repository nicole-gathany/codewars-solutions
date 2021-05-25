//there were other solutions but I actually like my solution
//also none of the solutions were really up voted that much. Each one got 1 vote.

function carD(s, x){
    //s[0] cars on the left
    //s[1] cars on the right
    //x is my position as a cyclistconsole.log()
    for(let i=0; i<s[0].length; i++){
      if((s[0][i]==="\\"||s[0][i]==="/") && (s[1][i]==="\\"||s[1][i]==="/")){return "Super Smash!"}
  }
     if(s[0].includes("[")) return "Free Lambo on Left!";
    else if(s[1].includes("]")) return "Free Lambo on Right!";//if there's a '\' in s[0][x+0|1|2] (left in front of you) return 'Crash, Bang, Ouch!'.
    else if(s[0].substring(x, x+3).includes("\\")) return 'Crash, Bang, Ouch!';
    //if there's a '\' in s[1][x+0|1|2] (right in front of you) return 'Right Smash!'
    else if(s[1].substring(x, x+2).includes("\\")) return 'Right Smash!';
    //if there's a '/' in s[0][x+0|1] (left in front of you) return 'Knocked Off, Dust Yourself Down.'
    else if(s[0].substring(x, x+2).includes("/"))  return 'Knocked Off, Dust Yourself Down.'; 
    //if there's a '/' in s[1][x+0|1] (right in front of you) return 'Dammit!'
     else if(s[1].substring(x, x+2).includes("/")) return 'Dammit!';
    //lambo
    //console.log(s[0].includes("["))
    //not sure what the smash is
     return "Plain Sailing!"
  }