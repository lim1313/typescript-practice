"use strict";
{
    let user1;
    user1 = {
        name: 'yeye',
        age: 12,
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        },
    };
    user1.greet('hi there');
}
// interface는 객체를 정의할 때 주로 사용한다.
{
    let user2;
    user2 = {
        name: 'yeye',
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        },
    };
    user2.greet('hi there');
}
// interface는 쉼표로 구분하여 여러개를 구현할 수 있다.
{
    class Person2 {
        constructor(n) {
            this.age = 30;
            this.name = n;
        }
        greet(phrase) {
            console.log('hi');
        }
    }
    let user3;
    user3 = {
        name: 'yeye',
        age: 11,
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        },
    };
    user3.greet('hi there');
    let user4 = new Person2('yaa');
    console.log(user4);
}
//? interface 확장하기
{
    class Person3 {
        constructor(n) {
            this.age = 30;
            if (n) {
                this.name = n;
            }
        }
        greet(phrase) {
            if (this.name) {
                console.log('hi' + this.name);
            }
            else {
                console.log('hi');
            }
        }
    }
    let person = new Person3();
}
let add;
add = (n1, n2) => {
    return n1 + n2;
};
