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

//*Тот же вопрос, что и в первом задании: каким образом заполняются массивы и вызываются функции?*
function worker(arr) {

	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {

		sum += arr[i];

	}

  return sum;
}

//*Мы должны func менять на worker?*
function makeWork(arrOfArr, func) {
	//*Какое первоначальное значение должно быть у max?*
	let max = ?;
	let sum = 0;

	//*В цикле то, как я поняла 3 и 4 пункты. Очень прошу, измените формулировку заданий. Их невозможно понять новичку!*
	for (let i = 0; i < arrOfArr.length; i++) {

		func(arr);

		sum += worker(arrOfArr[i]);

		if (func(arr) > max) {
			max = sum;
		}

	}
  
  return max;
}



// Задание 3
//Не вижу смысла даже начинать...
function worker2(arr) {
  // Ваш код
}
