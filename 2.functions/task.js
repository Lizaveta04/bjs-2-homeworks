// Задание 1

//Требуется написать функцию getArrayParams(arr), которая получает на вход массив чисел от -100 до 100 и возвращает минимальное, максимальное и среднее арифметическое значений массива.
function getArrayParams(arr) {
  //Внутри функции задайте 3 переменных min (минимальное значение), max (максимальное значение), sum (сумма эелементов) присвоив им некоторые первоначальные значения.
  let min = arr[0];
  let max = arr[0];
  //let min = Infinity;
  //let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

  	if (arr[i] < min) {
  		min = arr[i];
  	} 
    if (arr[i] > max) {
  		max = arr[i];
  	}

    sum += arr[i];

  }

  //n - кол-во элементов.
  let n = arr.length;
  //avg - среднее арифметиеское, округленное до 2-х знаков после запятой и преобразованное обратно к числу.
  let avg = Number((sum/n).toFixed(2));
  
  return { 
  	min: min, 
  	max: max, 
  	avg: avg 
  };

}

// Задание 2

//Напишите функцию worker, которая должна находить сумму элементов массива и возвращать её ("насадка мясорубки").

function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  	sum += arr[i];
  }

  return sum;
}


// Задание 3

//Попробуем реализовать другую насадку для нашей мясорубки. Для этого напишем функцию worker2 которая должна находить разность максимального и минимального значения внутри массива. Это можно интерпретировать как расстояние между минимумом и максимумом. Заметьте, что данная разность - всегда неотрицательное число.
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {

  	if (arr[i] < min) {
  		min = arr[i];
  	} 
    if (arr[i] > max) {
  		max = arr[i];
  	}

  }

  return max - min;

}

//Затем используйте данную насадку как аргумент для функции makeWork.


//Функция makeWork принимает входные данные: массив массивов (мясо) и функцию worker, таким образом makeWork - функция высшего порядка.
function makeWork(arrOfArr, func) {

  let max = func(arrOfArr[0]);

  //Итерируйтесь по массиву arrOfArr с помощью цикла, выполняя worker для каждого элемента (находя сумму), и если она больше ранее найденного максимума - присваивайте max = sum.
  for (let i = 0; i < arrOfArr.length; i++) {

  	if (func(arrOfArr[i]) > max) {
  		max = func(arrOfArr[i]);
  	}
  }
  
  return max;
 
}



