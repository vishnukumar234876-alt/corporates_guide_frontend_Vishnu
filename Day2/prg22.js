function demonstrateEventLoop() {

  console.log("[SYNC] Starting");

  setTimeout(() => {

    console.log("[MACRO] setTimeout fired");

    Promise.resolve()
      .then(() => {
        console.log(
          "[MICRO] inside setTimeout"
        );
      });

    setTimeout(() => {
      console.log(
        "[MACRO] nested setTimeout"
      );
    }, 0);

  }, 0);

  Promise.resolve()
    .then(() => {
      console.log(
        "[MICRO] Promise resolved"
      );
    })
    .then(() => {
      console.log(
        "[MICRO] Chained promise"
      );
    });

  console.log("[SYNC] Ending");
}

demonstrateEventLoop();