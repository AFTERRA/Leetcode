/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0
    var high = nums.length - 1
    while (low <= high){
      var mid = parseInt( (low + high) / 2 );
      console.log(mid)
      if (target > nums[mid])
        low = mid + 1
      else if (target < nums[mid])
        high = mid - 1
      else if (nums[mid] == target)
        return mid
  }
  return target > nums[low] ? low + 1 : low
};