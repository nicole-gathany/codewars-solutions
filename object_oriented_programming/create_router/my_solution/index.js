var Router = function()
{
 this.bind = function(route, method, fn){
    !this.route? this.route = route: this.route? this.route = [this.route, route]
   this.method = method;
   this.fn = fn();
   //console.log(Object.values(this.obj))
 }
  this.runRequest = function(routeCall, methodCall){
    return this.fn
  }
}