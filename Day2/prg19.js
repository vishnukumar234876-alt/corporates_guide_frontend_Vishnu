const fetchName = () =>
  new Promise(r =>
    setTimeout(() => r("Nadia Islam"), 1000)
  );

const fetchAge = () =>
  new Promise(r =>
    setTimeout(() => r(24), 1000)
  );

const fetchCity = () =>
  new Promise(r =>
    setTimeout(() => r("Chittagong"), 1000)
  );