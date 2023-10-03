/* eslint-disable prefer-const */
let some: unknown = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
  console.log(str);
}

export {};
