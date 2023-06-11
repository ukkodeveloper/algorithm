// const fs = require('fs');
// const [month, day] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

const getDaysUntilMonth = (month) => {
  const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = 0;

  if (month < 1 || month > 12) {
    return 0;
  }

  for (let i = 0; i < month; i++) {
    DAYS_PER_MONTH[i];
    result += DAYS_PER_MONTH[i];
  }

  return result;
};

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const solve = (month, day) => {
  const daysUtilMonth = getDaysUntilMonth(month - 1);
  const totalDays = daysUtilMonth + day;

  return DAYS[totalDays % 7];
};

// console.log(solve(month, day));

// solve(1, 1);
// solve(3, 14);
// solve(9, 2);
// solve(12, 25);
