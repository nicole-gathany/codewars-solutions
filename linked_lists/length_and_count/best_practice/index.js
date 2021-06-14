//best practice solution is very similar to mine. there's another one that has fewer lines of code but i'm not sure i'm interested in learning 1-liners for linked lists yet
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    let length = 0;
    let current = head;
    
    while ( current != null ) {
      current = current.next
      length++;
    }
    
    return length;
  }
  
  function count(head, data) {
    let current = head;
    let count = 0;
    
    while ( current != null ) {
      if ( current.data === data )
        count++;
        
      current = current.next;
    }
    
    return count;
  }

  

  //alternative
//ok actually this alternative is kinda cool. not gonna lie
//   function Node(data) {
//     this.data = data
//     this.next = null
//   }
  
//   function length(head) {
//     return head ? 1 + length(head.next) : 0
//   } //it feels recursive in a way but i guess that's a way to traverse through linked lists
  
//   function count(head, data) {
//     if (!head) return 0
//     return (head.data === data ? 1 : 0) + count(head.next, data)
//   }