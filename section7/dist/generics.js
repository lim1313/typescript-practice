"use strict";
// generic
{
    function getSize(arr) {
        return arr.length;
    }
    const arr1 = [1, 2, 3];
    getSize(arr1);
    const arr2 = ['a', 'b', 'c'];
    getSize(arr2);
    const arr3 = [true, false, true];
    getSize(arr3);
}
{
    function getSize(arr) {
        return arr.length;
    }
    const arr1 = [1, 2, 3];
    getSize(arr1);
    const arr2 = ['a', 'b', 'c'];
    getSize(arr2);
    const arr3 = [true, false, true];
    getSize(arr3);
}
const m1 = {
    name: 's21',
    price: 1000,
    option: {
        color: 'red',
        coupon: false,
    },
};
const m3 = {
    name: 's21',
    price: 1000,
    option: {
        color: 'red',
        coupon: false,
    },
};
const m2 = {
    name: 's20',
    price: 1000,
    option: 'good',
};
{
    const user = { name: 'a', age: 10 };
    const book = { price: 1000 };
    function showName(data) {
        return data.name;
    }
    showName(user);
    // showName(book);
}
