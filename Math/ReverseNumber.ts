/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/

/*You are to reverse the digits of a signed 32-bit integer x and return the result. If the reversed number overflows the 32-bit signed integer range, return 0. */

function reverse(x: number): number{
    //we initialize a variable to store the result of the reversed number
    let reversed = 0

    // we need to store the highest and lowest possible values of a 32-bit signed integer to check for overflow
    const MAX_INT = 2 ** 31 - 1 // 2147483647
    const MIN_INT = -(2 ** 31) // -2147483648

    //we loop throught the digits of x till it remains 0, remember that the reversed number cant begin with 0

    while (x!== 0){
        //we get the last digit of x using the modulus operator 
        let lastDigit = x % 10

        //we get the remainig digits of x for the next loop by dividing it by 10 and using the floor function to get the integer part
        x = Math.floor(x/10)


        //we check for overflow before we add the last digit to the reversed number
        if (reversed > Math.floor(MAX_INT / 10) ||  (reversed < Math.floor(MIN_INT / 10))){
            return 0
        }

        reversed = reversed * 10 + lastDigit
    }
    return reversed

    }