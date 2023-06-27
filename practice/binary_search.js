const binarySearch = (arr, target) => {
  const helper = (left, right, arr, target) => {
    if (left > right) return undefined;

    const mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      return helper(left, mid - 1, arr, target);
    }

    return helper(mid + 1, right, arr, target);
  };

  return helper(0, arr.length - 1, arr, target);
};

binarySearch([1, 2, 3, 4, 5, 6], 6); //?
