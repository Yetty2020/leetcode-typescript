/*
Problem: Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/


function LongestCommonPrefix(strs: string[]): string{
    // return an empty string if the array is empty
    if (strs.length === 0){
        return ""
    }

    //set the first string as the prefix
    let prefix = strs[0]

    //loop throught  the remaining strrings in the array
    for (let i = 1; i < strs.length; i++){
        //to check if the current string is an index of the prefix
        while (strs[i].indexOf(prefix) !== 0){
            //reduce the prefix by one character from the end
            prefix = prefix.slice(0, -1)
            // return empty string if its empty
            if (prefix === "") return ""
        }
    }

    return prefix
}