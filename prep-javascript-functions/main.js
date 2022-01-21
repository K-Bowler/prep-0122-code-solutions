function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 6);
console.log('sum:', sum);

/** */

function convertHourstoMinutes(hours) {
  return 60 / 1 * (hours);
}

var minutes = convertHourstoMinutes(2);
console.log('Minutes:', minutes);

/** */

function getGreeting(name) {
  return ('Hello' + ' ' + name);
}

var greeting = getGreeting('world!');
console.log('Greeting:', greeting);

/** */

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var sumMultiply = addAndMultiplyBy5(10, 5);
console.log('sum of Multiplication:', sumMultiply);

/** */

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiplyAndDivideSum = multiplyAndDivideBy5(35, 10);
console.log('multiply And Divide Sum:', multiplyAndDivideSum);

/** */

function subtractTwoNumbers(x, y) {
  return x - y;
}

var subtract = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers:', subtract);

/** */

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference sum:', circumference);

/** */

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

var fullname = getFullName('Kevin', 'Bowler');
console.log('Full name:', fullname);

/** */

function cube(number) {
  return number ** 3;
}

var cubeNumber = cube(5);
console.log('Cube of the number 5:', cubeNumber);
