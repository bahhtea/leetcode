const findLongestSubstringOfUnique = (str) => {
  const hash = new Set();

  let i = 0;
  let j = 0;

  let currLength = 0;
  let maxLength = 0;

  while (j < str.length) {
    if (hash.has(str[j])) {
      while (hash.has(str[j])) {
        hash.delete(str[i]);
        currLength--;
        i++;
      }
    }

    hash.add(str[j]);
    currLength++;
    j++;
    maxLength = Math.max(currLength, maxLength);
  }

  return maxLength;
};

console.log(findLongestSubstringOfUnique("aabccbb")); //3
console.log(findLongestSubstringOfUnique("abbbb")); //2
console.log(findLongestSubstringOfUnique("abccde")); //3
