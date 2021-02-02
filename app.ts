// Tuple은 length, type이 정해져있는
// 특수한 Array라고 생각하면 됨
// 아래의 role 같은 경우는 반드시 저 포맷으로
// 이루어져야 한다는 것임.
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "jinsoo",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
