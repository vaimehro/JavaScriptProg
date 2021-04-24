function sum(a, b) {
    return a + b;
}

function genericCurry(f){

    return function currify(...args){
        if(args.length>=f.length){
           return f.apply(this,args)
        }else{
            return function (...newArgs){
                return currify.apply(this,args.concat(newArgs))
            }

        }
    }

}

let geniricSum=genericCurry(sum)
console.log(geniricSum(2,2,3))