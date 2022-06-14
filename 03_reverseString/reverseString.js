function reverseString(inputString) {
   let newString = inputString.split("");
    let returnedString = ''
    
    for (let i = inputString.length-1; i >= 0; i--) {
	returnedString += newString[i];
    }
    
    return returnedString;
}





// Do not edit below this line
module.exports = reverseString;
