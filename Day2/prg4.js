const square = n => n * n;

const greet = name => `Hello, ${name}!`;

const isEven = n => n % 2 === 0;

const getFullName = (first, last) => ({
  fullName: `${first} ${last}`
});

const noOp = () => {};
console.log(square(5));
console.log(greet("Ravi"));
console.log(isEven(4));
console.log(getFullName("Vishnu", "Kumar"));