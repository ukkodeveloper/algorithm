function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) {
      cards1 = [...cards1.slice(1)];
      continue;
    }

    if (cards2[0] === word) {
      cards2 = [...cards2.slice(1)];
      continue;
    }

    return 'No';
  }
  return 'Yes';
}
