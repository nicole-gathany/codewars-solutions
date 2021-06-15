//i feel like this solution is a 1 liner flex and i could have had a similar result with my solution but
// but i'm not sure how to use throw Error. I should have googled it
function getNth(node, index) {
  if (!node) throw new Error('Invalid node at ' + index);
  
  return (index === 0) ? node : getNth(node.next, index - 1);
}
