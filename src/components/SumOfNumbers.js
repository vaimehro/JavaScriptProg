function sum(n){
    let starting , ending
    let sume=0
    if(n[0]>n[1]){
        starting=n[1]
        ending=n[0]
    }else{
        starting=n[0]
        ending=n[1]
    }

  for(let i=starting;i<=ending;i++){
      sume+=i
  }
  console.log(sume)

}

sum([2,2])