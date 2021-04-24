const person={
    name:'vaibhav'
}

function displayName() {
    console.log(`developer name is ${this.name}`)
}
const sayMyNameVaibhav=bindd(displayName,person)
sayMyNameVaibhav()

function bindd(fn,context){
   return function (){
       fn.call(context)
   }
}