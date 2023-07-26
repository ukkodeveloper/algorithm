function solution(players, callings) {
  const playerMap = {};

  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  // 시간복잡도 때문에 같은 성격의 두 개의 자료구조를 업데이트하는 것은 별로 좋은 프로그래밍 같지는 않다.
  for (const call of callings) {
    const rank = playerMap[call];

    playerMap[players[rank - 1]] += 1;
    playerMap[call] -= 1;

    [players[rank], players[rank - 1]] = [players[rank - 1], players[rank]];
  }

  return players;
}
