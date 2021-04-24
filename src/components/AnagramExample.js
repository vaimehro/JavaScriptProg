function sockMerchant(n, ar) {
    ar.sort()
    console.log([...ar])
    var pair=0
    for(let i=0; i<n;i++){
        if(ar[i]==ar[i+1]){
            pair+=1
            i++
        }

        console.log(pair)
    }
    return pair
}
console.log(sockMerchant(4,[20,20,20,20])   )