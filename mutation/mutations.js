// Mutations
// Return true if the string in the first element of the array contains all 
// of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in
//  the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello 
// does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in 
// line are present in Alien.

function mutation(arr) {
    
    let arr2 =[]
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].toLowerCase())
    }
    
    let verificar = true

    for (let i = 0; i < arr2[1].length; i++) {
        if ( arr2[0].includes(arr2[1][i])) {
            verificar = true
        } else {
            verificar= false
            return verificar
        }
    }
    return verificar
}
  
console.log(mutation(["hello", "hel"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(mutation(["hello", "Hello"]))
console.log(mutation(["Noel", "Ole"]))
console.log(mutation(["hello", "neo"]))

