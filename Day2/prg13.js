export const VERSION = "1.0.0";

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

export const power = (base, exp) => base ** exp;

export const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);
/*import {
  add,
  subtract,
  multiply,
  divide,
  power,
  clamp,
  VERSION
} from "./mathUtils.js";

console.log(add(5, 3));

import * as MathUtils from "./mathUtils.js";

console.log(MathUtils.add(10, 20));*/