const a=function (x){
    this.x=x;

}
function getX(){
    console.log(this.x)
}
const b=function (x,y){
    this.y=y
    a.call(this,x)
}

function getY(){
    console.log(this.y)
}
b.prototype=Object.create(a.prototype)
let newB=new b('x','y')

// newB.getX();
getY.call(newB)
getX.call(newB)