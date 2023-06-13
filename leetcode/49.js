const isAnagram = (one, another) => {
  if (one.length !== another.length) return false;

  const oneChrMap = [...one].reduce((acc, cur) => {
    if (acc[cur] === undefined) {
      acc[cur] = 0;
    }
    acc[cur] += 1;
    return acc;
  }, {});

  for (let i = 0; i < another.length; i++) {
    const curChar = another[i];

    if (!oneChrMap[curChar]) return false;

    oneChrMap[curChar] -= 1;
  }

  return true;
};

const groupAnagrams = (strs) => {
  const result = [[strs[0]]];

  for (let i = 1; i < strs.length; i++) {
    const curWord = strs[i];
    let isAdded = false;

    for (let j = 0; j < result.length; j++) {
      const anagram = result[j][0];

      if (isAnagram(anagram, curWord)) {
        result[j].push(curWord);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      result.push([curWord]);
    }
  }

  return result;
};

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);//?
// groupAnagrams(['']);//?
// groupAnagrams(['a']);//?
// groupAnagrams(['hhhhu', 'tttti', 'tttit', 'hhhuh', 'hhuhh', 'tittt']); //?
