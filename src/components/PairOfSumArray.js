function printPair(arr,sum){
    arr.sort();
    let count=0
    let map=new Map()
    for( let i=0; i<=arr.length ; i++){
      if(map.has(sum-arr[i])){
          console.log(arr[i],map.get(sum-arr[i]))
         count++
      }
      map.set(arr[i],arr[i])

    }
    console.log(count)
}

printPair([8, 7, 2, 5, 3, 1],10)
