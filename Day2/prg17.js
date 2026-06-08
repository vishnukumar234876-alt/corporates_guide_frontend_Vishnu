function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id,
        name: "Vishnu",
        email: "vishnu@gmail.com"
      });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ]);
    }, 1000);
  });
}

function getStats(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        views: 500,
        likes: 80,
        comments: 20
      });
    }, 1000);
  });
}

function loadDashboard(id) {

  return getUser(id)

    .then(user => {

      return Promise.all([
        getPosts(user.id),
        getStats(user.id)
      ])
      .then(([posts, stats]) => ({
        user,
        posts,
        stats
      }));

    });

}

loadDashboard(1)
  .then(data => {
    console.log(
      "Dashboard loaded:",
      data
    );
  })
  .catch(err => {
    console.error(
      "Failed:",
      err.message
    );
  });