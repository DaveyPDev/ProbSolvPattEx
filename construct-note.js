// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let letterCount = {}
    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1
    } 
    for(let char of message) {
        if( char in letterCount && letterCount[char] > 0) {
            letterCount[char] -= 1
        } else {
            return false
        }
    }
    return true
}

module.exports = constructNote;

// Test cases
console.log(constructNote('aa', 'abc'))  // False
console.log(constructNote('abc', 'dcba'))  //  True
console.log(constructNote('aabbcc', 'bcabcaddff'))  //  True