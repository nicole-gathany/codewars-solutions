function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  //this worked for me but it's telling me invalid indexes should throw an error
  //for getNth(list, 100) where list is 1 -> 2 -> 3 -> null, it thows an error
  //not sure what i'm doing wrong but i'm going to look at the solution
  function getNth(node, index) {
    // Your code goes here.
    //console.log(node, index);
    
    let count = 0;
    let head = node;
    //console.log(node.data)
    if(index===0) return node;
    while(head !== null){
      head = head.next
      //console.log(count)
      count++
      //console.log(head)
      if(count === index) return head;
    }
  
  }
  