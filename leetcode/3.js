const lengthOfLongestSubstring = (s) => {
  const sMap ={};
  let startIndex = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (sMap[char] !== undefined && sMap[char] >= startIndex) {
      startIndex = sMap[char] + 1;
    } else {
      max = Math.max(max, i - startIndex + 1);
    }
    sMap[char] = i;
  }
  return max;
};

