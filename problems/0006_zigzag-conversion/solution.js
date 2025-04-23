/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    const res = []

    let counter = 0
    let down = true

    for (let i = 0; i <= s.length; i++) {
        res[counter] ? res[counter].push(s[i]) : res[counter] = [s[i]]
        if (counter === numRows - 1) {
            down = false
        } else if (counter === 0) {
            down = true
        }
        down ? counter++ : counter--
    }

    return res.map(row => row.join('')).join('')
    
};