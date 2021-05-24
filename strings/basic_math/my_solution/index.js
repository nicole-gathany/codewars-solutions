function calculate(str) {
    //your code here...
      //console.log(str.split("plus").map(string => string.includes("minus")? string.split("minus").map(secondString => parseInt(secondString, 10)).reduce((a, b) => a-b).toString(): parseInt(string, 10)))
    if(!str.includes("minus")){
      return str.split("plus").map(number => parseInt(number, 10)).reduce((a, b) => a+b, 0).toString();
      } else if(!str.includes("plus")){
            return str.split("minus").map(number => parseInt(number, 10)).reduce((a, b) => a-b).toString();
      } else if(str.includes("plus") && str.includes("minus")){
        return str.split("plus").map(string => string.includes("minus")? string.split("minus").map(secondString => parseInt(secondString, 10)).reduce((a, b) => a-b): parseInt(string, 10)).reduce((a,b)=> a+b, 0).toString();
      }
    }