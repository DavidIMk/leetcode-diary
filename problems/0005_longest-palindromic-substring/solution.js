/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0
  let end = 0 

  const getMaxWidth = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
      }
      return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
      const odd = getMaxWidth(i, i)
      const even = getMaxWidth(i, i + 1)
      const maxLen = Math.max(odd, even);
      console.log(i, maxLen)

      if (maxLen > end - start) {
          start = i - Math.floor((maxLen - 1) / 2) 
          end = i + Math.floor((maxLen) / 2) 
      }
  }
  return s.substring(start, end + 1)
};