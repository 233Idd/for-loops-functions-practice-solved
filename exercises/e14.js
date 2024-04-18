
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
 
 
  let sumOfWithdrawals= Number([]);
  let sumOfDeposits= Number([]);
  let notEqualBalance=[];
  
  
  for (let i = 0; i < array.length; i++) {
    if ((array[i].hasOwnProperty("withdrawals")) && (array[i].hasOwnProperty("deposits")) && (array[i].hasOwnProperty("balance"))) {
      for (let j=0; j < array[i].withdrawals.length; j++){
        sumOfWithdrawals += (array[i].withdrawals[j]);
      } 
          for (let k=0; k < array[i].deposits.length; k++){
        sumOfDeposits += (array[i].deposits[k]);
      } 
    } 
  
 else if (!(array[i].hasOwnProperty("withdrawals")) && (array[i].hasOwnProperty("deposits"))) {
              for (let k=0; k < array[i].deposits.length; k++){
        sumOfDeposits += (array[i].deposits[k]);
        sumOfWithdrawals= 0;
      }
 
      }
      
      else if (!(array[i].hasOwnProperty("withdrawals")) && !(array[i].hasOwnProperty("deposits"))){
          sumOfDeposits = 0;
        sumOfWithdrawals = 0;
          
      }
       
     if ((sumOfDeposits - sumOfWithdrawals) !== array[i].balance){
        notEqualBalance.push(array[i]);  
 }
 
     //console.log((sumOfDeposits -sumOfWithdrawals));
     sumOfDeposits = 0;
     sumOfWithdrawals = 0;
 
 }
 
 return  notEqualBalance;
    
 }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
