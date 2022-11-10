// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge,

function repeatStringNumTimes(str, num) {
    if (num < 0){
        return ""
    } else {
        let i = 0
        let result = ""
        while (num > i){
            result += str
            i++
        }
        console.log(result)
    }
    
    
    //return str;
}
  
repeatStringNumTimes("abc", 3);
