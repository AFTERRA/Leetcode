/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    for (let x = 0; x < nums.length*2; x++){
      if (x < nums.length)
        ans[x] = nums[x]
      else
        ans[x] = nums[x-nums.length]
    }
    return ans;
};