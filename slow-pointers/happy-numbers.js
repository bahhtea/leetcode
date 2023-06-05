const getSquareOfDigits = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, value) => acc + Math.pow(parseInt(value), 2), 0);

const isHappy = (num) => {
  let first = num;
  let second = getSquareOfDigits(num);

  while (true) {
    if (first == second) return false;
    if (first == 1 || second == 1) return true;
    first = getSquareOfDigits(first);
    second = getSquareOfDigits(getSquareOfDigits(second));
  }
};

console.log(isHappy(23));
console.log(isHappy(12));
