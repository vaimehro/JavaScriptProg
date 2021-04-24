
class Calculator{
    constructor() {
        this.sum=0
    }

    add(num){
     this.sum+=num;
     return this
    }
    subs(num){
        this.sum-=num;
        return this
    }
    print(){
        console.log(this.sum)
    }
}

class Scalc extends Calculator{


    square(){
       this.sum*=this.sum
        return this
    }
}

let s=new Scalc()
s.add(10).subs(5).square().print()