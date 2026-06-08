function wait(ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  );
}

async function retry(asyncFn, times, delay) {

  let lastError;

  for (let attempt = 1; attempt <= times; attempt++) {

    try {
      console.log(`Attempt ${attempt}`);

      return await asyncFn();

    } catch (err) {

      lastError = err;
      console.log(err.message);

      if (attempt < times) {
        await wait(delay);
      }
    }
  }

  throw lastError;
}