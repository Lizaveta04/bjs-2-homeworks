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
      func(...rest);
      flag = true;
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
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


function debounceDecorator2(func) {
  let lastCallArgs;
  let timer;
  let flag = false;
  function wrapper(count, ...rest) {
    count = 0;
    lastCallArgs = rest;
    if (!flag) {
      func(...rest);
      count++;
      flag = true;
      timer = setTimeout(() => {
        func(...lastCallArgs);
        count++;
        flag = false;
      }, timeout);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...lastCallArgs);
        count++;
        flag = false;
      }, timeout);
    }
  }
  return wrapper;
}


function debounceDecorator2(func) {
  function wrapper(...args) {
    wrapper.count.push(args);
    func(...args);
    return wrapper.count.length;
  }
  wrapper.count = [];
  return wrapper;
}
