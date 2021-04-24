function printFibonacci(n){

//0,1
    for(let last=1,secondlast=0,i=0;i<n-1;i++){
  if(i==0){
      console.log(secondlast)
      console.log(last)
  }else{
      var temp=secondlast+last
      console.log(secondlast+last)

      secondlast=last
      last=temp
  }

    }
}
printFibonacci(2)