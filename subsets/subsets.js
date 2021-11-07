/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var subset1 = [[]];
    for (const el of nums) {
        const last = subset1.length-1;
        for (let i = 0; i <= last; i++) {
            subset1.push( [...subset1[i], el] );
        }
    }
    return subset1;  
};

//read element of nums 1,2,3 each time
//get the array of current subset, which start from 1 because with [] 
//push the subset to current subset with the combination of current subset in 
//array format. Ex. [] + 1 = [1], after pushing become [[],[1]]
//Ex. first push 1 on 1 loop only
//Ex. second push 2 and [1,2] on 2 loop
//Ex. third push 3 and [1,3],[2,3],[1,2,3] on 4 loop
