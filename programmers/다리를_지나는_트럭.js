function solution(bridge_length, weight, truck_weights) {
  const trucks = truck_weights.reverse();
  const bridge = new Array(bridge_length).fill(0);

  let sec = 0;
  let curWeight = 0;
  let truckWating = trucks.pop();

  do {
    sec += 1;
    curWeight -= bridge.pop();

    if (truckWating + curWeight <= weight) {
      bridge.unshift(truckWating);
      curWeight += truckWating;
      truckWating = trucks.pop();
    } else {
      bridge.unshift(0);
    }
  } while (curWeight > 0);

  return sec;
}
