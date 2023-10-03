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
}

const keyValue = new KeyValue(Symbol('obj'), {});

console.log(keyValue.key, keyValue.value);

export {};
