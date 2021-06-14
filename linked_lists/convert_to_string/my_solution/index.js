function stringify(list) {
    // Write your code here
    //parameter: a linked list
    //return a string rep of the linked list
    //edge cases the "null/NULL"
    console.log(list)
    let result = ""
    let head = list;
    while(head!==null){
      result += head.data + " -> ";
      head = head.next;
    }
      return result + "null";
  }