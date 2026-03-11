/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. */

function searchInsert(nums: number[], target: number) : number{
    // we initialize two pointers where we compare from the left and the right with themiddle number
    let left = 0;
    let right = nums.length - 1

    //while the left is not equal to the right
    while (left <= right){
        const middleNumber = Math.floor((left + right) /2)

        if (nums[midNumber] === target){
            return middleNumber
        }

    if (nums[middleNumber] < target){
        left = middleNumber + 1
    }
    if (nums[middleNumber] > target){
        right = middleNumber - 1
    }
    }

    return left
}