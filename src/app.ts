// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "jinsoo",
//   age: 12,
//   //   greet(phrase: string) {
//   //     console.log(`${phrase} ${this.name}`);
//   //   },
//   greet: (phrase: string) => {
//     console.log(`${phrase} hello`);
//   },
// };

// user1.greet("my name is");

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("jinsoo");

user1.greet("Hi there - i am");
