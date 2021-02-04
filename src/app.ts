class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const account = new Department("Accounting");

console.log(account);

account.describe();

const accountCopy = { name: "jinsoo", describe: account.describe };

accountCopy.describe();
