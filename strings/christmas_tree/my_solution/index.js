function christmasTree(height) {
    if(height===0)return ""
    if(height===1)return "*"
    let result = ""
    let lengthOfEachLine = (height*2)-1;
    
    for(let i=0; i<height; i++){
      //each line will have (i*2)+1 asterics 
      let numberOfAst = (i*2)+1;
      let spaces = " ".repeat((lengthOfEachLine-numberOfAst)/2);
      result += spaces +"*".repeat(numberOfAst)+ spaces+"\n"
      
    }
  
    return result.substring(0, result.length-1);
    
  }
  
  
  //given an integer between 0 and 100
  //return a tree of the integer's height
  //if h==1
  //*
  
  //if 5
  //0    * 1
  //1   *** 3
  //2  ***** 5
  //3 ******* 7
  //4********* 9
  
  //pad with spaces so each line is the same length;
  //length of each line (height*2)-1
  