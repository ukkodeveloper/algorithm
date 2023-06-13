const getSubPalindrome = (left, right, str) => {
  let startIndex = left;
  let endIndex = right;

  while (
    startIndex >= 0 &&
    endIndex <= str.length - 1 &&
    str[startIndex] === str[endIndex]
  ) {
    startIndex -= 1;
    endIndex += 1;
  }

  return {
    subStartIndex: startIndex + 1,
    subLength: endIndex - startIndex - 1,
  };
};

const longestPalindrome = (str) => {
  if (str.length === 1) return str;

  let maxLength = 1;
  let startIndex = 0;

  for (let i = 1; i < str.length; i++) {
    const { subStartIndex, subLength } = getSubPalindrome(i - 1, i + 1, str);

    if (subLength > maxLength) {
      maxLength = subLength;
      startIndex = subStartIndex;
    }
  }

  for (let i = 1; i < str.length; i++) {
    const { subStartIndex, subLength } = getSubPalindrome(i - 1, i, str);
    if (subLength > maxLength) {
      maxLength = subLength;
      startIndex = subStartIndex;
    }
  }

  return str.slice(startIndex, startIndex + maxLength);
};
