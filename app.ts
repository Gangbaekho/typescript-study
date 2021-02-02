const person = {
  name: "jinsoo",
  age: 29,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// 재밋는건 hobby가 hobbies의 item이니고
// hobbies가 string[] 이기 떄문에
// hobby가 string이라고 typescript는 알 수 있다.
// 그렇기 때문에 string method가 아닌 것은 error를 낸다는 것이지.
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // map은 array에서 지원하니까 hobby는 안된다.
  // 밑에꺼 error를 띄운다는 거임.
  // console.log(hobby.map((item)=>item+1));
}
