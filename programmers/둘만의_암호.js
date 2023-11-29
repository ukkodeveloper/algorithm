function solution(s, skip, index) {
  let answer = '';
  const chars = [];
  const except = [];

  for (const char of skip) {
    except.push(char.charCodeAt(0));
  }

  for (let i = 97; i <= 122; i++) {
    if (!except.includes(i)) {
      chars.push(i);
    }
  }

  for (const char of s) {
    const ascii = char.charCodeAt(0);
    const current = chars.indexOf(ascii);

    const step = (current + index) % chars.length;

    answer += String.fromCodePoint(chars[step]);
  }

  return answer;
}