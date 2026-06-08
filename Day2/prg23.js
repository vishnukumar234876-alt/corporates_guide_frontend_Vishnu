function makeCounter(start = 0, step = 1) {

  let count = start;

  return {

    increment() {
      count += step;
    },

    decrement() {
      count -= step;
    },

    reset() {
      count = start;
    },

    getCount() {
      return count;
    }
  };
}

const c1 = makeCounter();
const c2 = makeCounter(10, 5);

c1.increment();
c1.increment();
c1.increment();

console.log(c1.getCount());

c2.increment();
c2.increment();

console.log(c2.getCount());

c1.reset();

console.log(c1.getCount());
console.log(c2.getCount());