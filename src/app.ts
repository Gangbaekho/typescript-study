abstract class Department {
  constructor(
    private readonly id: string,
    private name: string,
    protected employees: string[]
  ) {}

  abstract describe(this: Department): void;

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

  describe(this: Department) {
    console.log("test");
  }
}

class AccountingDepartment extends Department {
  static fiscalYear = 2021;

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
    console.log(
      `FiscalYear : ${AccountingDepartment.fiscalYear} , in constructor for test`
    );
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe(this: Department) {
    console.log("test");
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

  static createEmployee(name: string) {
    return { name: name };
  }
}

const testEmployee = AccountingDepartment.createEmployee("jinsoo");
console.log(testEmployee);

console.log(`This year is ${AccountingDepartment.fiscalYear}`);

const test = new AccountingDepartment(
  "a1",
  "accountDepartment",
  [],
  ["recentReport"]
);

console.log(test.mostRecentReport);
test.mostRecentReport = "test";
console.log(test.mostRecentReport);
