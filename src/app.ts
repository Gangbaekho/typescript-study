const namesOne: Array<string> = [];

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(data.split(" "));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "max" }, { age: 10 });
console.log(mergedObj.name);
