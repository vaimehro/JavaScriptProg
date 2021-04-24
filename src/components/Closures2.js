function outer(){
   let a=0
    return function (){
         a++;
        console.log(a)
    }


}

 let jj=outer();
jj();
jj();

// console.log(a)
// console.log(x)

