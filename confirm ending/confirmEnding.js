// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string
//  (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring 
// methods instead

function confirmEnding(str, target) {
    let targetLen = (target.length) *(-1)
    let result = str.slice(targetLen)
    // console.log(targetLen)
    // console.log(result)
    if(result == target) {
        console.log(true)
    } else {
        console.log(false)
    }
  }
  
  confirmEnding("Bastian", "n");