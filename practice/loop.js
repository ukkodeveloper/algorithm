const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

const testSet = new Set([1, 2, 3, 4, 5]);
const testMap = new Map([
  ['a', 1],
  ['b', 1],
]);

for (const data of testSet) {
  data; //?
}

for (const data of testMap) {
  data; //?
}
