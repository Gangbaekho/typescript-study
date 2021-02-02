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

// Function type이라는게 존재하나보다.
// 그렇기 떄문에 = 5 는 error가 난다
// 이렇게 단순하게 제한할 수 도 있찌만
// 좀 더 복잡하게 Limit을 걸 수 있다는 거다.
let combineValues: Function;
combineValues = add;
combineValues = 5;

// 이렇게 하면은 parameter가 없고
// return type이 number인 function만
// 참조할 수 있게 된다는 거임.
let combineValues2: () => number;

// 비슷한 맥락임.
// parameter name은 중요하지 않다.
// parameter 갯수를 나타내는게 더 중요함
let combineValues3: (a: number, b: number) => number;

function addAndCallback(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));
