const getChrMap = (word) => {
  return [...word].reduce((acc, chr) => {
    if (acc.has(chr)) {
      acc.set(chr, acc.get(chr) + 1);
      return acc
    }
    acc.set(chr, 1);
    return acc;
  }, new Map())
}

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;


  const charMap = getChrMap(s);

  for (let i = 0; i < t.length; i++ ) {
    const currentChar = t[i]
    if (!charMap.get(currentChar)) return false;

    charMap.set(currentChar, charMap.get(currentChar) - 1);
  }
  return true;
}

// isAnagram("anagram", "nagaram")

