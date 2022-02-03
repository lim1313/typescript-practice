{
  interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
  }

  let user1: Person;
  user1 = {
    name: 'yeye',
    age: 12,
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    },
  };

  user1.greet('hi there');
}

// interface는 객체를 정의할 때 주로 사용한다.
{
  interface Greetable {
    name: string;
    greet(phrase: string): void;
  }

  let user2: Greetable;

  user2 = {
    name: 'yeye',
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    },
  };

  user2.greet('hi there');
}
// interface는 쉼표로 구분하여 여러개를 구현할 수 있다.
{
  interface Greetable2 {
    // readonly 속성
    readonly name: string;
    age: number;
    greet(phrase: string): void;
  }

  class Person2 implements Greetable2 {
    name: string;
    age = 30;

    constructor(n: string) {
      this.name = n;
    }

    greet(phrase: string) {
      console.log('hi');
    }
  }

  let user3: Greetable2;

  user3 = {
    name: 'yeye',
    age: 11,
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    },
  };

  user3.greet('hi there');

  let user4 = new Person2('yaa');
  console.log(user4);
}

//? interface 확장하기

{
  interface Named {
    readonly name?: string;
    outputName?: string; //=> optional
  }

  interface Greetable2 extends Named {
    greet(phrase: string): void;
  }

  class Person3 implements Greetable2 {
    name?: string;
    age = 30;

    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }

    greet(phrase: string) {
      if (this.name) {
        console.log('hi' + this.name);
      } else {
        console.log('hi');
      }
    }
  }

  let person = new Person3();
}

// 함수 타입으로의 인터페이스
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
