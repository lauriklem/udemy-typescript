export {}
abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No reports found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please add value");
    }
    this.addReport(value);
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Employee");
console.log(employee1, Department.fiscalYear);

// const accounting = new Department("d1", "Accounting");
const it = new ITDepartment("d1", ["Admin1", "Admin2"]);
it.describe();

const accountingCopy = { name: "name", describe: it.describe };
//accountingCopy.describe();

it.addEmployee("First");
it.addEmployee("Second");
// accounting.employees[2] = 'Third';

it.printEmployeeInformation();

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Some report");
accounting.printReports();

accounting.mostRecentReport = "Latest report";

accounting.printReports();
accounting.describe();
