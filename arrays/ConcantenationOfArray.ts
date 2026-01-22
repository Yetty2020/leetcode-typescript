/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans. */

function getConcatenation(nums: number[]):  number[]{
    // approch is to 2n the given n array

    // first get the length of the given arrau
    const n = nums.length

    //create a new variblae array to store the output
    const ans: number[] = []

    //loop throgh the given array
    for (let i = 0; i < n; i++){
        //the first half of the output array will contain the given array
        ans[i] = nums[i]
        // the other half of the output array will contain the given array again
        // this stores the given array at index i + n i.e n postions ahead
        ans[i + n] = nums[i]
    }

    // return the output array
    return ans




}