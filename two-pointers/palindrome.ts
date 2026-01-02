/*

Given an integer x, return true if x is a palindrome, and false otherwise.

 */

function isPalindrome(x: number): boolean {
    // dont convert no to string
    //palindrome cant be a negative number
    // 0 is a palindrome
    // factors of 10 are not palindromes
    if (x < 0 || (x % 10 === 0 && x!== 0)){
        return false
    }

    let reversedHalf = 0
    // reverse half of the number i.e when x is greater then the reversedHalf
    //x decreses on every loop
    // reversedHalf increases on every loop
    while (x > reversedHalf){
        // to get the last digit
        let lastdigit = x % 10
        reversedHalf = reversedHalf * 10 + lastdigit
        // remove the last digit from x
        x = Math.floor(x/ 10)
    }    

    // consider the length of the number, whether odd or even
    

    return x === reversedHalf || x === Math.floor(reversedHalf/ 10)
}