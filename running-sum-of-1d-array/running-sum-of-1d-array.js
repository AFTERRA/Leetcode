/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let loop_nums=nums.length -1 ; loop_nums>0; loop_nums--) {
      for (let y = 0; y<loop_nums; y++){
        nums[loop_nums] += nums[y]
      }
    }
  
  return nums
};