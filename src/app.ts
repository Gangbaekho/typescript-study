class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];

  constructor(private id: string, private name: string, private employees: string[]) {
    // this.id = id;
    // this.name = name;
    // this.employees = employees;
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

const accounting = new Department("id", "name", []);

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'

accounting.printEmplyeeInformation()




