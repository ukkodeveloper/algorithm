function solution(dartResult) {
  let answer = 0;
  const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  const scoreBoard = [];
  //1. parsing
  const results = dartResult.match(/(10|[0-9])[SDT][*#]?/g);

  //2. score
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const [scoreStr, bonusStr, prize] = result.match(
      /(10|[0-9])|([SDT])|[*#]/g
    );
    const score = Number(scoreStr);
    scoreBoard[i] = score ** bonus[bonusStr];

    if (prize === '*') {
      if (i >= 1) {
        scoreBoard[i - 1] *= 2;
      }

      scoreBoard[i] *= 2;
    } else if (prize === '#') {
      scoreBoard[i] *= -1;
    }
  }

  //3.aggregate
  return scoreBoard.reduce((acc, score) => acc + score, 0);
}
