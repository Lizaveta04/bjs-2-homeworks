function cachingDecoratorNew(func) {
  let cache = [
    //{ hash: "10,20,30", value: 60 },
    //{ hash: "2,2,2", value: 6 },
  ];
  function wrapper(...rest) {
    const hash = (args) => args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash(rest)); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент не найден
      console.log("Из кэша: " + cache[hash(rest)]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[hash(rest)];
    }
    let result = func(...rest); // в кэше результата нет - придётся считать
    for (let i = 0; i < cache.length; i++) {
      cache.push(cache[i]); // добавляем элемент с правильной структурой
    }
    if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}