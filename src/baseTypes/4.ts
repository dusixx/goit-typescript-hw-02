/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

let person: [string, number] = ['Max', 21];

person = ['Alex', 33];
console.log(person);

export {};
