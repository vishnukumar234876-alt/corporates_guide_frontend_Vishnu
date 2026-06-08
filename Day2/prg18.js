async function loadUserData(id) {

  try {

    const user =
      await fetchUser(id);

    console.log(
      "Got user:",
      user.name
    );

    const posts =
      await fetchPosts(user.id);

    console.log(
      "Got posts:",
      posts.length
    );

    const comments =
      await fetchComments(posts[0].id);

    console.log(
      "Got comments:",
      comments.length
    );

    return comments;

  } catch (err) {

    console.error(
      "Error:",
      err.message
    );

  } finally {

    console.log(
      "Done loading"
    );

  }
}