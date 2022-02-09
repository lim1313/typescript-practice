"use strict";
function merge(objA, ojbB) {
    return Object.assign(objA, ojbB);
}
// const mergeObj = merge({ name: 'max' }, 30); // => Error
const mergeObj = merge({ name: 'max' }, { age: 30 }); // => Error
console.log(mergeObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('hi there '));
console.log(countAndDescribe(['a', 'b']));
// console.log(countAndDescribe(123)); //=> Error
function extractAndConvert(obj, key) {
    return obj[key];
}
// extractAndConvert({}, 'name') // => Error
extractAndConvert({ name: 'max' }, 'name'); // => Error
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
// textStorage.addItem(10); //=> Error
textStorage.addItem('one');
const numberStorage = new DataStorage();
numberStorage.addItem(12);
// const objStorage = new DataStorage<object>();
