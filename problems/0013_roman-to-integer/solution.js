/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const maps = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ]

    let sum = 0
    let arranged = s
    for (let [key, value] of maps) {
        while (arranged.substring(0, key.length) === key) {
            sum += value
            arranged = arranged.substring(key.length)
        }
    }
    return sum
};