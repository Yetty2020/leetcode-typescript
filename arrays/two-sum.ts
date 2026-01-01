/**  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


**/

/** 
 Problem: Two Sum
 Approach: Hash Map
 */

 function twoSum(nums: number[], target: number): number[]{
    //create a new map for the result
    const map = new Map<number, number>()

    //iterate through the nums we have
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]


        if (map.has(diff)){
            return [map.get(diff)!, i]
        }


        map.set(nums[i], i)
    }

    return[]


 }