function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    // Your code goes here.
    // Remember to return the head of the list.
    //parameters:
      //1. a sorted list
      //2. a data point
    //return a new sorted list with the data point inserted 
    //in the place where it is in ascending order
    //examples:
      // example 1:
      // sorted list is 1 -> 2 -> 3 -> null
      // data is 4
    //return 1 -> 2 -> 3 -> 4 -> null
    //-----------------------------
   //example 2
        //1 -> 7 -> 8 -> null 
        //data to insert is 5
        //1 -> 5 -> 7 -> 8 -> null
    //example 3
    //console.log(head);
    let insert = new Node(data);
    console.log(insert);
    
    if(head===null) return insert; //head is an an empty list
    
    console.log(data);
    console.log(head.data>data);
    
    if(head.data>data){ //to insert at the the beginning of the list
      insert.next = head;
      return insert;
    }
    let tracker = head;
    let counter = 0; 
    while(tracker!==null && tracker.data<data){
      tracker = tracker.next;
      counter++;
      console.log("tracker is ", tracker)
      console.log("counter is ", counter)
    }
    
    if(counter===1){
      insert.next=tracker;
      head.next=insert;
      console.log(head)
    }
    if(counter===2){
      insert.next = tracker;
      head.next.next = insert;
    }
    if(counter===3){
      insert.next = tracker;
      head.next.next.next = insert;
    }
    return head;
    
  }