// combine은 뭐 예시지만, 숫자나 string 둘 다 받을 수 있고
// 그에 따라 다른 로직을 처리한다고 가정하자.
// method로서는 좀 구리긴한데 예제니까.
// argument도 number 또는 string이 들어갈 수 있는 구조지만
// 그냥 number | string 이라는 Union type이라고 받아들여야 한다.
function combine(input1: number | string, input2: number | string) {
  let result;
  // 필연적으로 타입 검사해서, 분기 칠 수 밖에 없는 구조이긴 함.
  // 근데 method안에서 이렇게 분기치는거 별로인데
  // 걍 애초에 이런 method를 만들지마라.
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 40);
console.log(combinedAges);

const combineNames = combine("Max", "Anna");
