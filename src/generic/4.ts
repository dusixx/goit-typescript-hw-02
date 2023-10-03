/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

type Hero = { title: string; content?: string };

class Page extends Component<Hero> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: 'Arctic coast way' });
page.pageInfo();

export {};
