/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  const digitsMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];

  const backtrack = (index, combination) => {
    if (index === digits.length) {
      result.push(combination);
      return;
    }

    for (let digit of digitsMap[digits[index]]) {
      backtrack(index + 1, combination + digit);
    }
  };
  backtrack(0, "");
  return result;
};
