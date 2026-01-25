/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

// To climb up the stairs you can either take one or two steps at a time
// so how many diffent ways can you reach n number of steps


function climbStairs(n: number): number{
    // when no of stairs = 1, you can take only 1 step to reach there
    // when no of stairs = 2, you can take 1, 1 or 2 steps to reach there, that is two steps so we declare these constant
    // when no of stairs = 3, you can take 1,1,1 or 1,2 or 2,1 steps, that is three steps
    // this whole logic forms a sequence or pattern that we are trying to acheive

    if (n <= 2) return n;

    let prev1 = 1 // number of ways to reach step 1
    let prev2 = 2 // number of ways to reach step 2

    // since we already got number of steps for 1 and 2, we'll continue from 3
    //looping through
    for (let i = 3; i <= n; i++){
        // the pattern  is the each n number is the sum of previous two n
        // for n = 3; no of steps =  no of setps for 1 + no of steps for 2 = 1 + 2 = 3
        const current = prev1 + prev2
        prev1 = prev2 //this becomes 2 for n = 4
        prev2 = current // this becomes 3 for n = 4

    }

    return prev2
}