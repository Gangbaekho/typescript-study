// 여기서 알아야 할 것은 Java 처럼
// return type도 정해줄 수 있다는 것이다.
// 정해주거나, 알아서 typescript가 판별해 줄 수 있다는 거지.
// 따로 정해주지 않으면 알아서 하거나, any로 판단 할 수 있다.

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// return 을 안하면 Java 처럼 void가 return type이 된다.
function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

// error가 난다. return type으로 undefined는 불가능 하다
function printResult2(num: number): undefined {
  console.log(`Result: ${num}`);
}

printResult(add(5, 12));
