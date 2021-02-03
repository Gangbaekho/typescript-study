function add(n1: number, n2: number): number {
  return n1 + n2;
}

// function printResult(num: number): void {
//   console.log(`Result: ${num}`);
// }

let combineValues: Function;
combineValues = add;

let combineValues2: () => number;

let combineValues3: (a: number, b: number) => number;

function addAndCallback(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 12));
