const  obj={
a:1,b:2,
    getA(){
    console.log(this.a)
    return this;
    },
    getB(){
    console.log(this.a)
}


}

obj.getA().getB();