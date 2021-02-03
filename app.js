"use strict";
// throw의 특징은 return값을 절대로 내보내지 않는다는거다
// 절대로 return 값을 보내서는 안되는 그런 함수를 만들고 싶으면은
// return type에다가 never를 쓰면 된다.
// 뭐 언젠가는 쓸 일이 있겠지
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
