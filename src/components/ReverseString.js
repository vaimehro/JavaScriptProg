//reverseWords(' This is  a  test string ') - Returns 'string test a is This'

function reverseWords(str){
    let strArray=str.split(" ")
console.log(strArray.reverse().join(' '))

}
reverseWords('This is  a  test string ')