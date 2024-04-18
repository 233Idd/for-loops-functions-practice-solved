// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
    // Your code goes here...
   
   let noDeposits=[];
   let sumOfDeposits=Number([]);
   let sumOfDepositsLessThan2000AllAccounts=[];
   
   
   for (let i = 0; i < array.length; i++) {
       
   if (!(array[i].hasOwnProperty("deposits"))) {
       noDeposits = 0;
       sumOfDepositsLessThan2000AllAccounts.push(array[i]);
       }
       
    else if ((array[i].hasOwnProperty("deposits"))) {
   
           for (let j=0; j < array[i].deposits.length; j++){
         sumOfDeposits += (array[i].deposits[j]);
         
     }
       if (sumOfDeposits <2000) {
          sumOfDepositsLessThan2000AllAccounts.push(array[i]);
         
         }
         sumOfDeposits =0;
   }
      
   }
     
      return sumOfDepositsLessThan2000AllAccounts;
   }
   
//Not sure why if ((Object.keys("deposits"))doesn't work
// if you reset the sumOfDeposits within the last if loop, doesn't return the result of the last array

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
