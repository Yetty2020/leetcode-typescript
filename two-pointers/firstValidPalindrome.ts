/*Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward. */

// A two pointer problem where i check for the first word in an array that reads the same forwards and backwards

function firstValidPalindrome(words: []): string{

    // we loop through the array of words first
    for (let i = 0; i < words.length; i++){
        // i represents the index of each word in the array
        const eachWord = words[i]
        // this represents the current word we are checking in the array


        // set two pointers, one at the start and one at the end of each word
        let left = 0
        let right = eachWord.length - 1

        // set a flag to check if the word is a palindrome
        let isPalindrome = true


        // loop through the current word until the two pointers meet in the middle
        while ( left < right){
            //if it does not match, set the flag to false and break out of the loop
            if (eachWord[left] !== eachWord[right]){
                isPalindrome = false
                break
            }
            //increase the left pointer and decrease the rright pointer
            left++
            right--
        }
        //if the flag is still true, return the current word as a palindrome

        if (isPalindrome){
            return eachWord
        }
    }

    return ""

}