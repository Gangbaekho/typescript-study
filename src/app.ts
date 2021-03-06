function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    console.log("What is the p?");
    console.log(p);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Hello this is test log message!")
@WithTemplate("<h1>My Person Object</h1>", "app")
class DummyPerson {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new DummyPerson();
