/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

class KeyValue implements KeyValuePair<string | symbol, unknown> {
  constructor(
    private _key: string | symbol,
    private _value: unknown
  ) {}

  get key() {
    return this._key;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }
}

const keyValue = new KeyValue(Symbol('obj'), {});
const keyValue2 = new KeyValue('name', 'Alex');

console.log(keyValue.key, keyValue.value);
console.log(keyValue2.key, keyValue2.value);

keyValue2.value = 'Bob';
const str: string = <string>keyValue2.value;

console.log(str);

export {};
