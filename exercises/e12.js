
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
// Your code goes here...
  
let AllDepositsGreaterThanHundren=[];


for (let user of array) {
   if (user.deposits){
        for (let amount of user.deposits){
              if (amount>100){
        AllDepositsGreaterThanHundren.push(amount);
    } 
}
}
}
 return AllDepositsGreaterThanHundren;
}

//if you don't put the condition on line 14 "if (user.deposits){", gives error that user.deposit is not iterable.

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
