/* 
Problem: Write a fuction that converts integers to roman numerals
Keep in mind the values of 4's and 9's
*/

function intToRoman(num: number): string{
    // store the values and symbols in an array in descending order
    // dont forget to add for the 4's and 9's
     const values = [1000, 900, 500, 400,100, 90, 50, 10, 9, 5,4,1 ]
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "IX", "V", "IV", "I"]

    let result = ""

    //looop through the values array
    for (let i = 0; i < values.length; i++){
        //compare the given number with the current value
        while (num >= values[i]){
            result += symbols[i]
            num -= values[i]

        }
    }

    return result
}