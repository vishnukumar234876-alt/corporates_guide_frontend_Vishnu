function fakeFetch(url) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (url.includes("users")) {
        resolve({
          users: [
            "Alice",
            "Bob",
            "Charlie"
          ]
        });
      }

      else if (url.includes("error")) {
        reject(new Error("Server Error"));
      }

      else {
        resolve({ message: "OK" });
      }

    }, 1000);

  });
}

fakeFetch("/api/users")
  .then(console.log);

fakeFetch("/api/error")
  .catch(err => console.log(err.message));