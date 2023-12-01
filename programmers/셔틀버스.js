function solution(n, t, m, timetable) {
  // 1. busTimes
  let busTimes = [];
  const initialTime = 540;
  for (let i = 0; i < n; i++) {
    busTimes.push(initialTime + i * t);
  }

  // 2. crewTimes
  let crewTimes = timetable
    .map((time) => {
      const [hour, min] = time.split(':').map(Number);
      return hour * 60 + min;
    })
    .sort((a, b) => a - b)
    .filter((crew) => crew <= busTimes[busTimes.length - 1]);

  for (let j = 0; j < busTimes.length - 1; j++) {
    const bus = busTimes[j];
    let limit = m;

    for (let i = 0; i < crewTimes.length; i++) {
      const crew = crewTimes[i];
      if (limit === 0) break;
      if (crew === 0) continue;

      if (crew <= bus) {
        limit -= 1;
        crewTimes[i] = 0;
      }
    }
  }

  const lastBus = busTimes.pop();

  if (crewTimes.reduce((acc, cur) => acc + cur, 0) === 0) {
    return getTextTime(lastBus);
  }

  crewTimes = crewTimes.filter((time) => time !== 0);

  if (crewTimes.length < m) {
    return getTextTime(lastBus);
  } else {
    return getTextTime(crewTimes.slice(0, m).pop() - 1);
  }
}

function getTextTime(total) {
  const hour = String(Math.floor(total / 60)).padStart(2, '0');
  const min = String(total % 60).padStart(2, '0');
  return `${hour}:${min}`;
}
