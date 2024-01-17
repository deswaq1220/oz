{
  //제네릭 2

  class Item<T> {
    #content: T | null;
    constructor() {
      this.#content = null;
    }

    setItem(value: T) {
      // 아이템 저장
      this.#content = value;
    }

    getItem(): T | null {
      return this.#content;
    } // 아이템 꺼내오기
  }

  const numberItem = new Item<number>();
  numberItem.setItem(10);
  numberItem.getItem(); // 10 반환

  const stringItem = new Item<string>();
  stringItem.setItem("hello");
  stringItem.getItem(); // "hello반후ㅘㄴ"

  interface User {
    id: number;
    name: string;
  }

  interface Product {
    id: number;
    price: number;
    name: string;
  }

  interface Store<T> {
    findById(id: number): T | undefined;
    save(item: T): void;
  }

  class UserRepository implements Store<User> {
    #users: User[] = [];
    findById(id: number): User | undefined {
      return this.#users.find((user) => user.id === id);
    }

    save(user: User): void {
      this.#users.push(user);
    }
  }

  const userRepo = new UserRepository();
  userRepo.save({
    id: 1,
    name: "josh",
  });

  userRepo.save({
    id: 2,
    name: "Amy",
  });

  console.log(userRepo.findById(1));

  class ProductRepository implements Store<Product> {
    #products: Product[] = [];

    findById(id: number): Product | undefined {
      return this.#products.find((product) => product.id === id);
    }

    save(product: Product): void {
      this.#products.push(product);
    }
  }

  const productInfo = new ProductRepository();

  productInfo.save({
    id: 10,
    price:100,
    name:"keyboard"
  })

  productInfo.save({
    id: 20,
    price: 200,
    name: "Mouse"
  })

  console.log(productInfo.findById(20))
}
