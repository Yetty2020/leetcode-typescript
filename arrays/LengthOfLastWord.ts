/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only. */

function lengthOfLastWord(s: string): number{
    // since we are concerned with the last word only, we can start counting from backwards i.e -1
    let i = s.length - 1
    //set initial length of word to 0
    let length = 0

    // sentence may included trailing spaces, so we have to skip them
    while (i >= 0 && s[i] === ' '){
        i--
        // since we are counting from the back, we decrease i
    }

    while( i >= 0 && s[i] !== ' '){
        // we increse the length for any non trailing space character we encounter
        length++
        i--
    }

    return length
}