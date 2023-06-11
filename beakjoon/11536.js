// const [, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const solve = (input) => {
  const isAscending = input[0] < input[1];

  for (let i = 1; i < input.length - 1; i++) {
    if (isAscending && input[i] > input[i + 1]) {
      return 'NEITHER';
    }

    if (!isAscending && input[i] < input[i + 1]) {
      return 'NEITHER';
    }
  }

  return isAscending ? 'INCREASING' : 'DECREASING';
};

// console.log(solve(input));

// solve(['JOE', 'BOB', 'ANDY', 'AL', 'ADAM']);

// solve([
//   'HOPE',
//   'ALI',
//   'BECKY',
//   'JULIE',
//   'MEGHAN',
//   'LAUREN',
//   'MORGAN',
//   'CARLI',
//   'MEGAN',
//   'ALEX',
//   'TOBIN',
// ]); //?

// solve(['GEORGE', 'JOHN', 'PAUL', 'RINGO']); //?
