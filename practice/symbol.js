const id = Symbol('id');
const iter = Symbol('iter_test');

const obj = {
  [id]: 'hello',
  [iter]() {
    console.log('hi');
  },
};

obj[id]; //?

obj.id; //?

obj[iter](); //?
