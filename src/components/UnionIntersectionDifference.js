//Inputs: arr1 = [1, 2, 3] and arr2 = [2, 3, 4]

function showDifferentCombination(arr1,arr2){
    console.log([...arr1,...arr2])

}

function showInterSaction(arr1,arr2){
    arr1.filter(word=>arr2.includes(word))
    console.log( arr1.filter(word=>arr2.includes(word)))
}

function showDiff(arr1,arr2){
    arr1.filter(word=>arr2.includes(word))
    console.log( arr1.filter(word=>!arr2.includes(word)))
}

showDifferentCombination([1, 2, 3],[2, 3, 4])
showInterSaction([1, 2, 3],[2, 3, 4])
showDiff([1, 2, 3],[2, 3, 4])
showDiff([2, 3, 4],[1, 2, 3])
