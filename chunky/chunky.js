// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    
    let arr2 = [];

    for (let i = 0; i <= arr.length; i++) {
        arr2.push(arr.splice(0, size))
    }
    if (arr.length != 0) {
        arr2.push(arr.splice(0))
    }
    return arr2;
  }
  
// solução mais sintética
//   function chunkArrayInGroups(arr, size) {
//     const newArr = [];
//     while (arr.length > 0) {
//       newArr.push(arr.splice(0, size));
//     }
//     return newArr;
//   }

//recursiva
// function chunkArrayInGroups(arr, size) {
//     if (arr.length <= size) {
//       return [arr];
//     } else {
//       return [arr.slice(0, size)].concat(
//         chunkArrayInGroups(arr.slice(size), size)
//       );
//     }
//   }

  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))