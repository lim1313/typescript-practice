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
