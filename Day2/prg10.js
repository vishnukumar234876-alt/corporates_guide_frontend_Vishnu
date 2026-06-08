const rgb = [255, 128, 0];
const [red, green, blue] = rgb;

const coords = [10, 20, 30, 40, 50];
const [x, y, ...remaining] = coords;

const product = {
  id: 'P001',
  name: 'Laptop',
  price: 75000,
  brand: 'Lenovo',
  stock: 12
};

const {
  name,
  price,
  stock: available,
  warranty = '1 year'
} = product;

let a = 'hello';
let b = 'world';

[a, b] = [b, a];

console.log(red, green, blue);
console.log(x, y, remaining);
console.log(name, price, available, warranty);
console.log(a, b);