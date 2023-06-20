let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of range) {
  num; //?
  for (let num of range) {
    num; //?
  }
  for (let num of range) {
    num; //?
    for (let num of range) {
      num; //?
    }
  }
}

for (let num of range) {
  num; //?
}

for (let num of range) {
  num; //?
}

const test = 'abcd';

for (const chr of test) {
  chr; //?
  for (const chr of test) {
    chr; //?
    for (const chr of test) {
      chr; //?
    }
  }
}
