function solution(park, routes) {
  let answer;

  const colLength = park[0].length;
  const rowLength = park.length;

  const check = (next) => {
    const [row, col] = next;
    return (
      row < 0 ||
      col < 0 ||
      row >= rowLength ||
      col >= colLength ||
      park[row][col] === 'X'
    );
  };

  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf('S') !== -1) {
      answer = [i, park[i].indexOf('S')];
      break;
    }
  }

  routeLoop: for (const route of routes) {
    const [direction, stepStr] = route.split(' ');
    const step = Number(stepStr);

    let next = [...answer];
    if (direction === 'E') {
      for (let i = 0; i < step; i++) {
        next = [next[0], next[1] + 1];
        if (check(next)) continue routeLoop;
      }
      answer = [answer[0], answer[1] + step];
    } else if (direction === 'S') {
      for (let i = 0; i < step; i++) {
        next = [next[0] + 1, next[1]];
        if (check(next)) continue routeLoop;
      }
      answer = [answer[0] + step, answer[1]];
    } else if (direction === 'W') {
      for (let i = 0; i < step; i++) {
        next = [next[0], next[1] - 1];
        if (check(next)) continue routeLoop;
      }
      answer = [answer[0], answer[1] - step];
    } else if (direction === 'N') {
      for (let i = 0; i < step; i++) {
        next = [next[0] - 1, next[1]];
        if (check(next)) continue routeLoop;
      }
      answer = [answer[0] - 1, answer[1]];
    }
  }

  return [answer[0], answer[1]];
}

solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']); //?
