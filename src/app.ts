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

type TestTypeOne = string | number;
type TestTypeTwo = number | boolean;

type TestTypeThree = TestTypeOne | TestTypeTwo;
