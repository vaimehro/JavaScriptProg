function debounce(fn , duration){
    let timer
    return function () {
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
        },duration)
    }


}
let count=0
function logger(){
    console.log("Request Number : ",++)
}

let callDebounce=debounce(logger,2000)
callDebounce(1)
callDebounce(2)
callDebounce(3)
callDebounce(4)