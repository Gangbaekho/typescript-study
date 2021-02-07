class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmplyeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'

accounting.printEmplyeeInformation()




