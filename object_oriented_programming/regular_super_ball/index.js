var Ball = function(ballType) {
  // your code goes here
  console.log(typeof ballType !== "undefined")
  this.ballType = typeof ballType !== "undefined" ?  ballType : "regular";
  
};