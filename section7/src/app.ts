function merge<T extends object, U extends object>(objA: T, ojbB: U) {
  return Object.assign(objA, ojbB);
}

// const mergeObj = merge({ name: 'max' }, 30); // => Error
const mergeObj = merge({ name: 'max' }, { age: 30 }); // => Error

console.log(mergeObj.name);

// 문자열이든 배열이든 상관없이, length 속성을 지니는지만 신경쓰면 된다.
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('hi there '));
console.log(countAndDescribe(['a', 'b']));
// console.log(countAndDescribe(123)); //=> Error

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// extractAndConvert({}, 'name') // => Error
extractAndConvert({ name: 'max' }, 'name'); // => Error

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10); //=> Error
textStorage.addItem('one');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(12);

// const objStorage = new DataStorage<object>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  // return courseGoal;
  //=> Error (courseGoal이 일반 CourseGold 타입이 아닌 CourseGold의 partial 타입이기 때문이다.)

  // 때문에 CourseGoal로 형 변환하여 해결할 수 있다.
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['max', 'sports'];

// names.push('manu'); //=> Error
