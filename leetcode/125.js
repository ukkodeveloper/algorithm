const isPalindrome = (str) => {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (!newStr) return true;

  for (let i = 0; i < newStr.length; i++) {
    const j = newStr.length - i - 1;
    if (i >= j) return true;

    if (newStr[i] !== newStr[j]) return false;
  }
};

isPalindrome('ab_a');
