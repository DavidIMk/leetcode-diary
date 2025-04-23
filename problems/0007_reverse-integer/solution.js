/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const stringValue = x.toString().split("");
  let minus = false;
  if (stringValue[0] === "-") {
    minus = true;
    stringValue.shift();
  }
  for (let i = 0; i < stringValue.length / 2; i++) {
    let temp = stringValue[i];
    stringValue[i] = stringValue[stringValue.length - 1 - i];
    stringValue[stringValue.length - 1 - i] = temp;
  }
  if (minus) {
    stringValue.unshift("-");
  }
  const result = Number(stringValue.join(""));
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return result;
};
