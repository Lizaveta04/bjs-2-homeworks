const hash = (args) => args.join(',');
function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...rest) {
    let key = hash(rest);
    if (key in cache) {
      console.log("Из кэша: " + cache[key]);
      return "Из кэша: " + cache[key];
    } 
    if (Object.keys(cache).lenght > 5) {
      delete cache[Object.keys(cache)[0]];
    }
    let result = func(...rest);
    cache[key] = result;
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, timeout) {
  let lastCallArgs;
  let timer;
  let flag = false;
  function wrapper(...rest) {
    lastCallArgs = rest;
    if (!flag) {
      flag = true;
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
      return func(...rest);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
    }
  }
  return wrapper;
}


function debounceDecorator2(func, timeout) {
  let lastCallArgs;
  let timer;
  let flag = false;
  let count;
    function wrapper(count, ...rest) {
    lastCallArgs = rest;
    if (!flag) {
      flag = true;
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
      return func(...rest);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
    }
  }
  return wrapper;
  wrapper.count = 0;
  return 'Кол-во вызовов: ' + wrapper.count++;
}
