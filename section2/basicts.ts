function add(n1: number, n2: number) {
  return n1 + n2;
}

let number1: number;
number1 = 5;

//! 타입 추론 에러
let number2 = 2.8;
// number2 = 'This is string';

const result = add(number1, number2);
console.log(result);
