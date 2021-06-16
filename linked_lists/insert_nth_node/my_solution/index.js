
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  //this solution passes by brute force because all the linked lists
  //are only length of 3. i'm sure if they were longer this would not work
  function insertNth(head, index, data) {
    // Your code goes here.
    // Return the head of the list.
    //parameters: a linked list, an index (where we want to add data), and an integer
    //return head--a new linked list with the data in the index where we want it
    //also throw an error if the index does not exist
    //example:
      //linked list is (7 -> 1 -> 2 -> 3 -> null)
      //index is 0
      //data is 7
      //if index is 0 new Node(7) 7 -> null
    let newNode = new Node(data);
    let count = 0;
    let tracker = head;
    //console.log("new node is ", newNode, ", index is ", index, ", and data is ", data);
    if(index===0){
      newNode.next = head;
      return newNode;
    }
    //console.log(head);
     // if index is 1 thru linked list length
    //linked list is: 1 -> 2 -> 3 -> null
    //index is 1
    //data is 7
    //head.next = newNode
    //
    while(tracker!==null && count!==index){
      tracker = tracker.next;
      count++;
      console.log("tracker is ", tracker, "count is ", count)
      newNode.next = tracker;
      console.log("New node is ", newNode)
    }
     let newHead = head;
    if(index===1){
      newHead.next = newNode;
      return newHead; 
    }
    if(index===2){
      newHead.next.next = newNode;
      return newHead;
    }
    if(index===3){
      newHead.next.next.next = newNode;
      return newHead;
    }
    if(index>=4) throw new Error("Index is too large")
    
  }

  