const minWindowSort = (arr) => {
  let firstOutOfOrder;
  let lastOutOfOrder;

  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length && firstOutOfOrder == undefined) {
    if (arr[i + 1] < arr[i]) {
      firstOutOfOrder = i;
    }
    i++;
  }

  while (j > 0 && lastOutOfOrder == undefined) {
    if (arr[j - 1] > arr[j]) {
      lastOutOfOrder = j;
    }
    j--;
  }

  let smallest = arr[firstOutOfOrder];
  let biggest = arr[lastOutOfOrder];

  for (let m = firstOutOfOrder; m <= lastOutOfOrder; m++) {
    smallest = Math.min(arr[m], smallest);
    biggest = Math.max(arr[m], biggest);
  }

  while (arr[firstOutOfOrder] > smallest && firstOutOfOrder >= 0) {
    firstOutOfOrder--;
  }

  while (arr[lastOutOfOrder] < biggest && lastOutOfOrder < arr.length) {
    lastOutOfOrder++;
  }

  return lastOutOfOrder - firstOutOfOrder - 1 || 0;
};

console.log(minWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(minWindowSort([1, 3, 2, 0, -1, 7, 10]));
console.log(minWindowSort([1, 2, 3]));
console.log(minWindowSort([3, 2, 1]));
