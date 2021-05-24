//there were a few best practices but i liked this one the best
// i didn't know about eval before
function calculate(str) {
    return eval(str.split("plus").join("+").split("minus").join("-")).toString();
  //MDN actually doesn't recommend using eval so will look and see if other solutions don't use it
  }
