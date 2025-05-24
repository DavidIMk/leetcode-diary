/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pending = []

    for (let item of s) {
        if (["[", "(", "{"].includes(item)) {
            pending.push(item)
        } else {
            const popped = pending.pop()
            if (item === "]" && popped !== "[") {
                return false
            }
            if (item === ")" && popped !== "(") {
                return false
            }
            if (item === "}" && popped !== "{") {
                return false
            }
        }
    }
    if (pending.length) {
        return false
    }
    return true
};