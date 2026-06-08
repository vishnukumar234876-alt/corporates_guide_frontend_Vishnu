const fastSuccess =
  new Promise(r =>
    setTimeout(() => r("fast"), 100));

const slowSuccess =
  new Promise(r =>
    setTimeout(() => r("slow"), 500));

const failure =
  new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error("failed")),
      300
    ));