// generic

{
  function getSize(arr: number[] | string[] | boolean[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize(arr1);

  const arr2 = ['a', 'b', 'c'];
  getSize(arr2);

  const arr3 = [true, false, true];
  getSize(arr3);
}

{
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize<number>(arr1);

  const arr2 = ['a', 'b', 'c'];
  getSize<string>(arr2);

  const arr3 = [true, false, true];
  getSize(arr3);
}

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m3: Mobile<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: 's20',
  price: 1000,
  option: 'good',
};

{
  interface User {
    name: string;
    age: number;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: 'a', age: 10 };
  const book: Book = { price: 1000 };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  // showName(book);
}
