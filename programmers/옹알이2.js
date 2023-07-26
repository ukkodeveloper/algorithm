function solution(babbling) {
  const availList = ['aya', 'ye', 'woo', 'ma'];
  let result = 0;

  for (let bab of babbling) {
    // 변할 수 있는 변수를 어디에 선언을 해주어야 하는 지 항상 고민할 것. 컨텍스트가 언제 업데이트 되는 지 고려.
    let cachedBob = '';

    // 반복문에 라벨 붙여서 어디서 break되는지 명확하게 하기.
    // eslint-disable-next-line no-constant-condition
    bab: while (true) {
      if (bab.length === 0) {
        result += 1;
        break bab;
      }
      let added = false;
      const fragment = bab.slice(0, 3);

      avail: for (let standard of availList) {
        if (standard !== cachedBob && fragment.indexOf(standard) === 0) {
          bab = bab.slice(standard.length);
          added = true;
          cachedBob = standard;
          break avail;
        }
      }
      if (!added) break bab;
    }
  }
  return result;
}

// while(true) 를 재귀로 구현
const recursiveSolution = (babbling) => {
  const availList = ['aya', 'ye', 'woo', 'ma'];
  let result = 0;

  const checkingHelper = (word, prev = '') => {
    if (word.length === 0) return true;

    const wordToCheck = word.slice(0, 3);
    // foreach 콜백 함수의 return은 말 그대로 콜백 함수의 리턴이다. 콜백이 작성된 컨텍스트의 return이 아니다. 만약 의도대로 하고 싶다면, for문을 사용할 것.
    for (const availBab of availList) {
      if (availBab !== prev && wordToCheck.indexOf(availBab) === 0) {
        return checkingHelper(word.slice(availBab.length), availBab);
      }
    }
    return false;
  };

  for (const bab of babbling) {
    if (checkingHelper(bab)) result += 1;
  }

  return result;
};
