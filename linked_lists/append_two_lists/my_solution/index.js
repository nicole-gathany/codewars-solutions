function Node(data) {
    this.data = data;
    this.next = null;
  }
  
function append(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.
    //param: 2 linked lists
    //return 1 linked lists with the two linked lists conntect
    //examples: 
    //given listA: 1 -> 2 -> 3 -> null and listB: 4 -> 5 -> 6 -> null
    //return: 1 -> 2 -> 3 -> listB
   if(!listA && !listB) return null;
    else if(listA && !listB) return listA;
    else if(!listA && listB) return listB;
    else if(listA && listB) {
      let count = 0;
      let head = listA;
      while(head!==null){
        head = head.next;
        count++
        console.log(count)
      }
      if(count===1){
        listA.next = listB;
      }
      if(count===2){
        listA.next.next = listB;
      }
      if(count===3){
        listA.next.next.next = listB;
      }
      return listA;
    } 
  }

  