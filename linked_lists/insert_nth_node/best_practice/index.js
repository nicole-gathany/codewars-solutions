//i was concerned about my solution even though it passed
//it looks like this solution does what mine does in a way
//but with recursive function 
//so this would pass regardless of how long the linked list it will pass
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function insertNth(head, index, data) {
    if (index == 0) {
      return push(head, data);
    }
  
    head.next = insertNth(head.next, index - 1, data);
  
    return head;
  }