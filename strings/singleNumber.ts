/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */

/*
You are given an array of integers where every element appears twice except for one and you are to find the single element and you are allowed to loop through the array once
You are not allowed to keep extra lists like set, maps or count frequencies and sort, the keyword to use is XOR */


function singleNumber(nums: number[]): number{
    //we initialize a variable to store the result of the XOR operation
    let result = 0
    
    // we loop through the array and result each XOR to the variavle
    //XOR works because it will cancel out the duplicate numbers and return the single ones
    for (let num of nums){
        result = num ^ result
    }

    return result
}