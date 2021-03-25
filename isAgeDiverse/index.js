function isAgeDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    let searchArray = []
    
    for(let i=0; i<list.length; i++){
      if(list[i].age>=10 && list[i].age<20){
        searchArray.push(10);
      }
      else if (list[i].age>=20 && list[i].age<30){
        searchArray.push(20);
      }
      else if (list[i].age>=30 && list[i].age<40){
        searchArray.push(30);
      }
      else if(list[i].age>=40 && list[i].age<50){
        searchArray.push(40)
      }
      else if(list[i].age>=50 && list[i].age<60){
        searchArray.push(50);
      }
      else if(list[i].age>=60 && list[i].age<70){
        searchArray.push(60)
      }
      else if(list[i].age>=70 && list[i].age<80){
        searchArray.push(70)
      }
       else if(list[i].age>=80 && list[i].age<90){
        searchArray.push(80)
      }
       else if(list[i].age>=90 && list[i].age<100){
        searchArray.push(90)
      }
      else if(list[i].age>=100){
        searchArray.push(100)
      }
      
      
    }
    console.log(searchArray)
    searchArray.sort((a,b)=> a-b);
    
    let noDupes = [...new Set(searchArray)]
   
    let testArray = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
  
   return noDupes.length === testArray.length && noDupes.every((value, index)=> value === testArray[index])
  
  }