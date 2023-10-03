/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

type BookCard = { title: string; author: string; id: number };

class Page extends Component<BookCard> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
