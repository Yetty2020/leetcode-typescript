/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 */

//we start counting from behind since we ae mainly concerned with increasing the last digit

function PlusOne(digits: number[]) :number[]{
    // we start counting from behind

    let length = digits.length - 1

    //loop through the array now
    for (; length >= 0; length-- ){

        //we check if the current value is less than 9, then we add one and return the array
        if (digits[length] < 9){
            digits[length]++
            return digits
        } 

        //else we chage it to 0 and add 1 to the front
            digits[length] = 0
            
        
       
    }
     digits.unshift(1)
    return digits

}