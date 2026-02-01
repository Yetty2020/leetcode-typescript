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
    
}