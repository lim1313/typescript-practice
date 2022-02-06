//TODO 인터섹션 타입
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: 'max',
  privileges: ['created-server'],
  startDate: new Date(),
};

// 객체 뿐 아니라 모든 타입에서 인터섹션 타입을 적용할 수 있다.
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
let aa: Universal = 1;

//TODO 타입가드
function add(a: Combinable, b: Combinable) {
  // 아래 라인이 typeof를 활용한 타입가드이다.
  // 유니온 타입이 지닌 유연성을 활용할 수 있게 해주며 런타임 시 코드가 정확하게 작동하게 해 준다.
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformatino(emp: UnknownEmployee) {
  // UnknownEmployee의 Employee, Admin 모두 name 속성이 있기 때문에 OK
  console.log('Name: ' + emp.name);
  // UnknownEmployee의 Employee에는 privileges의 속성이 없기 때문에 Error
  // console.log('Privileges: ' + emp.privileges);

  // in을 활용한 타입가드
  // emp에 privileges 속성이 있는지 확인
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
}

//TODO class 에서의 타입가드
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo..' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//TODO 구별된 유니언
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('Moving at speed : ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

//TODO 형 변환
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'HI, THERE!';
}

//TODO 인덱스 속성

interface ErrorContainer {
  email: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  address: 'seoul',
  username: 'capital',
};
