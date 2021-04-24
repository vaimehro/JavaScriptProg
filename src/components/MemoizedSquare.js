function memoizedSquare() {
    let storedSqares = new Map()
    return function (num) {
        if (storedSqares.has(num)) {
            console.log("cached value fetched")
            return storedSqares.get(num)
        } else {
            console.log("fresh value fetched")
            storedSqares.set(num, num * num)
            return storedSqares.get(num)
        }
    }
}

let sqNum = memoizedSquare()
console.log(sqNum(10))
console.log(sqNum(10))