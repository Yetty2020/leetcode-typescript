/*Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;

    return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    // both are null i.e symmetric
    if (left === null && right === null) {
        return true;
    }

    // one is null i.e not symmetric
    if (left === null || right === null) {
        return false;
    }

    // values must match
    if (left.val !== right.val) {
        return false;
    }

    // mirror comparison
    return (
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
    );
}
