// Задание 1


function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let n = arr.length;
  let avg = sum/n;

  for (let i = 0; i < arr.length; i++) {
  	if (i > max) {
  		max = i;
  		sum + i;
  	} else if (i < min) {
  		min = i;
  		sum + i;
  	}
  }

  return { 
  	min: min, 
  	max: max, 
  	avg: avg 
  };
}

getArrayParams([-99, 99, 10]);

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
