/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

// this is a two pointer problem coz we have to compare characters from the start and the ned up on till th ee middle to see if they match
// string must only contain alphaneumeric characters and should be in lowercase

function validPalindrome(s: string): boolean{
    //first clean the string to contain only alphanermeric characters in lowercase

    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    //this is to remove all characters that are not contained in the [] and g is for global occurence and then convert it to lowecase

    //set two pointers, one at the start and one at the end
    let left = 0
    let right = cleanedString.length - 1

    //loop through the string until the two pointerss meet in the middle
    while (left < right){
        //cpmpare the characters at the two pointers
        while (cleanedString[left] !== cleanedString[right]){
            return false
        }

        //increase the left, decrease the right
        left++
        right--
    }
    // return true otherwise
    return true

}