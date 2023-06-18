function solution(cap, n, deliveries, pickups) {
  const dStack = [];
  const pStack = [];
  let result = 0;

  for (let i = 0; i < deliveries.length; i++) {
    if (deliveries[i]) dStack.push([deliveries[i], i + 1]);
    if (pickups[i]) pStack.push([pickups[i], i + 1]);
  }

  while (!(dStack.length === 0 && pStack.length === 0)) {
    let dCap = cap;
    let pCap = cap;

    result +=
      Math.max(
        dStack?.[dStack.length - 1]?.[1] ?? 0,
        pStack?.[pStack.length - 1]?.[1] ?? 0
      ) * 2;

    while (dStack.length !== 0 && dCap !== 0) {
      const [dCount, dDistance] = dStack.pop();
      dCap = dCap - dCount;

      if (dCap < 0) {
        dStack.push([Math.abs(dCap), dDistance]);
        dCap = 0;
      }
    }

    while (pStack.length !== 0 && pCap !== 0) {
      const [pCount, pDistance] = pStack.pop();
      pCap = pCap - pCount;

      if (pCap < 0) {
        pStack.push([Math.abs(pCap), pDistance]);
        pCap = 0;
      }
    }
  }
  return result;
}
