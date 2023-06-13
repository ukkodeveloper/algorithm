// 마음에 안 드는 점
// 1. longestPalindrome for 반복 수행
// 2. getSubPalindrome 함수에서 반환시에 인덱스를 하나씩 줄이는 것이 마음에 들지 않는다.

const expandAroundCenter = (str, left, right) => {
  while (left >= 0 && right <= str.length && str[left] === str[right]) {
    left -= 1;
    right += 1;
  }

  return {
    start: left + 1,
    len: right - left - 1,
  };
};

const longestPalindrome = (str) => {
  if (str.length === 1) return str;

  let start = 0;
  let maxLen = 1;

  for (let i = 1; i < str.length; i++) {
    const { start: evenStart, len: evenLen } = expandAroundCenter(
      str,
      i,
      i + 1
    );

    const { start: oddStart, len: oddLen } = expandAroundCenter(
      str,
      i - 1,
      i + 1
    );

    if (evenLen > maxLen) {
      start = evenStart;
      maxLen = evenLen;
    }

    if (oddLen > maxLen) {
      start = oddStart;
      maxLen = oddLen;
    }
  }

  return str.slice(start, start + maxLen);
};
