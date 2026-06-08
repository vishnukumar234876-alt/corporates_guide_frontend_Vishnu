function createEmailTemplate({
  to,
  subject = 'No Subject',
  body = '',
  from = 'noreply@app.com',
  cc = [],
  isHtml = false
}) {
  return {
    to,
    from,
    subject,
    body,
    cc,
    isHtml
  };
}

const email = createEmailTemplate({
  to: 'user@example.com',
  subject: 'Welcome!',
  body: '<h1>Hello</h1>',
  isHtml: true
});

console.log(email);
function distanceFromOrigin([x, y, z]) {
  return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
}

console.log(distanceFromOrigin([3, 4, 12]));