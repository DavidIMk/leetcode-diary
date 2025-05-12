/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const maxLength = strs.reduce((result, current) =>
    result.length > current.length ? result : current
  );
  let common = "";
  for (let i = 0; i < maxLength.length; i++) {
    let marker = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== marker) {
        return common;
      }
    }
    common += marker;
  }
  return common;
};
