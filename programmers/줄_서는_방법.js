function solution(n, k) {
  let people = [];
  let res = [];
  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  helper(people, k - 1);
  return res;

  function helper(people, k) {
    if (people.length === 0) return;
    let divider = 1;
    for (let i = 1; i < people.length; i++) {
      divider = divider * i;
    }
    let num = parseInt(k / divider);
    k = k % divider;
    let person = people.splice(num, 1);

    res.push(person[0]);
    helper(people, k);
  }
}
