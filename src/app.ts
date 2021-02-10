// type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Named {
  readonly name: string;
  outputName?: string;

  constructor(name: string, outputName?: string) {
    this.name = name;
    if (outputName) {
      this.outputName = outputName;
    }
  }
}
