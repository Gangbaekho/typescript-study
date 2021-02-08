interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "jinsoo",
  age: 12,
  //   greet(phrase: string) {
  //     console.log(`${phrase} ${this.name}`);
  //   },
  greet: (phrase: string) => {
    console.log(`${phrase} hello`);
  },
};

user1.greet("my name is");
