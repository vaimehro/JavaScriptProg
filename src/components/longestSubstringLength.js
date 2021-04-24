longestSubstringLength=(str)=>{
    let strSet=new Set()
    let sizeOfSub=0
    for(char of str){

        if(strSet.has(char)){
            sizeOfSub=sizeOfSub>strSet.size?sizeOfSub:strSet.size
            strSet.clear()
        }
       else{
            strSet.add(char)
        }
    }
    console.log( sizeOfSub)
}


// longestSubstringLength('abcabcbd') - Returns 3 ('abc')

longestSubstringLength('abcabcbd')
longestSubstringLength('aaaa')

longestSubstringLength('abbcdb')

