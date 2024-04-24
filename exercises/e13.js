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
   
    let sumOfDeposits=0;
    let sumOfDepositsLessThan2000=[];
    
    
    for (let user of array) {
        if (user.deposits){
            for(let amount of user.deposits){
               sumOfDeposits += amount;
            }
        
            if (sumOfDeposits<2000){
              sumOfDepositsLessThan2000.push(user);
            }
            sumOfDeposits =0;
        }
              if (!user.deposits){ sumOfDepositsLessThan2000.push(user);}
        }
      
       return sumOfDepositsLessThan2000;
    }
   


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
