// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let big = []
    let maior = 0
    for (let item of arr) {
        for (let j = 0; j< item.length; j++) {
            if (j == 0) {
                maior = item[j]
            } else if (item[j] > maior) {
                maior = item[j]
            }
        }
        big.push(maior)
        //maior = 0
    }
    
    console.log(big);
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);