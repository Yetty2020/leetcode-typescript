/*Function to  check if two binary tree node are the same */

/*
Approach is to first check if the node has the same value, then if left subtree are the same and then if the right subtree are the same, then you treat each subtree as a tree on its own through recursion */

class TreeNode{
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null){
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean{
    //check if both nodes are null, then they are the same
    if (p === null && q === null) return true
    // check if one of the nodes is null, then they are not the same
    if (p === null || q === null) return false
    //check if the values of the nodes are the same
    if (p.val !== q.val) return false

    // in a binary tree, each node or treee consists of subtress, left and right. So we treat each subtree as a tree on its own and check if the nodes are the same using recursion
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}