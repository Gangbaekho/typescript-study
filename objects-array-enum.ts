// Tuple은 length, type이 정해져있는
// 특수한 Array라고 생각하면 됨
// 아래의 role 같은 경우는 반드시 저 포맷으로
// 이루어져야 한다는 것임.
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "jinsoo",
//   age: 29,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 5,
  // 이럴경우는 READ_ONLY = 6이됨. 차례대로.
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "jinsoo",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  // role의 string 값에 따라 뭔가 분기를 칠건데
  // 이건 상당히 위험하다는 거지.
  // Java 같은 경우 이럴 때, ENUM을 이용하는데
  // Typescript는 ENUM을 추가했다는거다.
  // role: "READ ONLY USER",
  role: Role.READ_ONLY,
};
