function Node(data, nxt) {
    this.data = data;
    this.next = nxt;
  }
  function sortedInsert(head, data) {
    if(!head || data < head.data) return new Node(data, head);
    else {
      head.next = sortedInsert(head.next, data);
      return head;
    }
  }

  //i had something like this in mind
  //i failed to come up with something
  //i think the else is the key
  //and also head.next

  //call stack game
  //list is:
  //1->2->3->null
  //. . . . . . . . . .
  //example 1:
  //if we want to insert 0.5
  //is data less than head.data (0.5<1)
  //yes!
  //the return 0.5 -> list

  //example 2:
    //if we want to insert 1.5
    //step 1: is 1.5 less than head.data (1)? no
    //step 2: then head.next is sortedInsert(head.next, data);
    //head.next === 2 -> 3 -> null;
    //head.next.data === 2;
    //step 3: is 1.5 less than 2? ; 
    //yes return 1.5 -> 2 -> 3 -> null;
    //so head.next is 1.5 -> 2 -> 3 -> null 

    //1 -> head.next
    //so 1 -> 1.5 -> 2 -> 3 -> null 
