const doesContainPermutation = (str, pattern) => {
  const substrChars = new Map();
  const patternChars = new Map();

  for (let char of pattern) {
    patternChars.set(char, (patternChars.get(char) || 0) + 1);
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = str[i];
    substrChars.set(char, (substrChars.get(char) || 0) + 1);
  }

  const areMapsEqual = () => {
    if (substrChars.size !== patternChars.size) return false;

    for (let [key, value] of substrChars) {
      if (patternChars.get(key) !== value) return false;
    }

    return true;
  };

  if (areMapsEqual()) return true;

  for (let i = pattern.length; i < str.length; i++) {
    const firstChar = str[i - pattern.length];
    const firstCharCount = substrChars.get(firstChar);

    firstCharCount == 1
      ? substrChars.delete(firstChar)
      : substrChars.set(firstChar, firstCharCount - 1);

    const lastChar = str[i];

    substrChars.set(lastChar, (substrChars.get(lastChar) || 0) + 1);

    if (areMapsEqual()) return true;
  }

  return false;
};

console.log(doesContainPermutation("oidbcaf", "abc")); // true
console.log(doesContainPermutation("odicf", "dc")); // false
console.log(doesContainPermutation("bcdxabcdy", "bcdyabcdx")); //true
