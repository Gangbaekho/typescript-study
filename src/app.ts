class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];

  constructor(
    private readonly id: string,
    private name: string,
    protected employees: string[]
  ) {
    // this.id = id;
    // this.name = name;
    // this.employees = employees;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmplyeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private admins: string[];

  constructor(id: string, name: string, employees: string[], admins: string[]) {
    super(id, name, employees);
    this.admins = admins;
  }

  showAdmins() {
    console.log(this.admins);
  }

  addEmployee(employee: string) {
    console.log(employee);
    this.employees.push(employee);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private reports: string[];

  constructor(
    id: string,
    name: string,
    employees: string[],
    reports: string[]
  ) {
    super(id, name, employees);
    this.lastReport = reports[0];
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
}

const test = new AccountingDepartment(
  "a1",
  "accountDepartment",
  [],
  ["recentReport"]
);

console.log(test.mostRecentReport);
test.mostRecentReport = "test";
console.log(test.mostRecentReport);
