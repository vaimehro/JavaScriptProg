function Person(name){
    this.name=name;
}

Person.prototype.printName=function (){
    console.log("person name is :",this.name)
}

function Programmer(name, langauge){
    Person.call(this,name)
    this.language=langauge

}
Programmer.prototype=Object.create(Person.prototype)
Programmer.prototype.code=function (){

    console.log(" coding language is",this.language)
}

let vaibhav=new Programmer('vaibhav','JS')
vaibhav.printName()
vaibhav.code()