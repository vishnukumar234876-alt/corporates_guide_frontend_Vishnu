export const isEmail = str =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

export const isPhone = str =>
  /^[0-9]{10}$/.test(str);

export const isEmpty = str =>
  str.trim().length === 0;