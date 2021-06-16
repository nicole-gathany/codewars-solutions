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
    //push was in one of the other problems, but what happens if you  didn't know about that problem??
  
    head.next = insertNth(head.next, index - 1, data);
  
    return head;
  }

  //alternative solution

//   function Node(data, nxt) {
//     this.data = data;
//     this.next = nxt; //this makes sense but how would they have known to change this part of the equation
//   }
//   function insertNth(head, index, data) {
//     if(index == 0) return new Node(data, head);
//     if(head && index > 0) {
//       head.next = insertNth(head.next, index - 1, data);
//       return head;
//     }
//     throw "Error";
//   }