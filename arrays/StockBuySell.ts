/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

// Goal  is to make maximum profit
// Track the minimum price so far and update the maximum proce by comparing it with the current price


function maxProfit(prices: number[]): number{
    let minPrice = Infinity
    //so that any real price encountered will be less than this
    let maxProfit = 0
    //since we are to return 0 if no profit is possible

    //loop throught the prices array
    for (let  i = 0; i < prices.length; i++){
        // we check if the current price is less than the minimum price so far
        if (prices[i] < minPrice){
            minPrice = prices[i]
        }
        //else we consider selling at the current price and calculate the profit
        else{
            const profit = prices[i] - minPrice
            // we update the max profit to see if the current profit is greater
            if (profit > maxProfit){
                maxProfit = profit
            }
        }
    }

    // return the maximum profit
    return maxProfit
}