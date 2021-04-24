//removeVowels('Hello World') - Returns Hll Wrld

removeVowels=(str)=>{

    console.log(str.replace(/[aeiou]/gi,''))
}

removeVowels('Hello World')