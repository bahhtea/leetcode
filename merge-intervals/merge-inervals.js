const mergeIntervals = (intervals) =>
  [...intervals]
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, value) => {
      const last = acc[acc.length - 1];
      if (!last) acc.push(value);
      else if (value[0] <= last[1]) last[1] = Math.max(value[1], last[1]);
      else acc.push(value);

      return acc;
    }, []);

console.log(
  mergeIntervals([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);
