"use strict"
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


	
for (let i = 0 ;i < 2 ; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", '');
  if ((typeof(a))==="string"&& (typeof(a)) !=null && (typeof(b)) !=null
  && a != ''&& b != ''&& a.length < 30) {
      console.log("done");
      appData.expenses [a]= b;
  }
}
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" +appData.moneyPerDay);

if(appData.moneyPerDay > 100) {
    console.log("Да ты богат,друг");
}else if (appData.moneyPerDay < 100 && appData.moneyPerDay > 50) {
    console.log("Средний достаток");
}else if (appData.moneyPerDay < 30) {
    console.log("Да ты нищий");
}else if (appData.moneyPerDay <= 0) {
    console.log("Вешайся")
}



