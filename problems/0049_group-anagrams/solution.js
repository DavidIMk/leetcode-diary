/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const result = [];

  for (let str of strs) {
    const sorted = str.split("").sort().join("");

    if (map.has(sorted)) {
      result[map.get(sorted)].push(str);
    } else {
      map.set(sorted, result.length);
      result.push([str]);
    }
  }
  return result;
};
