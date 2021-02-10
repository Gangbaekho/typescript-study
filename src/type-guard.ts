interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmplyee extends Admin, Employee {}

const e1: ElevatedEmplyee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name : ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Priviledges : ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date : ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: "Max", startDate: new Date() });

class Car {
  drive() {
    console.log("driving car..");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
