function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

const sequence = generateSequence();

for (const value of sequence) {
  console.log(value); //?
}

function* generateAllCombinations(elements, length) {
  function* generateCombinations(combinations) {
    if (combinations.length === length) {
      yield combinations;
      return;
    }

    for (const element of elements) {
      yield* generateCombinations([...combinations, element]);
    }
  }

  yield* generateCombinations([]);
}
const testArr = [1, 2, 3];
const testLen = 4;

const testGenerate = generateAllCombinations(testArr, testLen);
