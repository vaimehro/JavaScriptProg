function Person(name){
    this.name=name

}
Person.prototype.sayMyName=function (){
    console.log(this.name)


}



const vaibhav=new Person("Vaibhav")
    vaibhav.sayMyName();
console.log(Person.prototype)