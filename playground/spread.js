// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

// var groupA = ['Sung', 'Thi'];
// var groupB = ['Rin'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Sung', 18];
var personTwo = ['Du', 20];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Rin', 'Bkdev'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
