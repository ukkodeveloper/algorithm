/**
 * @param {string} s
 * @return {boolean}
 */

const bracketMap = new Map([['(', ')'], ['{', '}'], ['[' ,']']])

const isValid = (s) => {
  const bracketStack = [];

  if (bracketStack.length % 2 !== 0) return;

  for(const elem of s) {
    if (bracketMap.get(elem)) {
      bracketStack.push(elem);
    } else if (elem !== bracketMap.get(bracketStack.pop())){
      return false;
    }
  }

  if (bracketStack.length === 0) {
    return true
  }

  return false;
};