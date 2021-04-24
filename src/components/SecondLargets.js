function getSecondLargest(nums) {
    // Complete the function
     nums.sort(function (a,b){return a-b})
    for(let i=nums.length-2;i>0;i--){
        if(nums[i]<nums[nums.length-1]){
            return nums[i]
        }

    }


}
console.log(getSecondLargest([10 ,9, 9, 8, 8, 11, 8, 0, 9, 1]))