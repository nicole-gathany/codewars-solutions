String.prototype.camelCase=function(){
    //your code here
  //  console.log(this.split(" "));
  //   console.log(typeof this)
    let string = this.split(" ");
    return string.map(word => word? word[0].toUpperCase() + word.slice(1): word ).join("");
    
  }