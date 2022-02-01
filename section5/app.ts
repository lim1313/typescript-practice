class Department {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  //static 프로퍼티 or 메소드
  static fiscalYear = '2020';

  static createEmployee(name: string) {
    return { name: name };
  }

  // abstract describe(this: Department): void;
  describe(this: Department) {
    console.log('This is :' + this.id);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  // describe() {
  //   console.log('ITdepartment');
  // }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // lastReport가 private이기 때문에 외부에서 접근하지 못하지만,
  // getter을 통해 접근할 수 있도록 한다.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    console.log(this.reports);
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('pass in a valid value');
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
  }

  // describe() {
  //   console.log('This is AccountingDepartment');
  // }

  addEmployee(name: string) {
    if (name === 'max') return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    console.log(this.reports);
  }

  printGetReports() {
    console.log(this.reports);
  }
}

// Department를 추상화(abstract)했기 때문에 인스턴스화 할 수없다.
// const department = new Department('d1', 'Department');
const department = new Department('d1', 'Department');
const it = new ITDepartment('d1', ['max']);

it.addEmployee('max');
it.addEmployee('manu');

console.log(it);

// department.employees[2] = 'Anna'; //=> error (private 속성 때문)

// const accoutningCopy = { describe: accounting.describe };
// const accoutningCopy = { name: 'copy', describe: accounting.describe };
// accoutningCopy.describe(); // => deparment : copy

department.describe(); // => deparment : Accounting
department.printEmployeeInformation();
console.log(department.name); //=> 정상 동작 (public 속성 때문)

// const accounting = new AccountingDepartment('d2', []);
// accounting.mostRecentReport = 'newOne';
// accounting.addReport('Something is');

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting.mostRecentReport);
// accounting.reports.push('something..'); // => error
// console.log(accounting.reports); // => error (private 속성 때문)

//static 프로퍼티, 메소드 호출
const employee1 = Department.createEmployee('te');
console.log('employee1', employee1, Department.fiscalYear); //=> employee1 {name: 'te'} 2020
