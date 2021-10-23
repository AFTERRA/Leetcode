/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var stack = [];   
    var result = [];
    while (true){
      if (root != null){
        stack.push(root);
        root = root.left;
        continue;
      }
      
      if (stack.length == 0) {
        return result;
      }
      
      root = stack.pop();
      result.push(root.val);
      root = root.right;
      
    }
};