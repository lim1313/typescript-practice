//TODO numknown 타입
let userInput: unknown;
let userInput2: any;
let userInput3: string;

userInput = 5;
userInput = 'max';

//! userInput3 = userInput; //=> error
userInput2 = userInput; // any 타입에는 할당할 수 있다.
userInput3 = userInput2; //=> 정상
userInput2 = userInput3; //=> 정상

// if문을으로 타입을 설정한다면 error가 발생하지 않고 할당이 가능하다.
// 때문에 타입을 특정할 수 없지만, 특정 타입 조건에 대해서 확인이 필요하다면 any보다는 unknown 타입을 사용하는 것이 좋다.
if (typeof userInput === 'string') {
  userInput3 = userInput;
}

//TODO nerver 타입
function gernerateError(message: string, code: number) {
  throw { message: message, erroCode: code };
}
gernerateError('errorrr', 500);
// const result = gernerateError('errorrr', 500);
// console.log(result);
