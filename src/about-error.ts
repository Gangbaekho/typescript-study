interface ErrorContainer {
  [prop: string]: string;
}

let example: ErrorContainer = {
  email: "Not a valid email",
  userName: "Anonymous",
  httpStatus: "400",
};
