const fruits = ['apple', 'banana', 'cherry'];
const veggies = ['carrot', 'spinach'];
const extras = ['mango', 'papaya'];


const merged = [...fruits, ...veggies, ...extras];


const updatedFruits = ['grape', ...fruits, 'kiwi'];


const fruitsCopy = [...fruits];

console.log(fruits === fruitsCopy); // false


const firstFruit = [...fruits].sort()[0];

console.log(merged);
console.log(updatedFruits);
console.log(firstFruit);