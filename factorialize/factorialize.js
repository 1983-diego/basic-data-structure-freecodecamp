//factorialize

function factorialize(num) {
    let fat = 1
    while (num > 1) {
        fat *= num
        num--
    }
    
    
    console.log(fat)
  }
  
  factorialize(4);