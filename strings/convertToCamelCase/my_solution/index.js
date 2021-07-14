function toCamelCase(str){
  
    if(!str.includes("-") && !str.includes("_")) return str;
    
    else if(str.includes("_")){
      let arr = str.split("_");
      console.log(arr.slice(1))
      return arr[0] + arr.slice(1).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("")
      
    }
    else if (str.includes("-")){
      let arr = str.split("-");
      return arr[0] + arr.slice(1).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("")
    }
  
  }