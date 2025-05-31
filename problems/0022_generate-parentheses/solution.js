/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const compose = (open, close, s) => {
    if (open === close && open + close === n * 2) {
      result.push(s);
    }

    if (open < n) {
      compose(open + 1, close, s + "(");
    }

    if (close < open) {
      compose(open, close + 1, s + ")");
    }
  };

  compose(0, 0, "");
  return result;
};
