async function greet(){
   let promise=new Promise(resolve => setTimeout(()=>resolve("hello" ),1000))
let result=await promise
    console.log(result)
}
greet()



