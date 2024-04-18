// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...

let zeroWithdrawals=[];
let sumOfWithdrawals=Number([]);
let sumOfWithdrawalsAllAccounts=[];


for (let i = 0; i < array.length; i++) {
  if (!(array[i].hasOwnProperty("withdrawals"))) {
    zeroWithdrawals = 0; sumOfWithdrawalsAllAccounts.push(zeroWithdrawals); 
  }
  else if ((array[i].hasOwnProperty("withdrawals"))) {
    for (let j=0; j < array[i].withdrawals.length; j++){
      sumOfWithdrawals += (array[i].withdrawals[j]);
      
    }
    sumOfWithdrawalsAllAccounts.push(sumOfWithdrawals); 
    sumOfWithdrawals =0;
  } 

  }
   return sumOfWithdrawalsAllAccounts;
}


/*javascript typeof shows number but when adding concantenates. 
I tried  "sumOfWithdrawals += parseInt(array[i].withdrawals[j]);" -did not work. 
Also tried "sumOfWithdrawals += Number(array[i].withdrawals[j]);" -did not work either.
What worked was assigning the variable as a number: "let sumOfWithdrawals=Number([]);"" */

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
