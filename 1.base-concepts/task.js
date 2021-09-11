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

// percent - процентная ставка
// contribution - сумма первоначального взноса
// amount - сумма кредита
// date - срок (дата окончания кредита)

// Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (дату окончания кредита) в качестве аргументов
function calculateTotalMortgage(percent, contribution, amount, date) {
  //и выдавать сумму (totalAmount), которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).
  
  //Если параметр функции будет строкой, то попытайтесь преобразовать в число. Во всех остальных случаях возвращайте строку: “Параметр <название параметра> содержит неправильное значение <значение параметра>”.
  let p = parseInt(percent);
  if (Number.isNaN(p)) {
  	return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } 

  let c = parseInt(contribution);
  if (Number.isNaN(c)) {
  	return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  
  let a = parseInt(amount);
  if (Number.isNaN(a)) {
  	return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 
 
  // S - тело кредита или основной долг - сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
  let S = amount - contribution;

  // P - процент за пользованием кредита в месяц. 1/12 процентной ставки (от 0 до 1), процентная ставка должна быть дробным числом, следовательно, входные данные нужно разделить на 100.
  let P = percent/12/100;

  // n - кол-во месяцев
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const yearsBetweenYears = date.getFullYear() - currentYear;
  const n = yearsBetweenYears * 12 - currentMonth + date.getMonth();

  //Ежемесячная оплата рассчитывается по формуле:
  let paymentPerMonth = S * (P + P / (((1 + P)**n) - 1));

  let totalAmount = (paymentPerMonth*n).toFixed(2);
  
  return Number(totalAmount);
}
