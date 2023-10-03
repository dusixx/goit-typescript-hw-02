// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
const empty: null = null;
const notInitialize: undefined = undefined;

type CallbackFunc = (a: number) => number;
const callback: CallbackFunc = (a: number) => 100 + a;

age = 22;
name = 'Sibyl';
toggle = false;
const foo = (cb: CallbackFunc) => cb(10);

console.log(age, name, toggle, empty, notInitialize, foo(callback));

export {};
