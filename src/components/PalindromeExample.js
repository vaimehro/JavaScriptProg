function isPalindrome (str) {
    let testStr=''
    for (let j=str.length;j>=0;j--){
        testStr+=str.charAt(j)
    }
    return str===testStr
}
console.log(isPalindrome('racecar'))