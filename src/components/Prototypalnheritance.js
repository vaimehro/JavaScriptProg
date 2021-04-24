function Person(name){
    this.name=name
}


Person.prototype.sayName=function (){
    console.log(`name of person is ${this.name}` )
}

function Programmer(name, langauge){
    Person.call(this,name)
    this.language=langauge
}

Programmer.prototype=Object.create(Person.prototype)
console.log(Programmer.prototype.constructor)
Programmer.prototype.constructor=Programmer
console.log(Programmer.prototype.constructor)
Programmer.prototype.code=function (){
    console.log( `programmer code in this lang ${this.language}` )
}
let progVaibhav= new Programmer('Vaibhav','JavaScript')
progVaibhav.sayName()
progVaibhav.code()
