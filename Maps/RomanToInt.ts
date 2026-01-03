/*
Problem: Write a function that takes a Roman numneral and convert it to an integer

*/


function romanToInt(s: string): number {
    //create a map to store the roman numerals and their integer values
    const map : Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    //initial value of the integer
    let total = 0

    //iterate through the given string
    for ( let i = 0; i < s.length; i++){
        //get the value of the curren roman numeral
        const current = map[s[i]]
        //get the value of the next roman numeral
        const next = map[s[i + 1]]

        // the entire logic is if the current is less than next, you subtract, otherwise you add
        // so you first check if next is defined or not
        if (next && (current < next)){
            total -= current
        } else {
            total += current
        }

        
    }
    return total
}