function memoize(fn) {

  const cache = {};

  return function (...args) {

    const key =
      JSON.stringify(args);

    if (cache[key]) {
      console.log("Cache Hit");
      return cache[key];
    }

    console.log("Cache Miss");

    const result =
      fn(...args);

    cache[key] = result;

    return result;
  };
}