let sum=function (a,b) {
    return a+b;
}

let curryfiedFunction=function (f){
    return function curryfy(...args){
        if(args.length >= f.length){
            return  f.apply(this,args)
        }else{
            return function (...newArgs){
               return curryfy.apply(this,args.concat(newArgs))
            }
        }
    }


}

let currysum=curryfiedFunction(sum)
console.log(currysum(10)(20))