function sum(a, b ,c) {
    return a + b +c
}

let curriedSum = genericCurry(sum)
// curriedSum(2)(3)
// curriedSum(2,3)
console.log(curriedSum(2)(3,3))

function genericCurry(fn) {
    return function currify(...arg) {
        if (arg.length >= fn.length) {
            return fn.apply(this, arg)
        } else {
            return function (...newArg) {
                return currify.apply(this, arg.concat(newArg))
            }
        }

    }
}
