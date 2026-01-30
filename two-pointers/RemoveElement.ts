/*
Problem: Write a functiont that removes element in an array thats not equal to a given number (val) and returns the amount of characters left in the array , for example num = [1,2,3,2,2] val = 2, output = 2 i.e 1 and 3
 */


function removeElement(nums: number[], val: number): number {
    // this serves as the counter for the number of items in the array
    let k = 0;

    //we loop through the given no

    for (let i = 0; i < nums.length; i++) {
        // as long as the current iteration number is not equal to the variable given
        if (nums[i] !== val) {
            nums[k] = nums[i];
            // to increment the counter
            
            k++;
        }
    }

    return k;
}


function removeElements(nums: number[], val: number): number{
    //we set a varible for the initial value of the no of items left in the array
     let j = 0


    // we loop throught the given array
    for (let number of nums){

        //we check if the current no is not equal to the given no
        if (number !== val){
            nums[j++] = number
        }

    }

    return j
}