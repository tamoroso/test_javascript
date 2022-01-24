const reverseString = function(string) {
    if (typeof string === 'string'){
        return string.split("").reverse().join("")
    } else {
        return 'ERROR'
    }
}

module.exports = reverseString
