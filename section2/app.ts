// object
const person: {
  name: string;
  age: number;
} = {
  name: 'max',
  age: 30,
};

console.log(person.name);

// array
const person1: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'max',
  age: 30,
  hobbies: ['sports', 'cooking'],
};

//! 타입 추론
const person2 = {
  name: 'max',
  age: 30,
  hobbies: ['sports', 'cooking', 3],
};

let favoritesports: string[];
favoritesports = ['sports', 'running'];

let favoritesports2: any[];
favoritesports2 = ['sports', 1, 3, true, { name: 'ye' }];

let favoritesports3: (string | number)[];
favoritesports3 = ['sports', 1, 3];

console.log(person2.hobbies); // => hobbies: (string | number)[]

for (const hobby of person2.hobbies) {
  //* console.log(hobby.toUpperCase());
  // 타입 추론으로 number 타입이 있기 때문에 toUpperCase error가 발생
}
