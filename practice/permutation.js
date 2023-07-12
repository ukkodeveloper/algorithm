const permutation = (arr, len) => {
  const result = [];
  const recursion = (permArr) => {
    if (permArr.length === len) {
      result.push(permArr);
      return;
    }

    for (const elem of arr) {
      recursion([...permArr, elem]);
    }
  };

  recursion([]);
  return result;
};

const permlist = permutation([1, 2, 3], 3); //?

permlist.length; //?

function getPermutationsWithRepetition(inputArray, length) {
  // 종료 조건: 길이가 원하는 중복순열의 길이와 일치하면
  if (length === 1) {
    return inputArray.map((value) => [value]);
  }

  let result = [];

  // inputArray의 각 요소에 대해
  for (let i = 0; i < inputArray.length; i++) {
    // 재귀적으로 나머지 중복순열 계산
    let smallerPermutations = getPermutationsWithRepetition(
      inputArray,
      length - 1
    );
    for (let permutation of smallerPermutations) {
      // 각각의 중복순열 앞에 현재의 요소를 추가
      result.push([inputArray[i]].concat(permutation));
    }
  }

  return result;
}

getPermutationsWithRepetition([1, 2, 3], 3); //?
