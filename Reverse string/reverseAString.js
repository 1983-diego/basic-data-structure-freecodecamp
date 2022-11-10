//reverse a string
function reverseString(str) {
    let rev = str.split("")
    let ver = rev.reverse()
    let joinReverse = ver.join("")
    
    console.log(joinReverse)
  }
  
  reverseString("hello");