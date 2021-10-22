/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let text = s.split(" ");
    let last_word = text[text.length-1];
    return last_word.length;
};