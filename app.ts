let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Jinsoo";
// 마지막에 userInput 이 String임에도 불구하고
// Error가 난다.
// unknown은 any랑 비슷하게 아무 type을 넣을 수는 있는데
// 좀 더 쓰려면 귀찮다는거다.
// 왠만하면 type 잘 맞춰서 쓰고 , 혹시라도 any를 해야 한다하더라도
// unknown을 이용해서 더 귀찮지만 안전하게 사용해야 한다는 말임.
userName = userIput;

// 이렇게 if문을 해서 type check 한다음에
// 넣을 수는 있음.
if (typeof userInput === "string") {
  userName = userInput;
}
