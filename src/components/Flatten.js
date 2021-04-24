var newArr=[]
function flattenArray(arr) {

    for (let item of arr){
        if(Array.isArray(item)){
            flattenArray(item);
        }else{
            newArr.push(item);
        }

    }

}

let arr = [1, [2], [3, [[4]]]]
flattenArray(arr);
console.log(newArr);

