"use strict";
function merge(objA, ojbB) {
    return Object.assign(objA, ojbB);
}
const mergeObj = merge({ name: 'max' }, { age: 30 });
console.log(mergeObj.name);
