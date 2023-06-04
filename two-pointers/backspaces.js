const areStringsWithBackspacesEqual = (str1, str2) => {
  let i = str1.length - 1;
  let j = str2.length - 1;

  let firstOffset = 0;
  let secondOffset = 0;

  const BACKSPACE_CHAR = "#";

  while (i >= 0 && j >= 0) {
    while (str1[i] == BACKSPACE_CHAR) {
      firstOffset++;
      i--;
    }

    while (str2[j] == BACKSPACE_CHAR) {
      secondOffset++;
      j--;
    }

    i = i - firstOffset;
    j = j - secondOffset;

    firstOffset = 0;
    secondOffset = 0;

    if (str1[i] !== str2[j]) return false;

    i--;
    j--;
  }

  return i == j;
};

console.log(areStringsWithBackspacesEqual("xy#z", "xzz#"));
console.log(areStringsWithBackspacesEqual("xy#z", "xyz#"));
console.log(areStringsWithBackspacesEqual("xp#", "xyz##"));
console.log(areStringsWithBackspacesEqual("xywrrmp", "xywrrmu#p"));
