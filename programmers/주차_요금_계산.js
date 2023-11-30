function solution([baseTime, baseFee, extraTime, extraFee], records) {
  //0. records parse
  const recordsParsed = records.reduce((acc, record) => {
    const [time, car, type] = record.split(' ');
    const [hour, min] = time.split(':').map(Number);

    acc.push({ time: hour * 60 + min, car, type });

    return acc;
  }, []);

  //1. recordsParsed loop -> inMap, timeMap
  const inMap = {};
  const timeMap = {};

  recordsParsed.forEach(({ time, car, type }) => {
    if (type === 'IN') {
      inMap[car] = time;
    } else {
      if (timeMap[car] === undefined) timeMap[car] = 0;

      timeMap[car] = timeMap[car] + (time - inMap[car]);
      delete inMap[car];
    }
  });

  //2. rest inMap 23:59 - time -> timeMap
  for (const [car, time] of Object.entries(inMap)) {
    if (timeMap[car] === undefined) timeMap[car] = 0;

    timeMap[car] = timeMap[car] + (1439 - time);
    delete inMap[car];
  }

  //3. TimeMap -> FeeMap 계산
  const feeMap = {};

  for (const [car, time] of Object.entries(timeMap)) {
    if (time <= baseTime) {
      feeMap[car] = baseFee;
    } else {
      feeMap[car] =
        baseFee + Math.ceil((time - baseTime) / extraTime) * extraFee;
    }
  }
  //4. sort -> return
  return Object.entries(feeMap)
    .sort((a, b) => a[0] - b[0])
    .map((result) => result[1]);
}
