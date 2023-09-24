// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notbook'];
// for (var i = 0; i < items.length; i++) {
//     var item = items[i]
//     if (item == 'pen') {
//         break;
//     }
//     console.log(item);
// }

// var numbers = [45, 78, 87, 89, 120, 69, 56, 76];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i]
//     if (number < 60) {
//         continue;
//     }
//     console.log(number);
// }

// var side1 = 9;
// var side2 = 8;
// var side3 = 9;
// if (side1 == side2 || side1 == side3 || side2 == side3) {
//     console.log('icoceles');
// }

// var marks1 = 86;
// var marks2 = 66;

// if (marks1 > 80) {
//     console.log('A grade');
// }
// if (marks2 > 60) {
//     console.log('B grade');
// }

// function singara(money) {
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice;
//     return quantity;
// }

// var myTaka = 150;
// var singaras = singara(myTaka);
// console.log('eating singara', singaras)

// function getAvarage(assi1, assi2, assi3) {
//     const total = assi1 + assi2 + assi3;
//     const avarage = total / 3;
//     return avarage;
// }

// const assi1Marks = 60;
// const assi2Marks = 58;
// const assi3Marks = 59;

// var myAvarage = getAvarage(assi1Marks, assi2Marks, assi3Marks);
// console.log('my avarage', myAvarage);

// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keybord: 5,
//     mouse: 1,
//     pen: 20,
// }
// const keys = Object.keys(shoppingCart);
// // console.log(keys);
// const values = Object.values(shoppingCart);
// // console.log(values);

// // var keys = ['books', 'sunglass', 'mouse', 'pen']
// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName);
// }

function milesToKm(miles) {
    const km = miles * 1.609;
    return km;

}
const schoolMiles = 8;
const schoolKm = milesToKm(schoolMiles);
console.log(schoolKm);