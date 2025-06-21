/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const result = [];
  const map = new Map();
  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  const wordLength = words[0].length;
  const wordCount = words.length;
  const windowLength = wordLength * wordCount;

  const isConcat = (substr) => {
    const subMap = new Map();
    for (let j = 0; j < substr.length; j += wordLength) {
      const testedWord = substr.substring(j, j + wordLength);
      subMap.set(testedWord, (subMap.get(testedWord) || 0) + 1);
    }

    for (let [key, value] of subMap) {
      if (value !== map.get(key)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i <= s.length - windowLength; i++) {
    const word = s.substring(i, i + windowLength);
    if (isConcat(word)) {
      result.push(i);
    }
  }
  return result;
};
