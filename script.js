// "use strict"
// let money = prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses[a1] = a2;
// appData.expenses[a3] = a4;
// alert(appData.budget / 30);
// ---------------
// if (5+5==10){
//     console.log("куку")
// }else {
//     console.log('некуку')
// }
let num = 50;
// switch (num) {
//     case num < 49:
//         console.log("Неверно");
//         break;
//     case num > 100:
//         console.log("Много");
//         break;
//     case num > 80:
//         console.log("Многовато");
//         break;
//     case  50:
//         console.log("В точку");
//         break;
//     default:
//         console.log("что то пошло не так");
//         break;
// }
// while (num < 55){ 
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num<55);
for (let i = 1;i < 150; i++){
    if (i % 5){
        continue
    }
    console.log(i);
}