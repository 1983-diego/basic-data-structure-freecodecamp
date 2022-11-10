// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain
//  the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let corte1 = arr2.slice(0, n)
    let corte2 = arr2.slice(n)
    let result = [...corte1, ...arr1, ...corte2]
    
    console.log(result);
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3, 4], [], 0)
frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)


