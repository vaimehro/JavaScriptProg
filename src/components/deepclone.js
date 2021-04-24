let obj={
    a:1,
  getX(){
   return function (){
       console.log(this.a)
   }
    }
}

obj.getX().call(obj)