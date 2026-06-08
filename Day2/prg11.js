const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 42,
      profile: {
        name: 'Sumaiya Rahman',
        email: 'sumaiya@example.com',
        address: {
          city: 'Dhaka',
          country: 'Bangladesh'
        }
      },
      stats: {
        posts: 128,
        followers: 3400
      }
    }
  },
  meta: {
    requestId: 'abc123',
    timestamp: 1699000000
  }
};

const {
  status,
  data: {
    user: {
      profile: {
        name,
        email,
        address: { city }
      },
      stats: { posts, followers }
    }
  },
  meta: { requestId }
} = apiResponse;

console.log(
  status,
  name,
  email,
  city,
  posts,
  followers,
  requestId
);