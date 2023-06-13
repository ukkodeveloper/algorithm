const groupAnagrams = (strs) => {
  const resultMap = strs.reduce((acc, cur) => {
    const sortedWord = [...cur].sort().join('');
    if (acc[sortedWord] !== undefined) {
      acc[sortedWord].push(cur);
    } else {
      acc[sortedWord] = [cur];
    }

    return acc;
  }, {});

  return Object.values(resultMap);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']); //?

// 시간복잡도: N * M^2 logM
