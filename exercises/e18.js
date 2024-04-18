// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {

    if (array.length === 0) {
        return "";
    }
    let concatElt = "";
    for (let i = 0; i < array.length; i++) {
         if (Array.isArray(array[i])){
  for (let j = 0; j<array[i].length; j++) {
     concatElt += array[i][j];
        if (j < array[i].length - 1) {
            concatElt += separator;
        }
  }
         }
     else { 
    concatElt += array[i];}
    
        if (i < array.length - 1) {
            concatElt += separator;
        }
    }
    return concatElt;
}

/* if you don't want to unpack sub-arrays within the array, to join their individual elements, use:

function joinToString(array, separator) {

    if (array.length === 0) {
        return "";
    }
    let concatElt = "";
    for (let i = 0; i < array.length; i++) {
        concatElt += array[i];
        if (i < array.length - 1) {
            concatElt += separator;
        }
    }
    return concatElt;
}
*/

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
