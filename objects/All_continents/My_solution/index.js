function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  let africa = 0;
  let americas = 0;
  let asia = 0;
  let europe = 0; 
  let oceania = 0;
  
  
  
  for(let i=0; i<list.length; i++){
    if(list[i].continent === 'Africa'){africa++}
    else if(list[i].continent === "Americas"){americas++}
    else if(list[i].continent === "Asia"){asia++}
    else if(list[i].continent === "Europe"){europe++}
    else if(list[i].continent === "Oceania"){oceania++}
  }
  
  if(africa===0||americas===0||asia===0||europe===0||oceania===0)return false;
  else return true;
}