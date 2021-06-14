function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    // Your code goes here.
    let something = head;
    let endLength = 0;
    
    while(something !== null){
      endLength++
      something = something.next
    }
    return endLength;
  }
  
  function count(head, data) {
    // Your code goes here.
    let something = head;
    let count = 0;
     while(something !== null){
      if(something.data===data){
        count++
      }
      something = something.next
    }
    return count;
  }