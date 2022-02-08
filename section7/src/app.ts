function merge<T, U>(objA: T, ojbB: U) {
  return Object.assign(objA, ojbB);
}

const mergeObj = merge<{ name: string }, { age: number }>(
  { name: 'max' },
  { age: 30 }
);
console.log(mergeObj.name);
