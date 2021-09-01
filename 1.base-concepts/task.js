"use strict";
  
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d < 0) {
  	arr;
  } else if (d === 0) {
  	let x = -b/(2*a);
  	arr.push(x);
  } else if (d > 0) {
  	let x1 = (-b+Math.sqrt(d))/(2*a);
  	let x2 = (-b-Math.sqrt(d))/(2*a);
  	arr.push(x1, x2);
  } 
  return arr;
}



// Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (дату окончания кредита) в качестве аргументов
function calculateTotalMortgage(percent, contribution, amount, date) {
  //и выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).
  let totalAmount = contribution + amount + percent;
  // S - тело кредита - сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
  let S = amount - contribution;
  // P - 1/12 процентной ставки (от 0 до 1)
  let P = percent*1/12/100;
  // n - кол-во месяцев
  let n;
  // Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + P / (((1 + P)**n) - 1))
  let paymentPerMonth = S * (P + P / (((1 + P)**n) - 1));
  
  return totalAmount;
}