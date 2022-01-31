"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = 'helo';
    }
    describe() {
        console.log('deparment : ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('max');
accounting.addEmployee('manu');
// 이렇게 array에 추가할 수 있지만, class를 사용하는 방법은 확실한 한가지로 정하고 다른 방법은
// 가능하지 않도록 해야한다.
// 규모가 큰 팀에서 일하면 사람마다 다른 방법을 사용할 수 있기 때문이다.
// 따라서 클래스 외부에서 employees에 접근하는 것을 허용해서는 안된다.
// private 설정으로 더이상 이렇게 접근할 수 없다
//! accounting.employees[2] = 'Anna';
accounting.describe(); // => deparment : Accounting
accounting.printEmployeeInformation();
// const accoutningCopy = { describe: accounting.describe };
// const accoutningCopy = { name: 'copy', describe: accounting.describe };
// accoutningCopy.describe(); // => deparment : copy
