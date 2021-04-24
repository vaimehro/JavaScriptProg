function lastkid(n , k ){
return k%n
}

console.log(lastkid(3,4))


function reverseString(str){
    let arr=[]
    for(i of str){
        arr.push(i)
    }
    for(let i=arr.length-1 ;i>=0;i--){
      console.log( arr[i])
    }

}
reverseString("vaibhav")