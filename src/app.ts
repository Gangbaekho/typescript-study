class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];

  constructor(private readonly id: string, private name: string, protected employees: string[]) {
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

class ITDepartment extends Department {

  private admins: string[];

  constructor(id: string, name: string, employees: string[], admins: string[]) {
    super(id, name, employees)
    this.admins = admins;
  }

  showAdmins() {
    console.log(this.admins)
  }

  addEmployee(employee: string) {
    console.log(employee)
    this.employees.push(employee)
  }

}

const test = new ITDepartment('t1', 'samsung', [], []);
test.addEmployee('jinsoo')





