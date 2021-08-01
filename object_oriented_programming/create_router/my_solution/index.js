var Router = function()
{
  //router.bind and router.runRequest more than once in a new Router
 this.bind = function(route, method, fn){
   //url, http method (both strings), 
   //function
   if(!this.route){
     this.route = [route];
   }
   else if(this.route.includes(route) && this.method.includes(method)){
     this.fn = [fn()]
   }
   else if(this.route && this.method){
     if(!this.route.includes(route) || !this.method.includes(method)){
       this.route.push(route);
       this.method.push(method);
       this.fn.push(fn())
     }
   }
   
   if(!this.method){
     this.method = [method];
   }
  
   if(!this.fn){
     this.fn = [fn()]
   }
   
   console.log(this.route.includes(route), this.method.includes(method))
     
    
   
 }
  this.runRequest = function(routeCall, methodCall){
    if(!this.route){
      return 'Error 404: Not Found'
    }
    
   if(this.route.includes(routeCall) && this.method.includes(methodCall)){ 
    for(let i=0; i<this.method.length; i++){
      if(this.method[i]===methodCall && this.route[i]===routeCall){
        return this.fn[i]
      }
    }
  }
    
    
  }
}