function cachingDecoratorNew(func) {
  let cache = [
  	//{ hash: "10,20,30", value: 60 },
  	//{ hash: "2,2,2", value: 6 },
  ];
  function wapper(...args) {
  const hash = (...args) => args.join(','); // получаем правильный хэш
  let idx = cache.findIndex((item) => item.hash === cache.hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx];
    } else {
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push(); // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
  }
  return wapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
