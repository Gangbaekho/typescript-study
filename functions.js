"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
//   console.log(`Result: ${num}`);
// }
var combineValues;
combineValues = add;
var combineValues2;
var combineValues3;
function addAndCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// printResult(add(5, 12));
