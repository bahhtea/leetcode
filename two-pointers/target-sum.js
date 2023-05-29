const pairSum = (arr, target) => {
  const map = new Map();

  for (let i in arr) {
    const num = arr[i];
    const compliment = target - num;

    if (map.has(compliment)) return [map.get(compliment), i];

    !map.has(num) && map.set(num, i);
  }

  return null;
};

console.log(pairSum([1, 2, 3, 4, 6], 6));
console.log(pairSum([2, 5, 9, 11], 11));

const pairSumNoMap = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const result = arr[i] + arr[j];

    if (result == target) return [i, j];
    if (result < target) i++;
    if (result > target) j--;
  }

  return null;
};

console.log(pairSumNoMap([1, 2, 3, 4, 6], 6));
console.log(pairSumNoMap([2, 5, 9, 11], 11));
