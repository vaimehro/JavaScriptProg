function Person(name) {
    this.name = name;
}
Person.prototype.hello = function hello() {
    return 'hello ' + this.name;
};
function Developer(name, title) {
    Person.call(this, name);
    this.title = title;
}
Developer.prototype = Object.create(Person.prototype) // A
Developer.prototype.constructor = Developer; // B
Developer.prototype.getTitle = function getTitle() {
    return this.title;
};

let vaibhav=new Developer('VAIBHAV','eng')
console.log(vaibhav.hello())
console.log(vaibhav.getTitle())

