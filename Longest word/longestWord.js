// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let arrStr = str.split(" ")
    let contador = 0
    for (let i = 0; i< arrStr.length; i++) {
        if (arrStr[i].length > contador) {
            contador = arrStr[i].length
        }
    }
    console.log(contador)
  }
  
  findLongestWordLength("The quick brown fox aaaaaaaaaaaaaaaa jumped over the lazy dog");