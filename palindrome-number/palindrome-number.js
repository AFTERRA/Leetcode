/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n1 = x;
    let n2 = x.toString().split('').reverse().join('')
    if (n1 == n2)
        return true
    else
        return false
};