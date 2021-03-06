function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Hello this is test log message!")
class DummyPerson {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new DummyPerson();
