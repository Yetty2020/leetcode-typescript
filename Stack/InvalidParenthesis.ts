/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/*
The whole logic is that the parenthesis should be closed in the correct order, we use the logic of stack here i.e LIFO and recall that in Ts arrays are already treated as stacks with push and pop methods
 */


function isValid(s: string): boolean{
    // create an empty array first to use to store the opening parenthesis
     const stack: string[] = []

     // create a map to store the closing and opening parenthesis pairs making sure the keys are the closing parenthesis
     const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
     }

     // loop through the given string, we use the for...of loop here since we wont be making use of the indes
      for (const char of s){
        //check if the character is a closing parenthesis by checking if it exists in the map
        if (char in map){
            //if it is a closing parenthesis, we remove the last added item in the stack which is an opening bracket since we are only storing the opeeing brackets in the stack
            const topElement = stack.pop()
            // compare the poppped element witht the current character if it matches the one from the map
            if (topElement !== map[char]){
                return false
            }
        } else {
            //if it is not in the map then it is an opening parethesis, so we push it to the stack
            stack.push(char)
        }
      }

      //if the stack its empty then it is valid
      return stack.length === 0
}