var onionPrice = 70;
var eggPrice = 13;
// addition , subtraction
var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice);

var priceDefference = onionPrice - eggPrice;
// console.log(priceDefference);

// multiplication
var orangePrice = 20;
var quantity = 7;
var totalPrice = orangePrice * quantity;
// console.log(totalPrice);

// division
var money = 500;
var player = 10;
var eachPlayer = money / player;
// console.log(eachPlayer);

var money = 1000;
var apple = 300;
var orange = 400;
var totalPrice = apple + orange;
// console.log(totalPrice);
var remainder = money - totalPrice;
// console.log(remainder);

var num1 = 75.25;
var num2 = 80;
var num3 = 65;
var num4 = 35.45;
var num5 = 99.50;
var num6 = 5;

var totalNum = num1 + num2 + num3 + num4 + num5;
totalNum /= 5;
totalNum = totalNum.toFixed(2);
totalNum = parseFloat(totalNum);
// console.log(totalNum);

var fristName = 'I am going to be';
var lastName = 'an awesome web developer';
var fullName = fristName + ' ' + lastName;
// console.log(fullName);

var money = 119;
var person = 5;
var remainder = money % person;
// console.log(remainder);

var math = true;
var english = true;
var bangla = false;
if (math == true) {
    if (english == true) {
        if (bangla == true) {

        }
        else {
            // console.log('baka pothe colba na');
        }
    }
    else {
        // console.log('kiccu korte parba na');
    }
}


var isGraduated = true;
var salary = 75000;
var car = 0;
if (isGraduated == true) {
    // console.log('biye kore peli');
}
else {
    // console.log('tor kopale biya nai');
}

if (isGraduated == true && salary > 50000 && car > 1) {
    // console.log('biye kora jabe aber');
}
else {
    // console.log('biye kore jabe na');
}

var chickenPrice = 500;
var myMoney = 50;

if (chickenPrice <= myMoney) {
    // console.log('khabo');
}
else if (chickenPrice < myMoney) {
    // console.log('khabo na');
}
else {
    // console.log('I will eat potato');
}
var iphonePrice = 90000;
var myBudget = 75000;
if (iphonePrice < myBudget) {
    // console.log('kinbo');
}
else {
    // console.log('hobe na');
}

var numbers = [50, 60, 70, 80, 90, 100];
console.log(numbers.length)

var element = numbers[5];
console.log(element);

numbers[1] = 61;
numbers[3] = 81;
console.log(numbers);

var positionIndex = numbers.indexOf(90);
console.log(positionIndex);
numbers.push(110);
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);
