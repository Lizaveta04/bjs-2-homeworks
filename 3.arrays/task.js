function compareArrays(arr1, arr2) {
  //let result;

  //if (arr1.length === arr2.length && arr1.every(index => arr1[index] === arr2[index])) {
    //return true;
  //} else {
    //return false;
  //}

  return arr1.length === arr2.length && arr1.every(index => arr1[index] === arr2[index]);

  //return result;

}

function advancedFilter(arr) {
  
  return arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item*10);

}
