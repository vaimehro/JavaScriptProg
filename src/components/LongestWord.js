function longestWord (str) {
   let arrStr=str.split(' ')
    const reducer=(acc , curr)=>acc.length>=curr.length ? acc :curr;

    console.log(arrStr.reduce(reducer))

}

 longestWord('My name is Vishwas')

 longestWord('Hello world')

