/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


 */

function indexOfFirstOccurrence(hastack: string, needle: string): number{
    
    //first check if needle is an empty string
    if (needle === "") return 0

    //loop throogh the hastack string ensuring the remaining length is greater than or equal to needle
    for (let i = 0; i <= hastack.length - needle.length; i++){
        //check the occurennce of needle in hastack using substring method
        if (hastack.substring(i , i + needle.length) === needle){
            return i 
        }

    }

    // return -1 if there is not occurence of needle in hastack
    return -1
}