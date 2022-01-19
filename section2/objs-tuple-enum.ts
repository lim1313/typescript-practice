{
  //TODO object 객체
  const person: {
    name: string;
    age: number;
  } = {
    name: 'max',
    age: 30,
  };

  console.log(person.name);

  //TODO 타입 추론
  const person2 = {
    name: 'max',
    age: 30,
    hobbies: ['sports', 'cooking', 3],
  };

  // array
  const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple : 배열 안의 요소가 원하는 길이만큼 원하는 타입을 지정
  } = {
    name: 'max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [10, 'tuple'],
  };

  //TODO tuple 튜플
  person1.role[0] = 5; // => 정상
  // person1.role.push('admin'); // => 정상
  // person1.role[1] = 10; // => error
  // person1.role = [0, 'dd', 'dd']; // => error

  //TODO array 배열
  let favoritesports: string[];
  favoritesports = ['sports', 'running'];

  //TODO any 타입
  let favoritesports2: any[];
  favoritesports2 = ['sports', 1, 3, true, { name: 'ye' }];

  let favoritesports22: any;
  favoritesports22 = ['sports', 1, 3, true, { name: 'ye' }];

  let favoritesports3: (string | number)[];
  favoritesports3 = ['sports', 1, 3];

  console.log(person2.hobbies); // => hobbies: (string | number)[]

  for (const hobby of person2.hobbies) {
    //* console.log(hobby.toUpperCase());
    // 타입 추론으로 number 타입이 있기 때문에 toUpperCase error가 발생
  }
}

//TODO enum 열거형
{
  enum Role {
    ADMIN = 'admin',
    READ = 12,
    AUTHOR,
  }

  const person = {
    name: 'max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
  };

  if (person.role === Role.ADMIN) {
    console.log(Role.ADMIN);
  }
}
