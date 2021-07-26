class Song{
  constructor(title, artist){
    this.title = title;
    this.artist = artist;
    this.listeners = []
  }
  
  
  howMany(listeners_current){
   
    
    let newListeners = 0;
    for(let i=0; i<listeners_current.length; i++){
      if(!this.listeners.includes(listeners_current[i].toLowerCase())){
        this.listeners.push(listeners_current[i].toLowerCase());
        newListeners++
      }
    }
    return newListeners;
  }
  
  

  
}

// code here