//TODO return 타입 설정
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//TODO return 타입 : void / 아무런 return이 없을 때
// functin에서 아무런 return이 없을 때 undefied 타입이 불가능하다
// undefined 대신 void를 사용한다
function printResult(num: number): void {
  console.log('result' + num);
}

function printResult2(num: number): void {
  console.log('result' + num);
  return;
}

// undefined를 return할 때 undefined 타입을 사용할 수는 있지만,
// 거의 사용하지 않는다.
function printResult3(num: number): undefined {
  console.log('result' + num);
  return;
}

printResult(add(5, 12));

// undefined 타입은 존재한다
let someValue: undefined;

//TODO 함수 타입
let combineValues: Function;

//TODO 두개의 number 타입 매개변수를 받아 number 타입을 반환한다
let combineValues2: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5; => error
combineValues = printResult;

// combineValues2 = printResult; => error

console.log(combineValues(8, 8));

//TODO 함수 타입 및 콜백
function addAndHandle(n1: number, n2: number, cb: (num: number) => number) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return 3;
});
