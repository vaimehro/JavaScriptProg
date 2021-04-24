const range = {
    [Symbol.iterator]: function (start=1,end=10,interval=2) {
        let counter=start
        const iterator = {

           next:function() {
               const result={value: counter, done: false}
                            if ( counter <= end) {
                                counter+=interval
                                return result

                            }
                            return {done:true}
           }



            }


        return iterator;
    }


}




for (const num of range) {
    console.log(num)
}