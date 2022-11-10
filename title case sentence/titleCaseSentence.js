// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting
// words like the and of.


function titleCase(str) {
    let arrStr = str.toLowerCase().split(" ")
    let result = ''
    for (let i = 0; i < arrStr.length; i++) {
        result += arrStr[i][0].toUpperCase();
        result += arrStr[i].slice(1).toLowerCase()
        result += " "
    }
    result.trim()
    console.log(result);
}
  
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt")
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")

//Funcionou no vscode, porém não no console do freecodecamp. O de baixo funcionou em ambos

// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//       updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
//   }

//console.log(titleCase("I'm a little tea pot"))