const a = [1, 2, 3];

let first = a[0];
let second = a[1];

[first, second] = [second, first];
console.log(a);
